#!/usr/bin/env python3
"""build.py — 生成 gameplay-ai-reference 子库

输入：Gameplay Atlas 的 catalog.json（不上游完整转存到本仓库）。
输出：精简玩法数据、28 系统索引、280 个参考页与 AI 原型模板。

版权边界：
- 不保存图片文件，不保存图片直链，不生成热链图片；
- 只保留案例的来源页、画面来源页与权利人信息；
- 玩法文字保留出处，AI 模板要求使用原创素材并避开第三方游戏表达。

用法：
  python3 gameplay-ai-reference/scripts/build.py \
    --input /path/to/catalog.json --out gameplay-ai-reference
"""
from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path

UPSTREAM = "https://gameplayatlas.loopyhop.com/"
LICENSE = "CC-BY-NC-4.0"
LICENSE_NOTE = (
    "玩法整理文字按本仓库默认的 CC BY-NC 4.0 姿态分享，版权归原作者及整理方；"
    "游戏名称、截图与其他第三方素材权利归各自权利人。原作者或整理方另有声明时以其声明为准。"
)
MEDIA_NOTE = (
    "不收录图片文件、图片直链或热链。画面来源页仅用于前往原站查看；"
    "这不构成对图片再利用的授权。"
)

SYSTEM_ZH = {
    "automation": "自动化与物流", "building": "建造与空间", "combat": "战斗与战术",
    "movement": "移动与操控", "deckbuilding": "卡组构筑", "progression": "成长与解锁",
    "survival": "生存与压力", "stealth": "潜行与警戒", "incremental": "放置与增量",
    "commerce": "商业与交易", "cooking": "烹饪与食物", "gathering": "采集与挖掘",
    "matching": "匹配与消除", "narrative": "叙事与选择", "projectiles": "射击与弹道",
    "command": "指挥与单位", "farming": "种植与经营", "fishing": "钓鱼与捕捉",
    "inventory": "背包与资源", "puzzles": "解谜与推理", "relationships": "社交与关系",
    "cooperation": "合作与分工", "defense": "防御与阵地", "ecology": "生态与系统",
    "allocation": "分配与调度", "driving": "驾驶与竞速", "rhythm": "节奏与节拍",
    "exploration": "探索与路线",
}


def localized(value, lang):
    if isinstance(value, dict):
        return value.get(lang) or value.get("en") or value.get("zh") or ""
    return value or ""


def compact_reference(case):
    """保留来源与权利信息，明确剔除图片文件地址和直链。"""
    return {
        "game": case.get("game"),
        "gameZh": case.get("gameZh"),
        "source": case.get("source"),
        "sourceLabel": case.get("sourceLabel"),
        "rights": case.get("rights"),
        "verified": case.get("verified"),
        "imageReference": {
            "sourcePage": case.get("imageSource"),
            "kind": case.get("imageKind"),
            "observation": case.get("observation"),
            "mediaIncluded": False,
            "note": MEDIA_NOTE,
        },
    }


def make_prompt(item):
    loop = "\n".join(f"{i}. {localized(step, 'zh')}" for i, step in enumerate(item["loop"], 1))
    decisions = "\n".join(f"- {localized(x, 'zh')}" for x in item["decisions"])
    params = "\n".join(
        f"- {localized(p.get('name'), 'zh')}：{localized(p.get('effect'), 'zh')}"
        for p in item["parameters"]
    )
    proto = item["prototype"]
    return f"""你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
{item['name']['zh']}（{item['name']['en']}）

## 设计目标
{item['summary']['zh']}

## 基础规则
{localized(item['rules'], 'zh')}

## 核心循环
{loop}

## 关键取舍
{decisions}

## 可调参数
{params}

## 最小实现建议
{localized(proto.get('firstStep'), 'zh')}

## 验证方式
{localized(proto.get('test'), 'zh')}

## 需要避免
{localized(proto.get('pitfall'), 'zh')}

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。"""


def convert(item):
    source_url = f"{UPSTREAM}mechanic/{item['id']}/"
    out = {
        "id": item["id"],
        "system": item["system"],
        "systemZh": SYSTEM_ZH.get(item["system"], item["system"]),
        "name": item["name"],
        "summary": item["summary"],
        "tags": item.get("tags") or [],
        "rules": item.get("rules"),
        "loop": item.get("loop") or [],
        "decisions": item.get("decisions") or [],
        "parameters": item.get("parameters") or [],
        "prototype": item.get("prototype") or {},
        "references": [compact_reference(c) for c in item.get("cases") or []],
        "contrast": item.get("contrast"),
        "combination": item.get("combination"),
        "combinesWith": item.get("combinesWith") or [],
        "combinationIds": item.get("combinationIds") or [],
        "related": item.get("related") or [],
        "sourceUrl": source_url,
        "contentLicense": LICENSE,
        "licenseNote": LICENSE_NOTE,
        "attribution": {
            "creator": "Gameplay Atlas · LoopyHop",
            "sourceUrl": source_url,
            "upstream": UPSTREAM,
        },
        "mediaPolicy": {
            "imagesIncluded": False,
            "directImageLinksIncluded": False,
            "note": MEDIA_NOTE,
        },
        "edition": item.get("edition"),
    }
    out["aiPrototypePrompt"] = make_prompt(out)
    return out


def md_escape(value):
    return str(value).replace("\\", "\\\\").replace('"', '\\"')


def render_markdown(item, prompt):
    lines = [
        "---",
        f"id: {item['id']}",
        f"title: \"{md_escape(item['name']['zh'])}\"",
        f"system: {item['system']}",
        f"source: {item['sourceUrl']}",
        f"contentLicense: {LICENSE}",
        "imagesIncluded: false",
        "---",
        "",
        f"# {item['name']['zh']} · {item['name']['en']}",
        "",
        f"> {item['summary']['zh']}",
        "",
        f"- **系统**：{item['systemZh']}（{item['system']}）",
        f"- **标签**：{', '.join(item['tags'])}",
        f"- **出处**：[Gameplay Atlas]({item['sourceUrl']})",
        "",
        "## 基础规则",
        "",
        localized(item["rules"], "zh"),
        "",
        "## 核心循环",
        "",
    ]
    lines += [f"{i}. {localized(step, 'zh')}" for i, step in enumerate(item["loop"], 1)]
    lines += ["", "## 关键取舍", ""]
    lines += [f"- {localized(x, 'zh')}" for x in item["decisions"]]
    lines += ["", "## 可调参数", ""]
    lines += [
        f"- **{localized(p.get('name'), 'zh')}**：{localized(p.get('effect'), 'zh')}"
        for p in item["parameters"]
    ]
    proto = item["prototype"]
    lines += [
        "", "## 最小原型", "",
        f"- **第一步**：{localized(proto.get('firstStep'), 'zh')}",
        f"- **验证**：{localized(proto.get('test'), 'zh')}",
        f"- **避免**：{localized(proto.get('pitfall'), 'zh')}",
        "", "## AI 原型任务模板", "", "```text", prompt, "```",
        "", "## 实现参考与画面出处", "",
        "> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。",
        "",
    ]
    for ref in item["references"]:
        lines += [
            f"### {ref.get('gameZh') or ref.get('game')}（{ref.get('game')}）",
            "",
            f"- 机制来源：[{ref.get('sourceLabel') or '来源'}]({ref.get('source')})",
            f"- 画面来源页：{ref['imageReference'].get('sourcePage') or '未提供'}",
            f"- 权利人：{ref.get('rights') or '以来源页为准'}",
            f"- 核验日期：{ref.get('verified') or '未标注'}",
            "",
        ]
    if item.get("contrast"):
        lines += ["## 对比观察", "", localized(item["contrast"], "zh"), ""]
    if item.get("combination"):
        lines += ["## 组合灵感", "", localized(item["combination"], "zh"), ""]
    lines += ["---", "", "原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。", ""]
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", required=True, help="上游 catalog.json 的本地路径")
    ap.add_argument("--out", required=True, help="子库目录")
    args = ap.parse_args()
    root = Path(args.out)
    for name in ("data", "mechanics", "prompts"):
        (root / name).mkdir(parents=True, exist_ok=True)

    source = json.loads(Path(args.input).read_text(encoding="utf-8"))
    items = [convert(x) for x in source]
    with (root / "data" / "mechanics.jsonl").open("w", encoding="utf-8") as f:
        for item in items:
            f.write(json.dumps(item, ensure_ascii=False) + "\n")

    counts = Counter(x["system"] for x in items)
    systems = [
        {"id": sid, "nameZh": SYSTEM_ZH.get(sid, sid), "count": count,
         "sourceUrl": f"{UPSTREAM}?system={sid}"}
        for sid, count in sorted(counts.items())
    ]
    meta = {
        "title": "游戏与 AI 玩法参考",
        "upstream": UPSTREAM,
        "sourceSnapshot": "2026-10-25",
        "mechanicCount": len(items),
        "systemCount": len(systems),
        "imagesIncluded": 0,
        "directImageLinksIncluded": 0,
        "mediaPolicy": MEDIA_NOTE,
        "systems": systems,
    }
    (root / "data" / "systems.json").write_text(
        json.dumps(systems, ensure_ascii=False, indent=2), encoding="utf-8")
    (root / "data" / "meta.json").write_text(
        json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")

    for item in items:
        prompt = item["aiPrototypePrompt"]
        (root / "mechanics" / f"{item['id']}.md").write_text(
            render_markdown(item, prompt), encoding="utf-8")
        system_dir = root / "prompts" / item["system"]
        system_dir.mkdir(exist_ok=True)
        (system_dir / f"{item['id']}.md").write_text(
            f"# {item['name']['zh']} · AI 原型任务模板\n\n"
            f"> 来源：{item['sourceUrl']}\n\n```text\n{prompt}\n```\n",
            encoding="utf-8")

    index_lines = [
        "# 玩法总索引", "",
        f"共 {len(items)} 个机制、{len(systems)} 个系统。每条含玩法说明、最小原型和 AI 任务模板。", "",
    ]
    for system in systems:
        sid = system["id"]
        index_lines += [f"## {system['nameZh']} · {sid}（{system['count']}）", ""]
        for item in [x for x in items if x["system"] == sid]:
            index_lines.append(
                f"- [{item['name']['zh']} · {item['name']['en']}](mechanics/{item['id']}.md) — {item['summary']['zh']}"
            )
        index_lines.append("")
    (root / "INDEX.md").write_text("\n".join(index_lines), encoding="utf-8")
    print(f"[done] {len(items)} 个机制，{len(systems)} 个系统；图片收录 0，图片直链 0")


if __name__ == "__main__":
    main()

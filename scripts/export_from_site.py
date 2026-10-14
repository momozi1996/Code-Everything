#!/usr/bin/env python3
"""export_from_site.py — code-everything 数据导出管线（可复现）

从 Frontier 站点（或本地镜像目录）读取 8 个数据文件，导出为 JSONL，
并生成人类可读的 prompts/ 与 cases/ Markdown 页面。

用法：
    python scripts/export_from_site.py                 # 从线上站点读取
    python scripts/export_from_site.py --mirror DIR    # 从本地镜像目录读取
    python scripts/export_from_site.py --out DIR       # 指定仓库根目录（默认当前目录）

导出的数据会经过合规清洗：移除内部文档系统的链接 / 内部 ID / 令牌，
第三方原文内容不做任何改写。

仅使用 Python 标准库。
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.request
from pathlib import Path

SITE_BASE = "https://bright-harbor-3f6b.page.stepcloud.com"

# 数据文件 -> (jsonl 文件名, 列表字段名, 集合标题)
DATASETS = {
    "catalog.js": ("cases.jsonl", "cases", "主案例库"),
    "code2video.js": ("code2video.jsonl", "items", "Code2Video 合集"),
    "github-projects.js": ("github-projects.jsonl", "items", "完整 GitHub 项目"),
    "goodcase.js": ("goodcase.jsonl", "items", "GoodCase 广场"),
    "opus-video-prompts.js": ("opus-video-prompts.jsonl", "items", "向阳乔木视频提示词"),
    "astra-prompts.js": ("astra-prompts.jsonl", "items", "Astra 提示词"),
    "game-prompts.js": ("game-prompts.jsonl", "items", "手游反推提示词"),
    "problems.js": ("world-problems.jsonl", "problems", "世界难题集"),
}

DEFAULT_LICENSE = "CC-BY-NC-4.0"
LICENSE_NOTE = (
    "默认许可：署名-非商业使用（CC BY-NC 4.0）。本条内容为第三方原作者作品，"
    "若原作者另有明确声明，以原作者声明为准。如需下架请提 Issue，即刻移除。"
)

# —— 合规清洗：移除内部文档系统的链接、内部 ID 与令牌 ——
# 上游整理文档（私有）的 URL、文档/表格 token、块级定位 ID 一律不进入仓库，
# 既保护数据源隐私，也避免误公开内部链接带来的权利风险。
SENSITIVE_KEYS = {
    "documentUrl", "documentId", "sourceDoc", "sourceSheetToken",
    "sourceSheetId", "sourceRange", "sourceRevision",
    "sourceBlock", "sourceTable", "sourceKey", "fieldBlocks", "sourcePage",
}
INTERNAL_DOC_URL = re.compile(r"https?://[\w.-]*feishu\.cn\S*", re.IGNORECASE)
# 内部系统的用户/会话 ID（ou_ 前缀等，要求前面不是字母数字，避免误伤 URL 中的随机串）
INTERNAL_ID = re.compile(r"(?<![A-Za-z0-9])(?:ou|oc|on)_[A-Za-z0-9]{10,}")

# 维护者撰写的说明文字中的内部系统称谓与措辞，统一改为中性表述（不改第三方原文）
TEXT_REPLACEMENTS = [
    ("飞书多维表格", "在线多维表格"),
    ("飞书表格", "在线表格"),
    ("飞书文档", "原文档"),
    ("飞书同源", "文档同源"),
    ("飞书", "在线文档"),
    ("截至抓取时", "截至收录时"),
    ("抓取时点", "收录时点"),
    ("open_id 已在导入时核对（[已脱敏]）", "作者身份已在导入时核对"),
]


def sanitize(obj):
    """递归清洗：删除敏感字段、移除内部文档链接与内部 ID、改写维护者文字。"""
    if isinstance(obj, dict):
        return {k: sanitize(v) for k, v in obj.items() if k not in SENSITIVE_KEYS}
    if isinstance(obj, list):
        out = []
        for v in obj:
            sv = sanitize(v)
            if sv is None and isinstance(v, str):
                continue  # 列表元素整个就是一条内部链接 → 丢弃
            out.append(sv)
        return out
    if isinstance(obj, str):
        s = INTERNAL_DOC_URL.sub("", obj).strip()
        if not s and obj.strip():
            return None  # 整串就是内部链接 → 置空
        s = INTERNAL_ID.sub("[已脱敏]", s)
        for old, new in TEXT_REPLACEMENTS:
            s = s.replace(old, new)
        return s
    return obj


def fetch_text(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "code-everything-export/1.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8")


def load_window_json(raw: str):
    """解析 `window.XXX = {...};` 格式的数据文件。"""
    m = re.match(r"\s*window\.(\w+)\s*=\s*", raw)
    body = raw[m.end():] if m else raw
    return json.loads(body.rstrip().rstrip(";"))


def get_source_url(item: dict) -> str | None:
    for key in ("xUrl", "sourceUrl", "goodcaseUrl", "repoUrl", "repositoryUrl"):
        v = item.get(key)
        if isinstance(v, str) and v.startswith("http"):
            return v
    for key in ("sourceList", "sources"):
        sl = item.get(key)
        if isinstance(sl, str) and sl.strip().startswith("["):
            # 部分数据集中 sources 是字符串化的列表
            import ast
            try:
                sl = ast.literal_eval(sl)
            except (ValueError, SyntaxError):
                continue
        if isinstance(sl, list):
            for entry in sl:
                if isinstance(entry, str) and entry.startswith("http"):
                    return entry
                if isinstance(entry, dict) and isinstance(entry.get("url"), str):
                    return entry["url"]
    return None


def enrich(item: dict) -> dict:
    """为每条记录追加署名与许可字段（保留全部原始字段）。

    注意：不触碰条目自带的 `license` 字段（如 github-projects 记录的是
    第三方项目自身的许可），统一使用 `contentLicense` 表达本仓库的
    默认内容许可姿态。
    """
    out = dict(item)
    if not out.get("contentLicense"):
        out["contentLicense"] = DEFAULT_LICENSE
    out["licenseNote"] = LICENSE_NOTE
    out["attribution"] = {
        "creator": item.get("author") or "未知作者",
        "sourceUrl": get_source_url(item),
    }
    return out


def yaml_escape(s) -> str:
    s = str(s).replace("\\", "\\\\").replace('"', '\\"')
    return f'"{s}"'


def render_case_md(case: dict) -> str:
    """渲染主案例库单条案例的 Markdown 页面。"""
    fm = [
        "---",
        f"id: {case['id']}",
        f"title: {yaml_escape(case.get('title', ''))}",
        f"model: {yaml_escape(case.get('modelLabel', ''))}",
        f"author: {yaml_escape(case.get('author', ''))}",
        f"source: {yaml_escape(case.get('xUrl', ''))}",
        f"published_at: {yaml_escape(case.get('publishedAt', ''))}",
        f"contentLicense: {case.get('contentLicense', DEFAULT_LICENSE)}",
        "---",
        "",
    ]
    body = [f"# {case.get('title', case['id'])}", ""]
    if case.get("originalTitle") and case["originalTitle"] != case.get("title"):
        body += [f"> 原帖标题：{case['originalTitle']}", ""]
    body += [
        f"- **模型**：{case.get('modelLabel', '未知')}",
        f"- **作者**：{case.get('author', '未知')}",
        f"- **原帖**：{case.get('xUrl', '无')}",
        f"- **分类**：{ '、'.join(case.get('categories') or []) or '未分类' }",
        f"- **code2 标签**：{', '.join(case.get('code2Tags') or []) or '无'}",
        f"- **许可**：{case.get('contentLicense', DEFAULT_LICENSE)}（{LICENSE_NOTE}）",
        "",
    ]
    if case.get("demoUrl"):
        body += [f"**在线 Demo**：{case['demoUrl']}", ""]
    if case.get("prompt"):
        body += ["## Prompt", "", "```", case["prompt"].rstrip(), "```", ""]
    else:
        body += ["> 本案例暂无原始 Prompt（原帖未公开或仅有演示）。", ""]
    links = [l for l in (case.get("links") or []) if l != case.get("xUrl")]
    if links:
        body += ["## 相关链接", ""] + [f"- {l}" for l in links] + [""]
    media = case.get("mediaSources") or []
    if media:
        body += ["## 原始媒体（指向原作者 CDN，不在本仓库托管）", ""]
        body += [f"- {m}" for m in media] + [""]
    if case.get("note"):
        body += ["## 备注", "", case["note"], ""]
    return "\n".join(fm + body)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--mirror", help="本地镜像目录（含 data/ 子目录），缺省则从线上读取")
    ap.add_argument("--out", default=".", help="仓库根目录")
    args = ap.parse_args()
    root = Path(args.out)
    (root / "data").mkdir(parents=True, exist_ok=True)

    meta_out = {
        "generatedBy": "scripts/export_from_site.py",
        "sourceNote": "上游数据源为维护者私有整理文档，不公开；公开内容均来自原作者在 X 等平台的公开发布",
        "collections": [],
    }

    for js_name, (jsonl_name, list_key, title) in DATASETS.items():
        if args.mirror:
            raw = (Path(args.mirror) / "data" / js_name).read_text(encoding="utf-8")
        else:
            raw = fetch_text(f"{SITE_BASE}/data/{js_name}")
        payload = sanitize(load_window_json(raw))
        items = payload[list_key]
        with open(root / "data" / jsonl_name, "w", encoding="utf-8") as f:
            for item in items:
                f.write(json.dumps(enrich(item), ensure_ascii=False) + "\n")
        with_prompt = sum(1 for i in items if i.get("prompt"))
        meta_out["collections"].append({
            "name": jsonl_name.replace(".jsonl", ""),
            "title": payload.get("meta", {}).get("title", title),
            "file": f"data/{jsonl_name}",
            "count": len(items),
            "withPrompt": with_prompt,
            "syncedAt": payload.get("meta", {}).get("syncedAt"),
            "source": payload.get("meta", {}).get("source")
                      or payload.get("meta", {}).get("repositoryUrl"),
        })
        print(f"[ok] {jsonl_name}: {len(items)} 条（含 prompt {with_prompt} 条）")

        # 主案例库额外生成 prompts/ 与 cases/ 页面
        if js_name == "catalog.js":
            (root / "prompts").mkdir(exist_ok=True)
            (root / "cases").mkdir(exist_ok=True)
            for case in items:
                cid = case["id"]
                (root / "cases" / f"{cid}.md").write_text(
                    render_case_md(enrich(case)), encoding="utf-8")
                if case.get("prompt"):
                    model_dir = root / "prompts" / (case.get("modelId") or "unlabeled")
                    model_dir.mkdir(parents=True, exist_ok=True)
                    head = [
                        "---",
                        f"id: {cid}",
                        f"title: {yaml_escape(case.get('title', ''))}",
                        f"model: {yaml_escape(case.get('modelLabel', ''))}",
                        f"author: {yaml_escape(case.get('author', ''))}",
                        f"source: {yaml_escape(case.get('xUrl', ''))}",
                        f"contentLicense: {DEFAULT_LICENSE}",
                        f"prompt_status: {case.get('promptStatus', 'unknown')}",
                        "---",
                        "",
                        f"# {case.get('title', cid)}",
                        "",
                        "```",
                        case["prompt"].rstrip(),
                        "```",
                        "",
                    ]
                    (model_dir / f"{cid}.md").write_text("\n".join(head), encoding="utf-8")
            # 主库同时保留一份完整快照
            (root / "data" / "catalog.json").write_text(
                json.dumps(payload, ensure_ascii=False, indent=1), encoding="utf-8")

    meta_out["totalItems"] = sum(c["count"] for c in meta_out["collections"])
    meta_out["totalPrompts"] = sum(c["withPrompt"] for c in meta_out["collections"])
    (root / "data" / "meta.json").write_text(
        json.dumps(meta_out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[done] 共 {meta_out['totalItems']} 条记录，{meta_out['totalPrompts']} 条含 Prompt")
    return 0


if __name__ == "__main__":
    sys.exit(main())

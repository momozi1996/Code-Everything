#!/usr/bin/env python3
"""validate.py — code-everything 数据完整性校验

校验内容：
  1. data/*.jsonl 每行是合法 JSON，且满足 schemas/ 中对应 schema 的最低字段要求
  2. 主案例库：promptStatus 枚举、xUrl 格式、code2Tags 格式、id 唯一性
  3. 每条记录必须带有 license / licenseNote / attribution（创作者 + 出处链接）
  4. data/meta.json 的统计数与各 JSONL 实际行数一致
  5. cases/ 与 prompts/ 的 Markdown 页面数量与数据一致

仅使用 Python 标准库。退出码：0 = 全部通过，1 = 存在错误。
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

MAIN_REQUIRED = ["id", "title", "modelId", "modelLabel", "author",
                 "promptStatus", "categories", "code2Tags",
                 "contentLicense", "licenseNote", "attribution"]
GENERIC_REQUIRED = ["id", "title", "author", "contentLicense", "licenseNote", "attribution"]
PROMPT_STATUS = {"full", "original", "transcribed", "thread", "context",
                 "repository", "demo", "partial", "unavailable"}
X_URL = re.compile(r"^https://(x\.com|twitter\.com)/")
CODE2_TAG = re.compile(r"^code2[a-z0-9]+$")

FILES = {
    "cases.jsonl": MAIN_REQUIRED,
    "code2video.jsonl": GENERIC_REQUIRED,
    "github-projects.jsonl": GENERIC_REQUIRED,
    "goodcase.jsonl": GENERIC_REQUIRED,
    "opus-video-prompts.jsonl": GENERIC_REQUIRED,
    "astra-prompts.jsonl": GENERIC_REQUIRED,
    "game-prompts.jsonl": GENERIC_REQUIRED,
    "world-problems.jsonl": GENERIC_REQUIRED,
}

# —— 合规检查配置 ——
# 数据中绝不允许出现：内部文档系统的链接 / 内部 ID / 令牌
SENSITIVE_KEYS = {
    "documentUrl", "documentId", "sourceDoc", "sourceSheetToken",
    "sourceSheetId", "sourceRange", "sourceRevision",
    "sourceBlock", "sourceTable", "sourceKey", "fieldBlocks", "sourcePage",
}
INTERNAL_DOC_PATTERN = re.compile(r"feishu\.cn|doxcn", re.IGNORECASE)
# 内部系统用户/会话 ID（ou_/oc_/on_ 前缀，前面不是字母数字才匹配）
INTERNAL_ID_PATTERN = re.compile(r"(?<![A-Za-z0-9])(?:ou|oc|on)_[A-Za-z0-9]{10,}")
# 仓库自有文稿中绝不允许出现的字眼（第三方原文内容不在此列）
BANNED_WORDS_IN_DOCS = ["爬虫", "爬取", "抓取", "飞书", "feishu"]
BANNED_WORDS_IN_SCRIPTS = ["爬虫", "爬取", "抓取"]
DOC_FILES = ["README.md", "NOTICE.md", "CONTRIBUTING.md", "website/README.md"]


def check_compliance_data(obj, where: str):
    """递归检查数据对象：无敏感字段、无内部链接/ID。"""
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k in SENSITIVE_KEYS:
                err(f"{where}: 存在敏感字段 `{k}`（内部文档系统信息，必须移除）")
            check_compliance_data(v, f"{where}.{k}")
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            check_compliance_data(v, f"{where}[{i}]")
    elif isinstance(obj, str):
        if INTERNAL_DOC_PATTERN.search(obj):
            err(f"{where}: 含内部文档系统链接或 ID — {obj[:80]}")
        if INTERNAL_ID_PATTERN.search(obj):
            err(f"{where}: 含内部系统用户/会话 ID（须脱敏）— {obj[:80]}")


def check_compliance_text():
    """检查仓库自有文稿中的禁用字眼。"""
    targets = [ROOT / f for f in DOC_FILES]
    targets += sorted((ROOT / ".github").rglob("*.*"))
    targets += sorted((ROOT / "schemas").glob("*.json"))
    for path in targets:
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        for word in BANNED_WORDS_IN_DOCS:
            if word in text:
                err(f"{path.relative_to(ROOT)}: 含禁用字眼 `{word}`")
    for path in sorted((ROOT / "scripts").glob("*.py")):
        # 脚本中的禁用词检测字典（TEXT_REPLACEMENTS / BANNED_WORDS）必须包含
        # 字面模式才能检测，属于检测机制本身，予以豁免
        if path.name in ("validate.py", "export_from_site.py"):
            continue
        text = path.read_text(encoding="utf-8")
        for word in BANNED_WORDS_IN_SCRIPTS:
            if word in text:
                err(f"{path.relative_to(ROOT)}: 含禁用字眼 `{word}`")

errors: list[str] = []
warnings: list[str] = []


def err(msg: str):
    errors.append(msg)


def warn(msg: str):
    warnings.append(msg)


def check_item(item: dict, required: list[str], where: str, is_main: bool):
    for field in required:
        if field not in item or item[field] is None or item[field] == "":
            err(f"{where}: 缺少必填字段 `{field}`")
    attr = item.get("attribution")
    if isinstance(attr, dict):
        if not attr.get("creator"):
            err(f"{where}: attribution.creator 为空")
        if not attr.get("sourceUrl"):
            warn(f"{where}: attribution.sourceUrl 为空（无法回溯出处）")
    else:
        err(f"{where}: attribution 必须是对象")
    if is_main:
        ps = item.get("promptStatus")
        if ps and ps not in PROMPT_STATUS:
            err(f"{where}: promptStatus `{ps}` 不在枚举 {sorted(PROMPT_STATUS)} 内")
        xurl = item.get("xUrl")
        if xurl and not X_URL.match(xurl):
            err(f"{where}: xUrl `{xurl}` 不是合法的 X/Twitter 链接")
        for tag in item.get("code2Tags") or []:
            if not CODE2_TAG.match(tag):
                err(f"{where}: code2Tags 标签 `{tag}` 格式不合法")
        if item.get("prompt") and ps == "unavailable":
            warn(f"{where}: 有 prompt 但 promptStatus=unavailable")


def main() -> int:
    stats: dict[str, tuple[int, int]] = {}  # file -> (total, with_prompt)

    for name, required in FILES.items():
        path = ROOT / "data" / name
        if not path.exists():
            err(f"缺少数据文件 data/{name}")
            continue
        seen_ids: set[str] = set()
        total = with_prompt = 0
        for lineno, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
            where = f"{name}:{lineno}"
            try:
                item = json.loads(line)
            except json.JSONDecodeError as e:
                err(f"{where}: JSON 解析失败 — {e}")
                continue
            total += 1
            if item.get("prompt"):
                with_prompt += 1
            iid = item.get("id")
            if iid:
                if iid in seen_ids:
                    err(f"{where}: id `{iid}` 重复")
                seen_ids.add(iid)
            check_item(item, required, where, is_main=(name == "cases.jsonl"))
            check_compliance_data(item, where)
        stats[name] = (total, with_prompt)
        print(f"[check] {name:<28} {total:>5} 条，含 prompt {with_prompt:>5} 条")

    # meta.json 一致性
    meta_path = ROOT / "data" / "meta.json"
    if meta_path.exists():
        meta = json.loads(meta_path.read_text(encoding="utf-8"))
        check_compliance_data(meta, "meta.json")
        for col in meta.get("collections", []):
            fname = Path(col["file"]).name
            if fname in stats and stats[fname][0] != col["count"]:
                err(f"meta.json: {fname} 记录数 {col['count']} 与实际 {stats[fname][0]} 不一致")
        actual_total = sum(t for t, _ in stats.values())
        if meta.get("totalItems") != actual_total:
            err(f"meta.json: totalItems={meta.get('totalItems')} 与实际 {actual_total} 不一致")
    else:
        err("缺少 data/meta.json")

    # catalog.json 完整快照的合规检查
    catalog_path = ROOT / "data" / "catalog.json"
    if catalog_path.exists():
        check_compliance_data(json.loads(catalog_path.read_text(encoding="utf-8")),
                              "catalog.json")

    # 自有文稿的禁用字眼检查
    check_compliance_text()

    # cases/ 与 prompts/ 页面数量
    cases_jsonl = ROOT / "data" / "cases.jsonl"
    if cases_jsonl.exists():
        items = [json.loads(l) for l in cases_jsonl.read_text(encoding="utf-8").splitlines()]
        case_md = {p.stem for p in (ROOT / "cases").glob("*.md")}
        missing_md = {c["id"] for c in items} - case_md
        extra_md = case_md - {c["id"] for c in items}
        if missing_md:
            err(f"cases/ 缺少 {len(missing_md)} 个页面，例如：{sorted(missing_md)[:3]}")
        if extra_md:
            warn(f"cases/ 多出 {len(extra_md)} 个无数据对应的页面，例如：{sorted(extra_md)[:3]}")
        prompt_md = {p.stem for p in (ROOT / "prompts").glob("*/*.md")}
        want_prompt = {c["id"] for c in items if c.get("prompt")}
        if want_prompt - prompt_md:
            err(f"prompts/ 缺少 {len(want_prompt - prompt_md)} 个页面，例如：{sorted(want_prompt - prompt_md)[:3]}")

    for w in warnings:
        print(f"[warn] {w}")
    if errors:
        print(f"\n✗ 校验失败，共 {len(errors)} 个错误：")
        for e in errors[:50]:
            print(f"  - {e}")
        if len(errors) > 50:
            print(f"  … 其余 {len(errors) - 50} 个从略")
        return 1
    print(f"\n✓ 全部通过（{sum(t for t, _ in stats.values())} 条记录，{len(warnings)} 条警告）")
    return 0


if __name__ == "__main__":
    sys.exit(main())

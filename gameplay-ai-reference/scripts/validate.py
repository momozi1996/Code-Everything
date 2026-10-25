#!/usr/bin/env python3
"""校验 gameplay-ai-reference：字段、数量、出处与媒体边界。"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ERRORS = []
WARNINGS = []
REQUIRED = [
    "id", "system", "systemZh", "name", "summary", "tags", "rules", "loop",
    "prototype", "references", "sourceUrl", "contentLicense", "licenseNote",
    "attribution", "mediaPolicy", "aiPrototypePrompt",
]
DIRECT_IMAGE_HOSTS = ("images.loopyhop.com",)
MEDIA_SUFFIX = re.compile(r"\.(?:png|jpe?g|webp|gif|svg|mp4|webm)(?:[?#]|$)", re.I)


def err(message):
    ERRORS.append(message)


def walk(obj, path=""):
    if isinstance(obj, dict):
        for key, value in obj.items():
            yield from walk(value, f"{path}.{key}")
    elif isinstance(obj, list):
        for i, value in enumerate(obj):
            yield from walk(value, f"{path}[{i}]")
    else:
        yield path, obj


def main():
    data_file = ROOT / "data" / "mechanics.jsonl"
    items = [json.loads(line) for line in data_file.read_text(encoding="utf-8").splitlines()]
    ids = set()
    for number, item in enumerate(items, 1):
        where = f"mechanics.jsonl:{number}"
        for key in REQUIRED:
            if key not in item or item[key] in (None, "", []):
                err(f"{where}: 缺少 `{key}`")
        iid = item.get("id")
        if iid in ids:
            err(f"{where}: id `{iid}` 重复")
        ids.add(iid)
        if item.get("sourceUrl") != f"https://gameplayatlas.loopyhop.com/mechanic/{iid}/":
            err(f"{where}: sourceUrl 与 id 不一致")
        if not item.get("attribution", {}).get("creator"):
            err(f"{where}: 缺少整理方署名")
        policy = item.get("mediaPolicy", {})
        if policy.get("imagesIncluded") is not False or policy.get("directImageLinksIncluded") is not False:
            err(f"{where}: 媒体边界必须为 false")
        for ref in item.get("references", []):
            image_ref = ref.get("imageReference", {})
            if image_ref.get("mediaIncluded") is not False:
                err(f"{where}: imageReference.mediaIncluded 必须为 false")
            if not ref.get("source"):
                err(f"{where}: 实现参考缺少来源页")
        prompt = item.get("aiPrototypePrompt", "")
        for phrase in ("原创代码", "原创占位素材", "不使用第三方游戏资产"):
            if phrase not in prompt:
                err(f"{where}: AI 模板缺少合规约束 `{phrase}`")
        for path, value in walk(item):
            if path.endswith((".image", ".originalImage")):
                err(f"{where}{path}: 不允许保存图片字段")
            if isinstance(value, str) and (
                any(host in value for host in DIRECT_IMAGE_HOSTS) or MEDIA_SUFFIX.search(value)
            ):
                err(f"{where}{path}: 不允许图片或媒体直链")

    meta = json.loads((ROOT / "data" / "meta.json").read_text(encoding="utf-8"))
    if meta.get("mechanicCount") != len(items):
        err(f"meta.json: mechanicCount 与实际 {len(items)} 不一致")
    systems = {item["system"] for item in items}
    if meta.get("systemCount") != len(systems):
        err(f"meta.json: systemCount 与实际 {len(systems)} 不一致")
    if meta.get("imagesIncluded") != 0 or meta.get("directImageLinksIncluded") != 0:
        err("meta.json: 图片与直链计数必须为 0")

    md_files = list((ROOT / "mechanics").glob("*.md"))
    prompt_files = list((ROOT / "prompts").glob("*/*.md"))
    if len(md_files) != len(items):
        err(f"mechanics/ 页面数 {len(md_files)} != {len(items)}")
    if len(prompt_files) != len(items):
        err(f"prompts/ 页面数 {len(prompt_files)} != {len(items)}")
    binary_files = [p for p in ROOT.rglob("*") if p.is_file() and MEDIA_SUFFIX.search(p.name)]
    if binary_files:
        err(f"子库不允许包含媒体文件：{binary_files[:3]}")

    print(f"[check] 玩法机制 {len(items)} 条，系统 {len(systems)} 个")
    print(f"[check] 参考页 {len(md_files)}，AI 模板 {len(prompt_files)}，媒体文件 0")
    if ERRORS:
        print(f"✗ gameplay-ai-reference 校验失败：{len(ERRORS)} 个错误")
        for message in ERRORS[:30]:
            print("  -", message)
        return 1
    print("✓ gameplay-ai-reference 校验通过")
    return 0


if __name__ == "__main__":
    sys.exit(main())

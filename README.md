# code-everything

> 一句 Prompt → 可运行产物。一个开源的、跨模型的 **code-gen Prompt & 案例库**：
> 完整收录 Claude Opus 5.5 / GPT-6 系列 / Gemini 4 在 X 上的公开作品与原始提示词，
> 覆盖游戏、3D、网页前端、视频、动画、音频、可视化等 14 个产出域。

[![License: MIT](https://img.shields.io/badge/code-MIT-green.svg)](LICENSE)
[![内容许可: CC BY-NC 4.0](https://img.shields.io/badge/收录内容-CC%20BY--NC%204.0-orange.svg)](NOTICE.md)

**在线浏览版**：刷新中

<img width="1932" height="958" alt="image" src="https://github.com/user-attachments/assets/7ee85fc5-d7ae-4b21-985d-d6def98c5626" />


---

## 为什么做这个仓库

"一句提示词能做出什么"正在从演示变成生产力，但优秀的 code-gen 案例散落在 X 的
时间线里，难以检索、无法复现、随时消失。本仓库要做的是把它们**完整地留下来**：

- **收录完整**：1534 条记录全量入库，不做挑选与删减；每条案例的结构化信息一次到位
- **原文完整**：1035 条原始 Prompt 逐字保留（不改写），另附 434 个在线 Demo 链接
- **出处完整**：每条案例都带原作者署名与原帖链接（见 [NOTICE.md](NOTICE.md)）
- **体系完整**：统一 JSON Schema + 14 个产出域标签（code2）+ 模型/分类维度，
  数据、文档与统计由 CI 校验保持一致

它也是未来 **code-everything Harness**（输入一句 Prompt + 目标类型 → 产出可运行
HTML/3D/游戏）的前置资产：本库的 code2 标签体系就是 Harness 的能力地图。

## 收录规模

> 共 **1534 条记录**，其中 **1035 条含原始 Prompt**。

### 主案例库（739 条）

| 维度 | 分布 |
| --- | --- |
| 模型 | Claude Opus 5.5 ×420 · GPT-6 Astra ×136 · Gemini 4 Argon ×46 · GPT-6.1 Sol ×39 · Claude Sonnet 5.5 ×37 · Claude Haiku 5.5 ×21 · Claude Fable 5.5 ×13 · GPT-6 Sol ×9 · GPT-6 Luna ×6 · 其他 ×12 |
| 分类 | 游戏 / 网页 / 前端 / 3D / 动画 / 生成艺术 / 可视化 / 工具 / 效率工作 |
| Prompt 可得性 | 完整原文 ×191 · 上下文 ×39 · 回复串 ×33 · 仓库 ×22 · 原帖即 Prompt ×10 · 转写 ×8 · 仅演示 ×8 · 节选 ×2 · 暂缺 ×426 |
| 其他 | 在线 Demo ×434 · 合集 ×100 · 独立 X 帖 ×546 |

### code2 产出域标签（同一案例可带多个标签）

| 标签 | 数量 | 标签 | 数量 |
| --- | --- | --- | --- |
| code23d | 299 | code2canvas | 63 |
| code2frontend | 260 | code2html | 49 |
| code2video | 221 | code2blender | 48 |
| code2game | 185 | code2css | 35 |
| code2viz | 115 | code2world | 26 |
| code2svg | 81 | code2shader | 15 |
| code2audio | 78 | code2deck | 10 |

### 子集合

| 集合 | 文件 | 条数 | 说明 |
| --- | --- | --- | --- |
| 主案例库 | `data/cases.jsonl` | 739 | 多模型 Prompt & 作品主库 |
| Code2Video 合集 | `data/code2video.jsonl` | 282 | 代码生成视频案例，全部含 Prompt |
| 手游反推提示词 | `data/game-prompts.jsonl` | 162 | Top 手游的机制反推 Prompt |
| 世界难题集 | `data/world-problems.jsonl` | 118 | 千禧年难题等极限测试题 |
| Astra 提示词 | `data/astra-prompts.jsonl` | 105 | GPT-6 Astra 专项提示词 |
| 向阳乔木视频提示词 | `data/opus-video-prompts.jsonl` | 72 | Opus 5.5 视频生成合集 |
| GoodCase 广场 | `data/goodcase.jsonl` | 45 | goodcase.ai 社区精选 |
| 完整 GitHub 项目 | `data/github-projects.jsonl` | 11 | 可直接运行的完整源码项目索引 |

### 扩展：游戏与 AI 玩法参考（280 个机制）

独立的 [`gameplay-ai-reference/`](gameplay-ai-reference/README.md) 子库提供
**280 个玩法机制、28 个系统、280 个 AI 最小原型模板**，来源为
[Gameplay Atlas · LoopyHop](https://gameplayatlas.loopyhop.com/)。
它作为机制设计层，与主库的 `code2game` 案例互补：

- [玩法总索引](gameplay-ai-reference/INDEX.md)：按系统浏览全部机制；
- `gameplay-ai-reference/prompts/`：可直接用于原创最小原型的任务模板；
- `gameplay-ai-reference/data/mechanics.jsonl`：结构化数据与组合关系；
- 媒体边界：**图片文件 0、图片直链 0、热链展示 0**，仅保留画面来源页与权利人。

该扩展独立统计，不计入上述 1534 条主数据记录。

## 仓库结构

```javascript
code-everything/
├── README.md               # 本文件
├── LICENSE                 # MIT —— 仅覆盖本仓库的代码与编译性整理
├── NOTICE.md               # 第三方内容版权声明 + 下架机制（重要）
├── CONTRIBUTING.md         # 如何提交新案例
├── data/                   # 全部结构化数据（JSONL，一行一条）
│   ├── cases.jsonl         # 主案例库 739 条
│   ├── catalog.json        # 主库完整快照（含 meta）
│   ├── meta.json           # 全库统计
│   └── *.jsonl             # 7 个子集合
├── schemas/                # JSON Schema 字段规范
│   ├── case.schema.json          # 主案例库条目
│   └── collection-item.schema.json # 子集合条目（通用）
├── prompts/                # 主库中全部含 Prompt 的案例（305 个 .md，按模型分目录）
├── cases/                  # 主库逐案例页面（739 个 .md：frontmatter + Prompt + 出处）
├── scripts/
│   ├── validate.py         # 数据完整性校验（CI 同款）
│   └── export_from_site.py # 数据维护工具（内容同步与脱敏）
├── gameplay-ai-reference/  # 扩展：280 个游戏机制 + 280 个 AI 原型模板
│   ├── data/               # 玩法 JSONL、系统索引与媒体边界统计
│   ├── mechanics/          # 280 个完整玩法参考页
│   ├── prompts/            # 按 28 个系统分目录的 AI 原型模板
│   └── schemas/            # 玩法条目 schema
└── website/                # 浏览版站点的完整源码（静态站点，可自托管）
```

## 快速开始

```bash
# 克隆后直接读数据：每行一个 JSON 对象
head -n 1 data/cases.jsonl | python3 -m json.tool

# 校验数据完整性（字段、许可、署名、统计一致性）
python3 scripts/validate.py
```

用 pandas 分析：

```python
import pandas as pd
df = pd.read_json("data/cases.jsonl", lines=True)
df[df["code2Tags"].apply(lambda t: "code2game" in t)].head()
```

## 许可与版权（使用前必读）

本仓库采用**双层许可**，请务必区分：

| 内容 | 许可 |
| --- | --- |
| 本仓库的代码（`scripts/`、`website/`）、schema、编译性整理 | [MIT](LICENSE) |
| 收录的第三方 Prompt 与案例作品（逐条） | 默认 **CC BY-NC 4.0**（署名-非商业）；原作者有明确声明的，以原作者声明为准 |

要点（详见 [NOTICE.md](NOTICE.md)）：

1. 每条数据都带 `attribution`（原作者署名 + 原帖链接）与 `contentLicense` 字段，
**使用时请保留署名**。
2. 本仓库不主张对第三方作品的所有权。预览图/视频**不在仓库中托管**，
数据里只保留指向原作者 CDN 的链接。
3. **下架机制**：如果你是原作者并希望修改署名、更改许可或移除某条内容，
请开 Issue，我们会尽快处理。
4. `github-projects.jsonl` 中的条目是第三方开源项目索引，其 `license` 字段
保留项目自身许可。
5. **隐私与脱敏**：所有条目在收录时均已完成脱敏（不含私有链接、内部 ID 与
用户信息），并由 `scripts/validate.py` 在 CI 中强制校验。

## 贡献

欢迎提交新案例、补充缺失的 Prompt、修正出处信息。见 [CONTRIBUTING.md](CONTRIBUTING.md)。

- 提交新案例：使用 Issue 模板「提交新案例」，或直接向 `data/` 提 PR
- 所有 PR 会自动运行 `scripts/validate.py` 校验

## Roadmap

- [x] **Phase 1 — 内容库开源**：数据整理、schema、校验、许可合规（本仓库当前状态）
- [ ] **Phase 2 — 可复现基准**：基于已有案例构建跨模型 code-gen 能力矩阵（按 code2 产出域打分）
- [ ] **Phase 3 — Harness**：薄 CLI，输入一句 Prompt + 目标类型 → 产出可运行的 HTML/3D/游戏，兑现 `code-everything` 之名

## 免责声明

- 收录内容版权归原作者所有；本仓库仅为学习与研究目的的索引与存档。
- 案例中提及的模型能力以其发布时版本为准，不构成对任何模型的评价或背书。
- 内容来自公开网络分享的整理，如有错误或侵权请联系删除。

## 致谢

感谢所有在 X 上公开分享作品与 Prompt 的创作者（完整名单见各条数据的
`attribution` 字段），以及宝玉（@dotey）、向阳乔木、MiaAI-Lab 等整理者的
公开合集。

# 游戏与 AI 玩法参考 · Gameplay AI Reference

> 280 个游戏机制、28 个玩法系统，以及与之对应的 280 个 AI 最小原型任务模板。
> 用来查机制、拆循环、做组合，并用原创素材快速验证一个玩法是否成立。

原始整理来源：[Gameplay Atlas · LoopyHop](https://gameplayatlas.loopyhop.com/)。
本子库为 `code-everything` 的独立扩展，不改变主案例库的统计口径。

## 收录边界

本子库采用保守的参考库模式：

- ✅ 玩法名称、规则、核心循环、关键取舍、参数、最小原型与测试建议；
- ✅ 实现参考的来源页、画面来源页、权利人和核验日期；
- ✅ 由上述信息组织的 AI 原型任务模板，明确要求原创代码与原创素材；
- ❌ 不收完整游戏、游戏代码、素材包、美术、音频或可运行复刻项目；
- ❌ **图片文件 0、图片直链 0、热链展示 0**；
- ❌ 不把参考游戏名称写进 AI 生成目标，不要求复制其角色、世界观、地图、界面或数值表。

> 上游站点明确说明：收录来源不代表授予图片再利用许可。因此这里只保留
> 画面来源页，供你前往原页面查看；这不构成图片再利用授权。

## 快速使用

### 1. 按系统找玩法

打开 [INDEX.md](INDEX.md)，或进入 `prompts/<system>/` 选择一个机制。
例如：

```text
prompts/automation/automation-belt-routing.md
prompts/combat/combat-combo-variation.md
prompts/puzzles/puzzles-box-pushing.md
```

### 2. 交给 AI 做原创最小原型

复制对应文件中的任务模板。模板已包含：

- 机制目标与基础规则；
- 核心循环与关键取舍；
- 可调参数与最小实现建议；
- 测试方法与常见偏差；
- 原创素材、运行说明和验证结果要求。

它不是“复刻某游戏”的指令，而是“验证某机制”的任务书。生成后仍需人工检查
输出中是否混入第三方名称、素材或近似表达。

### 3. 用程序检索

```python
import json

with open("gameplay-ai-reference/data/mechanics.jsonl", encoding="utf-8") as f:
    mechanics = [json.loads(line) for line in f]

puzzle = [m for m in mechanics if m["system"] == "puzzles"]
print(len(puzzle), puzzle[0]["name"]["zh"])
print(puzzle[0]["aiPrototypePrompt"])
```

## 目录结构

```text
gameplay-ai-reference/
├── README.md
├── INDEX.md                  # 280 个玩法的中文总索引
├── data/
│   ├── mechanics.jsonl       # 一行一个机制，含 AI 原型模板
│   ├── systems.json          # 28 个系统及数量
│   └── meta.json             # 来源快照与媒体边界统计
├── schemas/
│   └── mechanic.schema.json  # 字段规范
├── mechanics/                # 280 个完整参考页
├── prompts/                  # 按 28 个系统分目录的 AI 模板
└── scripts/
    ├── build.py              # 从本地上游快照重新生成子库
    └── validate.py           # 字段、数量、出处与媒体边界校验
```

## 28 个玩法系统

| 系统 | ID | 数量 |
|---|---|---:|
| 战斗与战术 | `combat` | 18 |
| 移动与操控 | `movement` | 15 |
| 卡组构筑 | `deckbuilding` | 12 |
| 成长与解锁 | `progression` | 12 |
| 生存与压力 | `survival` | 12 |
| 商业与交易 | `commerce` | 11 |
| 放置与增量 | `incremental` | 11 |
| 潜行与警戒 | `stealth` | 11 |
| 自动化与物流 | `automation` | 10 |
| 建造与空间 | `building` | 10 |
| 指挥与单位 | `command` | 10 |
| 烹饪与食物 | `cooking` | 10 |
| 种植与经营 | `farming` | 10 |
| 钓鱼与捕捉 | `fishing` | 10 |
| 采集与挖掘 | `gathering` | 10 |
| 背包与资源 | `inventory` | 10 |
| 匹配与消除 | `matching` | 10 |
| 叙事与选择 | `narrative` | 10 |
| 射击与弹道 | `projectiles` | 10 |
| 解谜与推理 | `puzzles` | 10 |
| 社交与关系 | `relationships` | 10 |
| 合作与分工 | `cooperation` | 9 |
| 防御与阵地 | `defense` | 9 |
| 分配与调度 | `allocation` | 8 |
| 生态与系统 | `ecology` | 8 |
| 驾驶与竞速 | `driving` | 5 |
| 节奏与节拍 | `rhythm` | 5 |
| 探索与路线 | `exploration` | 4 |

## 数据字段

每条机制包含：

- `id / system / systemZh`：稳定标识与分类；
- `name / summary / rules / loop / decisions / parameters`：中英文玩法内容；
- `prototype`：最小原型的第一步、测试和应避免的问题；
- `references`：实现来源页、画面来源页、权利人与核验日期；
- `related / combinesWith / combinationIds`：机制组合关系；
- `aiPrototypePrompt`：带原创素材约束的 AI 任务模板；
- `attribution / contentLicense / mediaPolicy`：署名、许可与媒体边界。

## 可以怎样继续改造

1. **机制组合器**：利用 `combinesWith` 和 `combinationIds`，把两个或三个机制组成原创玩法概念。
2. **AI 原型评测**：用统一模板生成最小原型，再按“循环是否成立、反馈是否可读、测试是否通过”记录结果。
3. **与主库联动**：把主库 `code2game` 案例作为表现层参考，把本子库作为机制设计层，两者分开评估。
4. **参数实验**：围绕 `parameters` 每次只改一个变量，观察决策变化，避免一开始堆叠内容。
5. **社区原创案例**：后续只收录社区自行制作且明确授权的原型，不把第三方游戏文件放入仓库。

## 许可与署名

- 玩法整理文字按仓库默认的 **CC BY-NC 4.0** 姿态收录，逐条保留
  Gameplay Atlas · LoopyHop 的出处；若整理方另有声明，以其声明为准。
- `scripts/` 中的构建与校验代码按根仓库 MIT 许可提供。
- 游戏名称、商标、画面及其他第三方素材权利归各自权利人。
- AI 任务模板是研究辅助文本，不保证生成结果可运行或不侵权；使用时应保留
  原创素材约束并进行人工检查。
- 如权利方希望更正或移除内容，请使用根仓库的下架 / 更正 Issue 模板。

## 校验

```bash
python3 gameplay-ai-reference/scripts/validate.py
```

校验会检查 280 条数据与页面数量、来源字段、AI 模板中的原创约束，以及
图片文件、图片直链和媒体字段是否为零。

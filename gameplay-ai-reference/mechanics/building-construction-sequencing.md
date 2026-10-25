---
id: building-construction-sequencing
title: "施工顺序与优先级"
system: building
source: https://gameplayatlas.loopyhop.com/mechanic/building-construction-sequencing/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 施工顺序与优先级 · Construction sequencing

> 先画计划，再让工人按资源、通路和紧急程度落地。

- **系统**：建造与空间（building）
- **标签**：planning, time, optimization
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/building-construction-sequencing/)

## 基础规则

玩家下达施工任务而非立刻生成成品。工人搬运材料并建造，缺料或不可达会阻塞；分阶段施工和优先级避免任务卡死。

## 核心循环

1. 放置施工计划
2. 确保材料通路
3. 安排优先级
4. 检查阻塞任务

## 关键取舍

- 同时开很多项目会分散工人和材料。
- 先修应急设施更稳，但可能需要后续拆改。

## 可调参数

- **施工耗时**：长工期让顺序影响生存，短工期更偏布局创作。
- **优先级粒度**：细分可精确调度，也可能变成繁琐排队。

## 最小原型

- **第一步**：做一名工人、材料堆、三项施工任务和优先级，显示任务等待原因。
- **验证**：出现因封路卡住的施工时，玩家能否通过改顺序或留通道自行恢复？
- **避免**：多工人抢任务、搬运预约和中途改计划都需要状态处理，先让单工人完整跑通。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
施工顺序与优先级（Construction sequencing）

## 设计目标
先画计划，再让工人按资源、通路和紧急程度落地。

## 基础规则
玩家下达施工任务而非立刻生成成品。工人搬运材料并建造，缺料或不可达会阻塞；分阶段施工和优先级避免任务卡死。

## 核心循环
1. 放置施工计划
2. 确保材料通路
3. 安排优先级
4. 检查阻塞任务

## 关键取舍
- 同时开很多项目会分散工人和材料。
- 先修应急设施更稳，但可能需要后续拆改。

## 可调参数
- 施工耗时：长工期让顺序影响生存，短工期更偏布局创作。
- 优先级粒度：细分可精确调度，也可能变成繁琐排队。

## 最小实现建议
做一名工人、材料堆、三项施工任务和优先级，显示任务等待原因。

## 验证方式
出现因封路卡住的施工时，玩家能否通过改顺序或留通道自行恢复？

## 需要避免
多工人抢任务、搬运预约和中途改计划都需要状态处理，先让单工人完整跑通。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 环世界（RimWorld）

- 机制来源：[Community wiki](https://rimworldwiki.com/wiki/Colony_Building_Guide)
- 画面来源页：https://store.steampowered.com/app/294100/
- 权利人：Ludeon Studios
- 核验日期：2026-10-21

### 缺氧（Oxygen Not Included）

- 机制来源：[Community wiki](https://oxygennotincluded.wiki.gg/wiki/Priority)
- 画面来源页：https://store.steampowered.com/app/457140/
- 权利人：Klei Entertainment
- 核验日期：2026-10-21

## 对比观察

两者都把设计交给角色施工；RimWorld强调工作分工，缺氧的紧凑空间让通路规划尤其重要。

## 组合灵感

暴风前扩建避难所，先保留撤离通道，再决定抢修屋顶还是供暖。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

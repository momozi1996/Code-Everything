---
id: allocation-public-goal-race
title: "抢先拿到公共目标奖励"
system: allocation
source: https://gameplayatlas.loopyhop.com/mechanic/allocation-public-goal-race/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 抢先拿到公共目标奖励 · Race for a public objective reward

> 进度够了还要赶得上，奖励可能先被别人拿走。

- **系统**：分配与调度（allocation）
- **标签**：planning, timing
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/allocation-public-goal-race/)

## 基础规则

多人能争取同一公开目标，但奖励名额有限或先到者先持有。玩家观察彼此进度，决定为抢先完成投入多少；有人得手后，其他人需要换目标，或按规则继续追赶争回奖励。

## 核心循环

1. 比较公开目标与双方进度
2. 集中资源加快完成
3. 领取或失去争夺机会
4. 切换目标或继续追赶

## 关键取舍

- 花额外资源抢这一轮完成，还是冒着被抢的风险慢慢积累？
- 落后时继续追这个目标，还是转向竞争较少的目标？

## 可调参数

- **奖励名额**：名额越少，观察对手进度越重要；名额过少可能让后来者无事可做。
- **是否能被夺回**：永久领取鼓励冲刺，可夺回奖励还需要后续维护。

## 最小原型

- **第一步**：给两名本地玩家三个公开目标，先只做一次领取、立即移除的奖励。
- **验证**：玩家会不会因对手接近完成而加速、改目标或及时止损？
- **避免**：必须区分达到条件与真正领取，避免玩家觉得奖励被无故抢走。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
抢先拿到公共目标奖励（Race for a public objective reward）

## 设计目标
进度够了还要赶得上，奖励可能先被别人拿走。

## 基础规则
多人能争取同一公开目标，但奖励名额有限或先到者先持有。玩家观察彼此进度，决定为抢先完成投入多少；有人得手后，其他人需要换目标，或按规则继续追赶争回奖励。

## 核心循环
1. 比较公开目标与双方进度
2. 集中资源加快完成
3. 领取或失去争夺机会
4. 切换目标或继续追赶

## 关键取舍
- 花额外资源抢这一轮完成，还是冒着被抢的风险慢慢积累？
- 落后时继续追这个目标，还是转向竞争较少的目标？

## 可调参数
- 奖励名额：名额越少，观察对手进度越重要；名额过少可能让后来者无事可做。
- 是否能被夺回：永久领取鼓励冲刺，可夺回奖励还需要后续维护。

## 最小实现建议
给两名本地玩家三个公开目标，先只做一次领取、立即移除的奖励。

## 验证方式
玩家会不会因对手接近完成而加速、改目标或及时止损？

## 需要避免
必须区分达到条件与真正领取，避免玩家觉得奖励被无故抢走。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 殖民火星（Terraforming Mars）

- 机制来源：[Official rulebook — FryxGames](https://fryxgames.se/wp-content/uploads/2023/04/TMRULESFINAL.pdf)
- 画面来源页：https://www.pcgamer.com/terraforming-mars-digital-is-a-quick-playing-alternative-to-tabletop/
- 权利人：Artefacts Studio / Twin Sails Interactive / FryxGames
- 核验日期：2026-10-21

### 沙丘：帝国（Dune: Imperium）

- 机制来源：[Official designer diary — Dire Wolf Digital](https://news.direwolfdigital.com/dune-imperium-designer-diary-2-power-economics-and-politics/)
- 画面来源页：https://www.pcgamer.com/games/board-games/much-loved-board-game-dune-imperium-has-a-digital-version-now-and-its-getting-rave-response/
- 权利人：Dire Wolf Digital / Legendary
- 核验日期：2026-10-21

## 对比观察

殖民火星的已认领里程碑不会被后来者抢走；沙丘的联盟奖励可以转手，抢先与守住是两个阶段。

## 组合灵感

组合提案：商会公开一批限时交付委托，每单只付给首位交货者，玩家据库存与路程选择抢近单还是改做低竞争远单。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

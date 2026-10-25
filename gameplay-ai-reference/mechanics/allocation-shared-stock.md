---
id: allocation-shared-stock
title: "从共享库存购买单位"
system: allocation
source: https://gameplayatlas.loopyhop.com/mechanic/allocation-shared-stock/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 从共享库存购买单位 · Recruit from a shared stock

> 别人买走的同类单位，会减少你继续补齐的机会。

- **系统**：分配与调度（allocation）
- **标签**：information, economy
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/allocation-shared-stock/)

## 基础规则

每种单位的可用副本来自所有玩家共用的有限库存，商店从剩余库存抽取。玩家观察他人持有量来判断是否继续追同一种单位，或改选竞争较少的方向；出售等规则可能让副本回流。

## 核心循环

1. 查看自己与他人的持有量
2. 购买或放弃竞争中的单位
3. 共享余量改变后续出现机会
4. 转向较少人使用的选择

## 关键取舍

- 已经投入很多，却发现多人也在买同一种单位，还要继续刷新吗？
- 买下对手急需的单位会占用资金与格子，阻断收益是否够大？

## 可调参数

- **每类副本数**：数量越少，观察他人阵容越重要，也更容易被迫改方向。
- **回流规则**：出售或淘汰后的回流会让紧缺单位重新出现，形成等待窗口。

## 最小原型

- **第一步**：两名本地玩家共用三类单位库存，让每次购买立即更新公共余量。
- **验证**：玩家是否因对手持有量改变刷新或转型决定？
- **避免**：只告诉玩家概率下降却不解释共享来源，会把对抗误读成纯运气。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
从共享库存购买单位（Recruit from a shared stock）

## 设计目标
别人买走的同类单位，会减少你继续补齐的机会。

## 基础规则
每种单位的可用副本来自所有玩家共用的有限库存，商店从剩余库存抽取。玩家观察他人持有量来判断是否继续追同一种单位，或改选竞争较少的方向；出售等规则可能让副本回流。

## 核心循环
1. 查看自己与他人的持有量
2. 购买或放弃竞争中的单位
3. 共享余量改变后续出现机会
4. 转向较少人使用的选择

## 关键取舍
- 已经投入很多，却发现多人也在买同一种单位，还要继续刷新吗？
- 买下对手急需的单位会占用资金与格子，阻断收益是否够大？

## 可调参数
- 每类副本数：数量越少，观察他人阵容越重要，也更容易被迫改方向。
- 回流规则：出售或淘汰后的回流会让紧缺单位重新出现，形成等待窗口。

## 最小实现建议
两名本地玩家共用三类单位库存，让每次购买立即更新公共余量。

## 验证方式
玩家是否因对手持有量改变刷新或转型决定？

## 需要避免
只告诉玩家概率下降却不解释共享来源，会把对抗误读成纯运气。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 云顶之弈（Teamfight Tactics）

- 机制来源：[Official developer overview — Riot Games](https://teamfighttactics.leagueoflegends.com/en-gb/news/game-updates/what-is-teamfight-tactics/)
- 画面来源页：https://teamfighttactics.leagueoflegends.com/en-au/news/dev/dev-design-pillars-of-tft/
- 权利人：Riot Games
- 核验日期：2026-10-21

### 刀塔霸业（Dota Underlords）

- 机制来源：[Community wiki — Dota Underlords](https://dotaunderlords.fandom.com/wiki/Heroes_Pool)
- 画面来源页：https://www.linuxgame.net/post/194
- 权利人：Valve
- 核验日期：2026-10-21

## 对比观察

两作都把招募变成间接资源争夺；英雄费用、库存容量与上场规则不同，所以不能照搬同一套追牌概率。

## 组合灵感

组合提案：背包格数限制临时囤货，抢走稀缺单位需要先腾出位置，玩家必须比较阻断对手与保留实用工具。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

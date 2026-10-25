---
id: command-prebattle-formation
title: "开打之前布阵，开打之后观察"
system: command
source: https://gameplayatlas.loopyhop.com/mechanic/command-prebattle-formation/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 开打之前布阵，开打之后观察 · Arrange before combat, then observe

> 把操作重点放在开战前的一次布置。

- **系统**：指挥与单位（command）
- **标签**：planning, spatial
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/command-prebattle-formation/)

## 基础规则

玩家在准备阶段调整单位位置和装备，开战后单位按自动规则行动。结果会暴露谁先接敌、谁被包围、谁没来得及输出；下一轮再通过布阵修正，而不是在战斗中逐个下指令。

## 核心循环

1. 观察对手与上一轮失败点
2. 调整初始阵型
3. 让战斗自动结算
4. 把结果用于下一次布阵

## 关键取舍

- 集中保护核心单位，还是分散防止一起吃范围伤害？
- 针对眼前对手调整，会不会暴露给另一种阵容？

## 可调参数

- **准备时间**：时间短强调快速识别，时间长允许仔细比较阵型。
- **战斗回放信息**：显示目标与伤害去向，才能把失败转成下一轮可执行的调整。

## 最小原型

- **第一步**：四个自动攻击单位，一块小棋盘，先只做布置与开战两个阶段。
- **验证**：只换站位不换数值，玩家能否解释结果为何变化？
- **避免**：路径与选目标规则若不可理解，玩家只能盲猜阵型。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
开打之前布阵，开打之后观察（Arrange before combat, then observe）

## 设计目标
把操作重点放在开战前的一次布置。

## 基础规则
玩家在准备阶段调整单位位置和装备，开战后单位按自动规则行动。结果会暴露谁先接敌、谁被包围、谁没来得及输出；下一轮再通过布阵修正，而不是在战斗中逐个下指令。

## 核心循环
1. 观察对手与上一轮失败点
2. 调整初始阵型
3. 让战斗自动结算
4. 把结果用于下一次布阵

## 关键取舍
- 集中保护核心单位，还是分散防止一起吃范围伤害？
- 针对眼前对手调整，会不会暴露给另一种阵容？

## 可调参数
- 准备时间：时间短强调快速识别，时间长允许仔细比较阵型。
- 战斗回放信息：显示目标与伤害去向，才能把失败转成下一轮可执行的调整。

## 最小实现建议
四个自动攻击单位，一块小棋盘，先只做布置与开战两个阶段。

## 验证方式
只换站位不换数值，玩家能否解释结果为何变化？

## 需要避免
路径与选目标规则若不可理解，玩家只能盲猜阵型。

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

- 机制来源：[Official App Store editorial](https://apps.apple.com/sa/iphone/story/id1478176873)
- 画面来源页：https://www.linuxgame.net/post/194
- 权利人：Valve
- 核验日期：2026-10-21

## 对比观察

两者都把决策放在准备期，但英雄技能、棋盘规则与阵营搭配让有效站位不同，不能照搬同一阵型。

## 组合灵感

组合提案：场景里的油、水与火也在开战前布置，自动战斗时观察单位是否把敌人引进连锁区域。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

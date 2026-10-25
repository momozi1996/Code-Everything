---
id: relationships-faction-reputation
title: "阵营声望记账"
system: relationships
source: https://gameplayatlas.loopyhop.com/mechanic/relationships-faction-reputation/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 阵营声望记账 · Faction reputation

> 把各方对玩家的评价分开记录，让同一行动产生不同后果。

- **系统**：社交与关系（relationships）
- **标签**：narrative, economy, risk
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/relationships-faction-reputation/)

## 基础规则

玩家完成任务、帮助或伤害某个群体；各方独立记录态度。称号、敌对、对话或特殊能力反馈关系变化，玩家据此选择继续站队或维持灰色空间。

## 核心循环

1. 识别利益相关方
2. 选择帮助对象
3. 更新多方评价
4. 利用或承受新待遇

## 关键取舍

- 拿眼前奖励是否会封掉另一方的长期机会？
- 同时积累敬畏和信任，比单纯讨好更适合角色吗？

## 可调参数

- **评价维度**：双维度可保留矛盾评价，单轴更易读。
- **跨阵营影响**：连带影响越强，站队越有战略重量。

## 最小原型

- **第一步**：做两个阵营、三次有连带影响的任务和两个由关系改变的后续选项。
- **验证**：观察玩家是否把未来通行或交易机会纳入当前任务选择。
- **避免**：先确保后果可追溯；太多阵营与隐藏数值会让关系变化难以归因。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
阵营声望记账（Faction reputation）

## 设计目标
把各方对玩家的评价分开记录，让同一行动产生不同后果。

## 基础规则
玩家完成任务、帮助或伤害某个群体；各方独立记录态度。称号、敌对、对话或特殊能力反馈关系变化，玩家据此选择继续站队或维持灰色空间。

## 核心循环
1. 识别利益相关方
2. 选择帮助对象
3. 更新多方评价
4. 利用或承受新待遇

## 关键取舍
- 拿眼前奖励是否会封掉另一方的长期机会？
- 同时积累敬畏和信任，比单纯讨好更适合角色吗？

## 可调参数
- 评价维度：双维度可保留矛盾评价，单轴更易读。
- 跨阵营影响：连带影响越强，站队越有战略重量。

## 最小实现建议
做两个阵营、三次有连带影响的任务和两个由关系改变的后续选项。

## 验证方式
观察玩家是否把未来通行或交易机会纳入当前任务选择。

## 需要避免
先确保后果可追溯；太多阵营与隐藏数值会让关系变化难以归因。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 辐射：新维加斯（Fallout: New Vegas）

- 机制来源：[Community wiki](https://fallout.fandom.com/wiki/Fallout%3A_New_Vegas_reputations)
- 画面来源页：https://store.steampowered.com/app/22380/
- 权利人：Obsidian Entertainment / Bethesda Softworks
- 核验日期：2026-10-21

### 暴君（Tyranny）

- 机制来源：[Community wiki](https://tyranny.fandom.com/wiki/Reputation)
- 画面来源页：https://store.steampowered.com/app/362960/
- 权利人：Obsidian Entertainment / Paradox Interactive
- 核验日期：2026-10-21

## 对比观察

新维加斯强调世界如何接纳或敌视玩家；暴君进一步把关系方向接到能力奖励上。

## 组合灵感

组合创意：同一批货卖给军方会抬高商会戒心；声望改变市场渠道，迫使玩家选择长期客户。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

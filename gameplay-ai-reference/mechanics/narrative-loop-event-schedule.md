---
id: narrative-loop-event-schedule
title: "重过同一段时间，换一种事件顺序"
system: narrative
source: https://gameplayatlas.loopyhop.com/mechanic/narrative-loop-event-schedule/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 重过同一段时间，换一种事件顺序 · Repeat a time window with a different event plan

> 世界回到起点，玩家用上一轮的发现改变下一轮安排。

- **系统**：叙事与选择（narrative）
- **标签**：time, information, discovery
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/narrative-loop-event-schedule/)

## 基础规则

一段时间内的事件按规则推进，到终点或失败后世界状态重置，玩家保留已经理解的信息。下一轮可以更早赶到地点、先处理前置条件或尝试新对话，观察事件链如何改变。重点是重新安排整段事件，不是逐帧撤销刚才的动作。

## 核心循环

1. 观察这一轮的事件顺序
2. 记住障碍与时间条件
3. 重置后改变行动安排
4. 验证变化并获得下一条线索

## 关键取舍

- 本轮继续追一个新发现，还是先验证已经想到的解法？
- 提早改变一个事件，是否会错过原本想观察的后续？

## 可调参数

- **循环长度**：短循环便于试验；长循环需要跳过已知流程的办法，减少重复劳动。
- **跨循环保留的内容**：只保留知识会强调理解；保留部分物品或关系会改变解题方式，需要明确说明。

## 最小原型

- **第一步**：做一张小地图、三个定时事件和一个循环重置按钮，知识记在简单笔记里。
- **验证**：每次重来时，玩家是否带着新假设，而非重复同一套操作？
- **避免**：若关键状态没有正确重置，因果规则会变得无法信任；长段重复对白也要能跳过。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
重过同一段时间，换一种事件顺序（Repeat a time window with a different event plan）

## 设计目标
世界回到起点，玩家用上一轮的发现改变下一轮安排。

## 基础规则
一段时间内的事件按规则推进，到终点或失败后世界状态重置，玩家保留已经理解的信息。下一轮可以更早赶到地点、先处理前置条件或尝试新对话，观察事件链如何改变。重点是重新安排整段事件，不是逐帧撤销刚才的动作。

## 核心循环
1. 观察这一轮的事件顺序
2. 记住障碍与时间条件
3. 重置后改变行动安排
4. 验证变化并获得下一条线索

## 关键取舍
- 本轮继续追一个新发现，还是先验证已经想到的解法？
- 提早改变一个事件，是否会错过原本想观察的后续？

## 可调参数
- 循环长度：短循环便于试验；长循环需要跳过已知流程的办法，减少重复劳动。
- 跨循环保留的内容：只保留知识会强调理解；保留部分物品或关系会改变解题方式，需要明确说明。

## 最小实现建议
做一张小地图、三个定时事件和一个循环重置按钮，知识记在简单笔记里。

## 验证方式
每次重来时，玩家是否带着新假设，而非重复同一套操作？

## 需要避免
若关键状态没有正确重置，因果规则会变得无法信任；长段重复对白也要能跳过。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 十二分钟（Twelve Minutes）

- 机制来源：[Official store — Luis Antonio / Annapurna](https://store.steampowered.com/app/1097200/)
- 画面来源页：https://store.steampowered.com/app/1097200/
- 权利人：Luis Antonio / Annapurna Interactive
- 核验日期：2026-10-21

### 星际拓荒（Outer Wilds）

- 机制来源：[Developer article — PlayStation Blog](https://blog.playstation.com/archive/2019/10/08/explore-a-solar-system-that-resets-every-22-minutes-in-the-outer-wilds-out-this-month)
- 画面来源页：https://store.steampowered.com/app/753640/
- 权利人：Mobius Digital / Annapurna Interactive
- 核验日期：2026-10-21

## 对比观察

十二分钟把循环压缩在公寓中的人物事件；Outer Wilds 把时间条件铺到整个太阳系。两者都不依赖把角色数值永久练高。

## 组合灵感

组合提案：一个短循环里有三份限时送货任务，重置后库存恢复，但玩家保留已发现的捷径和顾客作息，逐轮调整交付顺序。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

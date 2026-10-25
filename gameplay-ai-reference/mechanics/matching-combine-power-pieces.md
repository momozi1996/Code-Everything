---
id: matching-combine-power-pieces
title: "把两个特殊块合成一次大效果"
system: matching
source: https://gameplayatlas.loopyhop.com/mechanic/matching-combine-power-pieces/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 把两个特殊块合成一次大效果 · Combine two power pieces into one effect

> 两个道具各自使用很方便，留到相遇时可能改变整盘。

- **系统**：匹配与消除（matching）
- **标签**：planning, risk, optimization
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/matching-combine-power-pieces/)

## 基础规则

玩家先获得带特殊效果的物件，再让两个物件相邻并组合触发。组合结果可以扩大范围或把一种效果传播到另一批目标，而不是简单播放两次原有效果；准备组合期间必须承担占位和等待成本。

## 核心循环

1. 获得两个可组合工具
2. 保护并让它们靠近
3. 预览并触发组合效果
4. 处理被重新打开的棋盘

## 关键取舍

- 现在用一个工具解决紧急目标，还是把它留给更强的组合？
- 为了把两块移到一起花掉数步，最终收益是否仍比单独使用高？

## 可调参数

- **组合效果差异**：组合只是数值变大时易懂；产生新作用方式时更有发现感，也更需要预览。
- **准备成本**：移动受限或位置相隔较远会提高等待风险，不能让所有组合都无脑优于单用。

## 最小原型

- **第一步**：做两种工具和三种组合结果，在确认前高亮受影响格子。
- **验证**：玩家能否比较“分开用”和“组合用”的具体收益？
- **避免**：不要依赖玩家背组合表；效果预览应能解释为什么组合值得等。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
把两个特殊块合成一次大效果（Combine two power pieces into one effect）

## 设计目标
两个道具各自使用很方便，留到相遇时可能改变整盘。

## 基础规则
玩家先获得带特殊效果的物件，再让两个物件相邻并组合触发。组合结果可以扩大范围或把一种效果传播到另一批目标，而不是简单播放两次原有效果；准备组合期间必须承担占位和等待成本。

## 核心循环
1. 获得两个可组合工具
2. 保护并让它们靠近
3. 预览并触发组合效果
4. 处理被重新打开的棋盘

## 关键取舍
- 现在用一个工具解决紧急目标，还是把它留给更强的组合？
- 为了把两块移到一起花掉数步，最终收益是否仍比单独使用高？

## 可调参数
- 组合效果差异：组合只是数值变大时易懂；产生新作用方式时更有发现感，也更需要预览。
- 准备成本：移动受限或位置相隔较远会提高等待风险，不能让所有组合都无脑优于单用。

## 最小实现建议
做两种工具和三种组合结果，在确认前高亮受影响格子。

## 验证方式
玩家能否比较“分开用”和“组合用”的具体收益？

## 需要避免
不要依赖玩家背组合表；效果预览应能解释为什么组合值得等。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 糖果传奇（Candy Crush Saga）

- 机制来源：[Official developer help / documentation](https://candycrush.zendesk.com/hc/en-us/articles/211939685-Creating-and-combining-Special-Candies)
- 画面来源页：https://play.google.com/store/apps/details?id=com.king.candycrushsaga
- 权利人：King
- 核验日期：2026-10-21

### 卡通爆破（Toon Blast）

- 机制来源：[Official developer help / documentation](https://peakgames.helpshift.com/hc/en/4-toon-blast/faq/5-how-to-play/)
- 画面来源页：https://apps.apple.com/us/app/toon-blast/id1176027022?uo=4
- 权利人：Peak
- 核验日期：2026-10-21

## 对比观察

糖果传奇通过交换相邻特殊糖果形成组合；Toon Blast把点团生成的特殊物件再接入组合链。工具的获得方式改变准备过程。

## 组合灵感

组合提案：把特殊块组合拆成可排序的两段效果，例如先染色再清色，或先清色再染色。相同工具因顺序不同而服务不同目标。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

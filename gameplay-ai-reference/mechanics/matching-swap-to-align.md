---
id: matching-swap-to-align
title: "交换相邻物件凑成一排"
system: matching
source: https://gameplayatlas.loopyhop.com/mechanic/matching-swap-to-align/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 交换相邻物件凑成一排 · Swap neighbors to complete a match

> 只换两个位置，却要同时考虑眼前消除和换完后的棋盘。

- **系统**：匹配与消除（matching）
- **标签**：planning, spatial, optimization
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/matching-swap-to-align/)

## 基础规则

玩家交换两个相邻物件，让同类物件在横向或纵向连成足够长的一排。匹配的物件消失，上方物件补位；不成组的交换通常退回。玩家在新的排列里继续寻找能推进目标的一步。

## 核心循环

1. 寻找差一个位置的组合
2. 交换相邻两格
3. 消除并补入物件
4. 重新判断下一步

## 关键取舍

- 先消除最容易的一组，还是保留它给更大的组合腾位置？
- 多消几块能得分，但是否真的清到了关卡要求的位置？

## 可调参数

- **同类数量门槛**：门槛越高，准备步骤越多，也越需要保证棋盘存在可行解。
- **颜色种类**：颜色少更容易连续消除；颜色多会增加寻找机会的时间。

## 最小原型

- **第一步**：做一个六乘六棋盘、四种颜色，只保留交换、匹配、补位和一个收集目标。
- **验证**：玩家能否解释为什么某个交换比另一个更接近目标？
- **避免**：随机补位可能产生无可行交换的局面，先明确重排或失败规则。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
交换相邻物件凑成一排（Swap neighbors to complete a match）

## 设计目标
只换两个位置，却要同时考虑眼前消除和换完后的棋盘。

## 基础规则
玩家交换两个相邻物件，让同类物件在横向或纵向连成足够长的一排。匹配的物件消失，上方物件补位；不成组的交换通常退回。玩家在新的排列里继续寻找能推进目标的一步。

## 核心循环
1. 寻找差一个位置的组合
2. 交换相邻两格
3. 消除并补入物件
4. 重新判断下一步

## 关键取舍
- 先消除最容易的一组，还是保留它给更大的组合腾位置？
- 多消几块能得分，但是否真的清到了关卡要求的位置？

## 可调参数
- 同类数量门槛：门槛越高，准备步骤越多，也越需要保证棋盘存在可行解。
- 颜色种类：颜色少更容易连续消除；颜色多会增加寻找机会的时间。

## 最小实现建议
做一个六乘六棋盘、四种颜色，只保留交换、匹配、补位和一个收集目标。

## 验证方式
玩家能否解释为什么某个交换比另一个更接近目标？

## 需要避免
随机补位可能产生无可行交换的局面，先明确重排或失败规则。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 糖果传奇（Candy Crush Saga）

- 机制来源：[Official developer help / documentation](https://candycrush.zendesk.com/hc/en-us/articles/360000750278-Controls-how-to-switch-and-match-candies)
- 画面来源页：https://play.google.com/store/apps/details?id=com.king.candycrushsaga
- 权利人：King
- 核验日期：2026-10-21

### 宝石迷阵3（Bejeweled 3）

- 机制来源：[Community reference — Wikipedia gameplay section](https://en.wikipedia.org/wiki/Bejeweled_3)
- 画面来源页：https://store.steampowered.com/app/78000/
- 权利人：PopCap Games / Electronic Arts
- 核验日期：2026-10-21

## 对比观察

糖果传奇用关卡目标和步数决定哪次交换更有价值；宝石迷阵3的经典模式更强调在棋盘持续变化中延续得分。

## 组合灵感

组合提案：消除和移动角色共用行动点。玩家要决定先换出治疗资源，还是先让角色躲开危险。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

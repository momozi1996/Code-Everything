---
id: matching-clear-under-cargo
title: "消掉下方支撑，把目标送到出口"
system: matching
source: https://gameplayatlas.loopyhop.com/mechanic/matching-clear-under-cargo/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 消掉下方支撑，把目标送到出口 · Clear support beneath cargo to reach an exit

> 目标不能直接消除，要改变它下面的地形让它继续往下走。

- **系统**：匹配与消除（matching）
- **标签**：planning, spatial, time
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/matching-clear-under-cargo/)

## 基础规则

目标物件受重力影响，只有到达指定出口才算收集。玩家消除它下方或侧下方的物件来打开通路；无关位置的大面积消除可能得分很高，却没有推进运输目标。

## 核心循环

1. 找到目标与出口之间的阻挡
2. 选择能打开通路的消除
3. 观察目标掉落与停靠
4. 继续处理下一个支撑点

## 关键取舍

- 清目标正下方的小组，还是制造特殊块一次打穿多层？
- 出口不在正下方时，要先横向调整目标，还是先清另一条路线？

## 可调参数

- **出口数量与位置**：多个出口更宽容；偏置或狭窄出口让路径准备更重要。
- **途中固定障碍**：障碍增加分阶段规划，但必须让玩家清楚哪些格子可以通过。

## 最小原型

- **第一步**：做一个固定棋盘、一个目标和一个出口，只保留消除与重力。
- **验证**：玩家会不会选择较小的消除，因为它能让目标真正前进一步？
- **避免**：斜向掉落和传送规则容易让路径难预测；先用直落和清楚的出口标记。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
消掉下方支撑，把目标送到出口（Clear support beneath cargo to reach an exit）

## 设计目标
目标不能直接消除，要改变它下面的地形让它继续往下走。

## 基础规则
目标物件受重力影响，只有到达指定出口才算收集。玩家消除它下方或侧下方的物件来打开通路；无关位置的大面积消除可能得分很高，却没有推进运输目标。

## 核心循环
1. 找到目标与出口之间的阻挡
2. 选择能打开通路的消除
3. 观察目标掉落与停靠
4. 继续处理下一个支撑点

## 关键取舍
- 清目标正下方的小组，还是制造特殊块一次打穿多层？
- 出口不在正下方时，要先横向调整目标，还是先清另一条路线？

## 可调参数
- 出口数量与位置：多个出口更宽容；偏置或狭窄出口让路径准备更重要。
- 途中固定障碍：障碍增加分阶段规划，但必须让玩家清楚哪些格子可以通过。

## 最小实现建议
做一个固定棋盘、一个目标和一个出口，只保留消除与重力。

## 验证方式
玩家会不会选择较小的消除，因为它能让目标真正前进一步？

## 需要避免
斜向掉落和传送规则容易让路径难预测；先用直落和清楚的出口标记。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 糖果传奇（Candy Crush Saga）

- 机制来源：[Official developer help / documentation](https://candycrush.zendesk.com/hc/en-us/articles/360001374849-Game-Modes-Release-the-Sprinks-Gummi-Dragons)
- 画面来源页：https://play.google.com/store/apps/details?id=com.king.candycrushsaga
- 权利人：King
- 核验日期：2026-10-21

### 梦幻家园（Homescapes）

- 机制来源：[Official developer help / documentation](https://playrix.helpshift.com/hc/en/14-homescapes/faq/1085-donuts/)
- 画面来源页：https://play.google.com/store/apps/details?id=com.playrix.homescapes
- 权利人：Playrix
- 核验日期：2026-10-21

## 对比观察

两者都让消除服务于运输；Homescapes的官方说明还明确了后续目标分批进入，使清开的通路可以重复利用。

## 组合灵感

组合提案：把下落目标变成限时订单货物。不同出口对应不同客户，玩家既要在步数内送达，也要避免把货物送进错误出口。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

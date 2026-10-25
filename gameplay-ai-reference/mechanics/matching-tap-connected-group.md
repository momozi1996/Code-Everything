---
id: matching-tap-connected-group
title: "点掉一整团相邻同色块"
system: matching
source: https://gameplayatlas.loopyhop.com/mechanic/matching-tap-connected-group/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 点掉一整团相邻同色块 · Clear a connected group with one tap

> 先改变周围排列，把小团接成大团，再选择何时收掉。

- **系统**：匹配与消除（matching）
- **标签**：planning, spatial, optimization
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/matching-tap-connected-group/)

## 基础规则

玩家点击一团横纵相连的同色块，只要达到数量门槛，整团就会消失。空位让其他块移动，原本分开的同色块可能接到一起；因此点击位置既决定眼前收益，也决定下一团会长在哪里。

## 核心循环

1. 找到相连的同色团
2. 比较当前清除与后续连通
3. 点击整团并结算
4. 利用移动后的新团

## 关键取舍

- 先清一小团把两侧的大团接起来，还是马上消掉已有的大团？
- 大团离目标很远，靠目标的小团是否更值得这一步？

## 可调参数

- **最低团块大小**：较低门槛减少卡死；较高门槛更强调先改变周围布局。
- **空位移动规则**：只向下落和整列横向压缩会形成不同的后续连通关系。

## 最小原型

- **第一步**：做一个五乘六棋盘，点团后只向下补位，显示点击将影响的整团。
- **验证**：玩家是否愿意先消少量物件，为下一步创造更有用的大团？
- **避免**：不要只奖励团块数量；给一个位置目标，才能观察玩家是否会规划。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
点掉一整团相邻同色块（Clear a connected group with one tap）

## 设计目标
先改变周围排列，把小团接成大团，再选择何时收掉。

## 基础规则
玩家点击一团横纵相连的同色块，只要达到数量门槛，整团就会消失。空位让其他块移动，原本分开的同色块可能接到一起；因此点击位置既决定眼前收益，也决定下一团会长在哪里。

## 核心循环
1. 找到相连的同色团
2. 比较当前清除与后续连通
3. 点击整团并结算
4. 利用移动后的新团

## 关键取舍
- 先清一小团把两侧的大团接起来，还是马上消掉已有的大团？
- 大团离目标很远，靠目标的小团是否更值得这一步？

## 可调参数
- 最低团块大小：较低门槛减少卡死；较高门槛更强调先改变周围布局。
- 空位移动规则：只向下落和整列横向压缩会形成不同的后续连通关系。

## 最小实现建议
做一个五乘六棋盘，点团后只向下补位，显示点击将影响的整团。

## 验证方式
玩家是否愿意先消少量物件，为下一步创造更有用的大团？

## 需要避免
不要只奖励团块数量；给一个位置目标，才能观察玩家是否会规划。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 卡通爆破（Toon Blast）

- 机制来源：[Official developer help / documentation](https://peakgames.helpshift.com/hc/en/4-toon-blast/faq/5-how-to-play/)
- 画面来源页：https://apps.apple.com/us/app/toon-blast/id1176027022?uo=4
- 权利人：Peak
- 核验日期：2026-10-21

### 宠物大营救（Pet Rescue Saga）

- 机制来源：[Official store description — King](https://play.google.com/store/apps/details?id=com.king.petrescuesaga)
- 画面来源页：https://play.google.com/store/apps/details?id=com.king.petrescuesaga
- 权利人：King
- 核验日期：2026-10-21

## 对比观察

Toon Blast把大团连接到特殊物件的生成；Pet Rescue Saga把清除价值连接到宠物救援。相同点击动作可以服务不同目标。

## 组合灵感

组合提案：扫描器显示哪些色块下藏有矿物。玩家可以为开采目标先清小团，也可以先接大团减少开采次数。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

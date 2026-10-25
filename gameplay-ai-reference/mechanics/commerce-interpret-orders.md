---
id: commerce-interpret-orders
title: "识别顾客需求"
system: commerce
source: https://gameplayatlas.loopyhop.com/mechanic/commerce-interpret-orders/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 识别顾客需求 · Interpreting customer requests

> 从自然表达中识别需求，再用产品属性满足它。

- **系统**：商业与交易（commerce）
- **标签**：information, creativity, narrative
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/commerce-interpret-orders/)

## 基础规则

顾客不一定直接报出商品名，可能描述症状、口味或用途。玩家解析关键条件，选择或制作合适产品；接受、拒绝与追加报酬反馈理解是否准确。

## 核心循环

1. 听取需求
2. 提取关键属性
3. 选择或制作产品
4. 交付并观察反馈

## 关键取舍

- 满足最低要求，还是投入稀有材料完成额外偏好？
- 模糊描述有多种合理答案时，选成本低还是故事上合适的？

## 可调参数

- **描述含糊度**：适度含糊制造推理，缺少可识别线索则变猜谜。
- **可接受答案数量**：多个答案鼓励创造，唯一答案强调知识识别。

## 最小原型

- **第一步**：做五种有两个明确属性的商品、六条自然语言需求和可解释的反馈。
- **验证**：顾客拒绝后，玩家能否指出遗漏的条件，并改选真正符合要求的商品。
- **避免**：先使用人工编写的有限描述；无边界自然语言会让规则验证变困难。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
识别顾客需求（Interpreting customer requests）

## 设计目标
从自然表达中识别需求，再用产品属性满足它。

## 基础规则
顾客不一定直接报出商品名，可能描述症状、口味或用途。玩家解析关键条件，选择或制作合适产品；接受、拒绝与追加报酬反馈理解是否准确。

## 核心循环
1. 听取需求
2. 提取关键属性
3. 选择或制作产品
4. 交付并观察反馈

## 关键取舍
- 满足最低要求，还是投入稀有材料完成额外偏好？
- 模糊描述有多种合理答案时，选成本低还是故事上合适的？

## 可调参数
- 描述含糊度：适度含糊制造推理，缺少可识别线索则变猜谜。
- 可接受答案数量：多个答案鼓励创造，唯一答案强调知识识别。

## 最小实现建议
做五种有两个明确属性的商品、六条自然语言需求和可解释的反馈。

## 验证方式
顾客拒绝后，玩家能否指出遗漏的条件，并改选真正符合要求的商品。

## 需要避免
先使用人工编写的有限描述；无边界自然语言会让规则验证变困难。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 药剂工艺：炼金模拟器（Potion Craft: Alchemist Simulator）

- 机制来源：[Community wiki](https://potion-craft.fandom.com/wiki/Requests)
- 画面来源页：https://store.steampowered.com/app/1210320/
- 权利人：niceplay games / tinyBuild
- 核验日期：2026-10-21

### VA-11 HALL-A：赛博朋克酒保行动（VA-11 Hall-A: Cyberpunk Bartender Action）

- 机制来源：[Developer / store](https://store.steampowered.com/app/447530/VA11_HallA_Cyberpunk_Bartender_Action/)
- 画面来源页：https://store.steampowered.com/app/447530/
- 权利人：Sukeban Games / Ysbryd Games
- 核验日期：2026-10-21

## 对比观察

药剂工艺把需求拆成效果与约束；VA-11 HALL-A让服务结果继续参与叙事。

## 组合灵感

组合创意：冒险者说“想在雪山不被发现”，裁缝可在保暖、颜色和静音材料之间设计不同合格方案。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

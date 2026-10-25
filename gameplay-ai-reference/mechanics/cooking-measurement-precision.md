---
id: cooking-measurement-precision
title: "定量配料"
system: cooking
source: https://gameplayatlas.loopyhop.com/mechanic/cooking-measurement-precision/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 定量配料 · Measured ingredient dosing

> 把配方中的数字变成手上需要控制的分量。

- **系统**：烹饪与食物（cooking）
- **标签**：precision, dexterity, information
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/cooking-measurement-precision/)

## 基础规则

玩家按要求称量、倾倒或分割材料，实际投入量参与结果计算。过量不一定能撤回，计量工具和分步添加能降低误差；反馈让玩家区分操作失误与配方问题。

## 核心循环

1. 读取目标用量
2. 选择容器或切分方式
3. 逐步加料
4. 检查实际剂量

## 关键取舍

- 一次倒完节省时间，还是分次加料保证精度？
- 误差出现后补救整批，还是从头开始？

## 可调参数

- **允许误差**：宽容差更适合轻松操作；窄容差提高工具掌握的价值。
- **信息精度**：实时数字方便校准；只看外观会强调经验但降低可预测性。

## 最小原型

- **第一步**：做一个倾倒按钮、液量读数和目标范围，先用确定流速，不模拟完整液体物理。
- **验证**：重复同一配方时，玩家是否逐渐从大步加料改为接近目标后的细调？
- **避免**：工具惯性、抖动与隐藏容差一起加入会难以调试；先让玩家理解误差来源。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
定量配料（Measured ingredient dosing）

## 设计目标
把配方中的数字变成手上需要控制的分量。

## 基础规则
玩家按要求称量、倾倒或分割材料，实际投入量参与结果计算。过量不一定能撤回，计量工具和分步添加能降低误差；反馈让玩家区分操作失误与配方问题。

## 核心循环
1. 读取目标用量
2. 选择容器或切分方式
3. 逐步加料
4. 检查实际剂量

## 关键取舍
- 一次倒完节省时间，还是分次加料保证精度？
- 误差出现后补救整批，还是从头开始？

## 可调参数
- 允许误差：宽容差更适合轻松操作；窄容差提高工具掌握的价值。
- 信息精度：实时数字方便校准；只看外观会强调经验但降低可预测性。

## 最小实现建议
做一个倾倒按钮、液量读数和目标范围，先用确定流速，不模拟完整液体物理。

## 验证方式
重复同一配方时，玩家是否逐渐从大步加料改为接近目标后的细调？

## 需要避免
工具惯性、抖动与隐藏容差一起加入会难以调试；先让玩家理解误差来源。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 料理模拟器（Cooking Simulator）

- 机制来源：[Official store](https://store.steampowered.com/app/641320/Cooking_Simulator/)
- 画面来源页：https://store.steampowered.com/app/641320/
- 权利人：Big Cheese Studio
- 核验日期：2026-10-21

### 酿酒大师（Brewmaster: Beer Brewing Simulator）

- 机制来源：[Official store](https://store.steampowered.com/app/1569200/Brewmaster_Beer_Brewing_Simulator/)
- 画面来源页：https://store.steampowered.com/app/1569200/
- 权利人：Auroch Digital / Fireshine Games
- 核验日期：2026-10-21

## 对比观察

料理模拟器的误差直接来自眼前的物理操作；酿酒大师把配比纳入整批产品的实验与复现。

## 组合灵感

组合创意：药膳订单允许一个误差区间，昂贵订单更严格，但可购买校准工具把技术难度转为经营选择。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

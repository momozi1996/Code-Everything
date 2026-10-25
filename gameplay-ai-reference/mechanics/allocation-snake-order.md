---
id: allocation-snake-order
title: "第二轮倒着选补偿后手"
system: allocation
source: https://gameplayatlas.loopyhop.com/mechanic/allocation-snake-order/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 第二轮倒着选补偿后手 · Reverse the next pass to compensate late picks

> 前面先挑，后面则有机会连着挑两次。

- **系统**：分配与调度（allocation）
- **标签**：planning, optimization
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/allocation-snake-order/)

## 基础规则

每人需要选择多次时，第一遍按顺序进行，第二遍反向返回，减少同一人总是先选的优势。玩家不仅看单件价值，也要考虑距离下次选择还有几个人；转折位置可连续选择，适合拿互相配合的两件。

## 核心循环

1. 查看完整选择顺序
2. 拿最怕被抢走的选项
3. 顺序反转后再次选择
4. 根据两次所得形成方案

## 关键取舍

- 先手拿单件最强，还是拿必须配另一件才有用的部分？
- 最后一位能连选两次，要凑组合还是抢两个通用强项？

## 可调参数

- **往返次数**：一次往返便于理解，多轮反转需要持续提示顺序。
- **组合强度**：成对收益越大，连续两次选择就越有价值。

## 最小原型

- **第一步**：三名本地玩家、六张工具牌和两种成对奖励，把六次顺序一直显示在屏幕上。
- **验证**：先手与末位是否形成不同的拿牌策略，且都能说清原因？
- **避免**：蛇形顺序只能补偿部分先手差异，不能保证任意奖励结构都公平。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
第二轮倒着选补偿后手（Reverse the next pass to compensate late picks）

## 设计目标
前面先挑，后面则有机会连着挑两次。

## 基础规则
每人需要选择多次时，第一遍按顺序进行，第二遍反向返回，减少同一人总是先选的优势。玩家不仅看单件价值，也要考虑距离下次选择还有几个人；转折位置可连续选择，适合拿互相配合的两件。

## 核心循环
1. 查看完整选择顺序
2. 拿最怕被抢走的选项
3. 顺序反转后再次选择
4. 根据两次所得形成方案

## 关键取舍
- 先手拿单件最强，还是拿必须配另一件才有用的部分？
- 最后一位能连选两次，要凑组合还是抢两个通用强项？

## 可调参数
- 往返次数：一次往返便于理解，多轮反转需要持续提示顺序。
- 组合强度：成对收益越大，连续两次选择就越有价值。

## 最小实现建议
三名本地玩家、六张工具牌和两种成对奖励，把六次顺序一直显示在屏幕上。

## 验证方式
先手与末位是否形成不同的拿牌策略，且都能说清原因？

## 需要避免
蛇形顺序只能补偿部分先手差异，不能保证任意奖励结构都公平。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 璀璨玻璃（Sagrada）

- 机制来源：[Official rulebook — Floodgate Games](https://floodgategames.com/Sagrada/Sagrada-Rules-Floodgate-Games-SA01.pdf)
- 画面来源页：https://store.steampowered.com/app/965590/Sagrada/
- 权利人：Dire Wolf Digital / Floodgate Games
- 核验日期：2026-10-21

### 卡坦岛宇宙（Catan Universe）

- 机制来源：[Official base-game rules — CATAN](https://www.catan.com/sites/default/files/2021-06/catan_base_rules_2020_200707.pdf)
- 画面来源页：https://store.steampowered.com/app/544730/Catan_Universe/
- 权利人：USM / exozet / CATAN
- 核验日期：2026-10-21

## 对比观察

璀璨玻璃每轮重复往返选骰；卡坦岛将往返主要用于开局选址，之后回到通常的回合顺序。

## 组合灵感

组合提案：玩家蛇形轮选双用途卡，先手优先保住通用牌，末位则可连续拿到互相支持的生产与行动两张牌。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

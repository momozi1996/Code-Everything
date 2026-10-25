---
id: command-interrupt-action
title: "趁准备阶段打断行动"
system: command
source: https://gameplayatlas.loopyhop.com/mechanic/command-interrupt-action/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 趁准备阶段打断行动 · Interrupt an action during preparation

> 放弃眼前伤害，换掉敌人即将完成的大动作。

- **系统**：指挥与单位（command）
- **标签**：timing, information
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/command-interrupt-action/)

## 基础规则

部分行动先准备再生效，期间玩家能用指定攻击或控制把它打断或延后。玩家看准备条、姿势和冷却安排打断时机；用太早可能被无关动作消耗，用太晚则敌人已经完成行动。

## 核心循环

1. 辨认敌人的准备动作
2. 保留或使用打断手段
3. 确认动作取消或延后
4. 等下一次危险准备

## 关键取舍

- 现在打断普通攻击，还是等更危险的法术？
- 打断者要靠近目标，值不值得承担途中伤害？

## 可调参数

- **准备时间**：窗口越短越考验反应；较长窗口更适合指挥多个单位。
- **打断后的处理**：完全取消奖励抓时机；只延后则要求其他单位跟进。

## 最小原型

- **第一步**：只做一名读条敌人、一种普通攻击和一个打断按钮。
- **验证**：玩家会不会主动停手，把打断留给危险动作？
- **避免**：打断成功与目标免疫必须有不同反馈。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
趁准备阶段打断行动（Interrupt an action during preparation）

## 设计目标
放弃眼前伤害，换掉敌人即将完成的大动作。

## 基础规则
部分行动先准备再生效，期间玩家能用指定攻击或控制把它打断或延后。玩家看准备条、姿势和冷却安排打断时机；用太早可能被无关动作消耗，用太晚则敌人已经完成行动。

## 核心循环
1. 辨认敌人的准备动作
2. 保留或使用打断手段
3. 确认动作取消或延后
4. 等下一次危险准备

## 关键取舍
- 现在打断普通攻击，还是等更危险的法术？
- 打断者要靠近目标，值不值得承担途中伤害？

## 可调参数
- 准备时间：窗口越短越考验反应；较长窗口更适合指挥多个单位。
- 打断后的处理：完全取消奖励抓时机；只延后则要求其他单位跟进。

## 最小实现建议
只做一名读条敌人、一种普通攻击和一个打断按钮。

## 验证方式
玩家会不会主动停手，把打断留给危险动作？

## 需要避免
打断成功与目标免疫必须有不同反馈。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 龙腾世纪：起源（Dragon Age: Origins）

- 机制来源：[Official manual — Electronic Arts](https://eaassets-a.akamaihd.net/eahelp/manuals/dragon-age-origins-manuals_Sony%20Playstation%203.pdf)
- 画面来源页：https://store.steampowered.com/app/47810/
- 权利人：BioWare / Electronic Arts
- 核验日期：2026-10-21

### 暴君（Tyranny）

- 机制来源：[Community wiki / rules reference](https://tyranny.fandom.com/wiki/Recovery)
- 画面来源页：https://store.steampowered.com/app/362960/
- 权利人：Obsidian Entertainment / Paradox Interactive
- 核验日期：2026-10-21

## 对比观察

龙腾世纪把打断与施法受击联系起来；暴君将它做成更明确的能力效果。

## 组合灵感

组合提案：打断消耗与闪避共用的耐力，玩家要决定把最后一点体力用来阻止施法还是自保。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

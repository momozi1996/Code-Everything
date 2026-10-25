---
id: command-trait-thresholds
title: "凑够不同成员触发团队加成"
system: command
source: https://gameplayatlas.loopyhop.com/mechanic/command-trait-thresholds/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 凑够不同成员触发团队加成 · Reach team bonuses with distinct members

> 让一个较弱成员也可能成为阵容缺少的最后一块。

- **系统**：指挥与单位（command）
- **标签**：planning, optimization
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/command-trait-thresholds/)

## 基础规则

单位带有阵营或职业标签，场上符合条件的不同成员达到门槛时触发团队效果。玩家在个人强度、标签数量和上场名额间取舍；界面应说明缺谁、差几个，以及换人会失去哪档效果。

## 核心循环

1. 检查已有标签人数
2. 选择补标签或补强度
3. 触发或失去门槛效果
4. 按战况重组成员

## 关键取舍

- 换上弱单位凑出团队加成，是否比单独的强单位更值？
- 追求一条高档加成，还是多条低档加成？

## 可调参数

- **门槛梯度**：间隔大意味着更长的投入期，成型前可能更弱。
- **加成覆盖对象**：只惠及同类更强调专精，惠及全队更鼓励混搭。

## 最小原型

- **第一步**：六名单位、两个标签、一个人数门槛，用数字结算战斗即可。
- **验证**：玩家会不会为补门槛保留看似较弱的单位？
- **避免**：标签与例外太多会把决策变成记忆考试。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
凑够不同成员触发团队加成（Reach team bonuses with distinct members）

## 设计目标
让一个较弱成员也可能成为阵容缺少的最后一块。

## 基础规则
单位带有阵营或职业标签，场上符合条件的不同成员达到门槛时触发团队效果。玩家在个人强度、标签数量和上场名额间取舍；界面应说明缺谁、差几个，以及换人会失去哪档效果。

## 核心循环
1. 检查已有标签人数
2. 选择补标签或补强度
3. 触发或失去门槛效果
4. 按战况重组成员

## 关键取舍
- 换上弱单位凑出团队加成，是否比单独的强单位更值？
- 追求一条高档加成，还是多条低档加成？

## 可调参数
- 门槛梯度：间隔大意味着更长的投入期，成型前可能更弱。
- 加成覆盖对象：只惠及同类更强调专精，惠及全队更鼓励混搭。

## 最小实现建议
六名单位、两个标签、一个人数门槛，用数字结算战斗即可。

## 验证方式
玩家会不会为补门槛保留看似较弱的单位？

## 需要避免
标签与例外太多会把决策变成记忆考试。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 云顶之弈（Teamfight Tactics）

- 机制来源：[Official developer design article — Riot Games](https://teamfighttactics.leagueoflegends.com/en-au/news/dev/dev-design-pillars-of-tft/)
- 画面来源页：https://teamfighttactics.leagueoflegends.com/en-au/news/dev/dev-design-pillars-of-tft/
- 权利人：Riot Games
- 核验日期：2026-10-21

### 刀塔霸业（Dota Underlords）

- 机制来源：[Official game site — Valve](https://www.underlords.com/?l=english)
- 画面来源页：https://www.linuxgame.net/post/194
- 权利人：Valve
- 核验日期：2026-10-21

## 对比观察

云顶之弈用特质组织阵容，刀塔霸业用联盟组织；具体门槛与奖励不同，核心共同点是用有限席位凑规则条件。

## 组合灵感

组合提案：能力槽位同样有限，玩家必须在装备强力单体能力与携带补足团队标签的徽章之间选择。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

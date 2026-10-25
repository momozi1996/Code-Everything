---
id: allocation-follow-phase
title: "我选行动，其他人也能跟着做"
system: allocation
source: https://gameplayatlas.loopyhop.com/mechanic/allocation-follow-phase/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 我选行动，其他人也能跟着做 · Choose a phase that others can also use

> 自己开启的机会，也可能帮对手推进计划。

- **系统**：分配与调度（allocation）
- **标签**：information, planning
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/allocation-follow-phase/)

## 基础规则

玩家各自选择希望发生的行动阶段，公布后只执行有人选择的阶段，其他玩家也可在符合条件时参与。玩家要判断别人会选什么，借对方开启的阶段完成自己的计划；自己选择则确保阶段发生，或获得选择者奖励。

## 核心循环

1. 观察大家当前需要什么
2. 选择自己必须确保的阶段
3. 揭示并共同执行已选阶段
4. 利用结果预测下一轮

## 关键取舍

- 相信别人会选生产，自己去选出售，还是亲自确保生产发生？
- 某个阶段对自己有利，但会让对手更快得分，还要开启吗？

## 可调参数

- **选择是否隐藏**：同时暗选强化预测，公开顺选则强化回应与让利判断。
- **选择者优势**：额外收益能补偿开启公共机会，也不能大到让跟随没有意义。

## 最小原型

- **第一步**：两名本地玩家轮流遮屏选三种阶段，生产、加工、出售按固定顺序执行。
- **验证**：玩家是否会根据对手库存预测阶段，且猜错后能解释原因？
- **避免**：必须区分选阶段与在阶段中有资格行动，避免用户觉得跟随被漏算。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
我选行动，其他人也能跟着做（Choose a phase that others can also use）

## 设计目标
自己开启的机会，也可能帮对手推进计划。

## 基础规则
玩家各自选择希望发生的行动阶段，公布后只执行有人选择的阶段，其他玩家也可在符合条件时参与。玩家要判断别人会选什么，借对方开启的阶段完成自己的计划；自己选择则确保阶段发生，或获得选择者奖励。

## 核心循环
1. 观察大家当前需要什么
2. 选择自己必须确保的阶段
3. 揭示并共同执行已选阶段
4. 利用结果预测下一轮

## 关键取舍
- 相信别人会选生产，自己去选出售，还是亲自确保生产发生？
- 某个阶段对自己有利，但会让对手更快得分，还要开启吗？

## 可调参数
- 选择是否隐藏：同时暗选强化预测，公开顺选则强化回应与让利判断。
- 选择者优势：额外收益能补偿开启公共机会，也不能大到让跟随没有意义。

## 最小实现建议
两名本地玩家轮流遮屏选三种阶段，生产、加工、出售按固定顺序执行。

## 验证方式
玩家是否会根据对手库存预测阶段，且猜错后能解释原因？

## 需要避免
必须区分选阶段与在阶段中有资格行动，避免用户觉得跟随被漏算。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 银河竞逐（Race for the Galaxy）

- 机制来源：[Official rulebook — Rio Grande Games](https://www.riograndegames.com/wp-content/uploads/2013/02/RFTG_2e_rules.pdf)
- 画面来源页：https://store.steampowered.com/app/579940/Race_for_the_Galaxy/
- 权利人：Temple Gates Games / Rio Grande Games
- 核验日期：2026-10-21

### 银河骰子（Roll for the Galaxy）

- 机制来源：[Official rulebook — Rio Grande Games](https://www.riograndegames.com/wp-content/uploads/2013/02/Roll-for-the-Galaxy-Rules.pdf)
- 画面来源页：https://www.iphonelife.com/content/roll-galaxy-game-review
- 权利人：Temple Gates Games / Rio Grande Games
- 核验日期：2026-10-21

## 对比观察

银河竞逐用行动牌和选择者奖励安排阶段；银河骰子还要求预先分配骰子工人，猜对阶段却没派人也无法充分利用。

## 组合灵感

组合提案：多个工厂各选一道公共生产工序，只执行被选中的工序；玩家可借对手开启的加工阶段，把自己的选择留给运输环节。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

---
id: allocation-worker-placement
title: "派人占住一次行动位置"
system: allocation
source: https://gameplayatlas.loopyhop.com/mechanic/allocation-worker-placement/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 派人占住一次行动位置 · Commit a worker to occupy an action

> 先去的位置能做事，也会暂时挡住别人。

- **系统**：分配与调度（allocation）
- **标签**：planning, economy
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/allocation-worker-placement/)

## 基础规则

玩家把有限工人放到公开行动位，支付要求并获得效果；多数位置被占后本轮不能再放人。玩家要安排先后顺序，既完成自己的计划，也判断哪个位置等不到下一次；轮末收回工人后重新争夺。

## 核心循环

1. 查看空位与行动条件
2. 派一个工人执行行动
3. 位置被占，更新备选方案
4. 收回工人开始下一轮

## 关键取舍

- 先拿资源再建造，还是先抢快被占的关键行动？
- 为阻止对手占一个自己收益较低的位置，划算吗？

## 可调参数

- **每轮工人数**：工人越少，每次占位越像不可回头的承诺。
- **位置容量**：允许多人但提高后续成本，可缓和完全被堵死的挫败。

## 最小原型

- **第一步**：三名本地玩家各两枚工人，五个固定行动位，只做一轮占位与回收。
- **验证**：关键位置被占后，玩家能否马上理解原因并找到备选行动？
- **避免**：过多访问条件和例外会掩盖占位的基本冲突。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
派人占住一次行动位置（Commit a worker to occupy an action）

## 设计目标
先去的位置能做事，也会暂时挡住别人。

## 基础规则
玩家把有限工人放到公开行动位，支付要求并获得效果；多数位置被占后本轮不能再放人。玩家要安排先后顺序，既完成自己的计划，也判断哪个位置等不到下一次；轮末收回工人后重新争夺。

## 核心循环
1. 查看空位与行动条件
2. 派一个工人执行行动
3. 位置被占，更新备选方案
4. 收回工人开始下一轮

## 关键取舍
- 先拿资源再建造，还是先抢快被占的关键行动？
- 为阻止对手占一个自己收益较低的位置，划算吗？

## 可调参数
- 每轮工人数：工人越少，每次占位越像不可回头的承诺。
- 位置容量：允许多人但提高后续成本，可缓和完全被堵死的挫败。

## 最小实现建议
三名本地玩家各两枚工人，五个固定行动位，只做一轮占位与回收。

## 验证方式
关键位置被占后，玩家能否马上理解原因并找到备选行动？

## 需要避免
过多访问条件和例外会掩盖占位的基本冲突。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 沙丘：帝国（Dune: Imperium）

- 机制来源：[Official rulebook — Dire Wolf Digital](https://www.direwolfdigital.com/assets/dune/DUNE_IMPERIUM_Rules_2020_10_26.pdf)
- 画面来源页：https://www.pcgamer.com/games/board-games/much-loved-board-game-dune-imperium-has-a-digital-version-now-and-its-getting-rave-response/
- 权利人：Dire Wolf Digital / Legendary
- 核验日期：2026-10-21

### 深水城领主（D&D Lords of Waterdeep）

- 机制来源：[Official rules FAQ — Wizards of the Coast](https://dnd-support.wizards.com/hc/en-us/articles/360000998123-Lords-of-Waterdeep)
- 画面来源页：https://store.steampowered.com/app/644390/DD_Lords_of_Waterdeep/
- 权利人：Playdek / Wizards of the Coast
- 核验日期：2026-10-21

## 对比观察

沙丘还用手牌限制可去地点；深水城的建筑与特殊效果改变可用位置和占位例外。

## 组合灵感

组合提案：建筑材料与施工许可分别占行动位，玩家须先排好施工顺序，同时准备关键位置被抢后的替代工程。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

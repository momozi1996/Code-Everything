---
id: matching-complete-lines
title: "填满整行来释放空间"
system: matching
source: https://gameplayatlas.loopyhop.com/mechanic/matching-complete-lines/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 填满整行来释放空间 · Complete a line to reclaim space

> 落下或放入的形状占地方，凑满一行才能把空间拿回来。

- **系统**：匹配与消除（matching）
- **标签**：planning, spatial, optimization
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/matching-complete-lines/)

## 基础规则

玩家把给定形状放进有限棋盘，填满规定的整行、整列或区域后，这些格子一起清空。每次放置都会占用未来空间，因此要兼顾眼前能清的线、留下的洞以及下一块能否放下。

## 核心循环

1. 查看当前形状和空缺
2. 选择朝向与放置位置
3. 清除填满的线或区域
4. 用腾出的空间接下一块

## 关键取舍

- 先清一行保住空间，还是积攒结构争取一次清多行？
- 贴边放置更整齐，但会不会留下以后难以补上的洞？

## 可调参数

- **形状预告数量**：知道更多后续形状，玩家就能规划多步；无预告更重视通用空位。
- **清除条件**：只清整行更集中；同时允许整列或小区域，会出现交叉清除机会。

## 最小原型

- **第一步**：先用六乘六静态棋盘、三种形状和整行清除，不加实时下落。
- **验证**：玩家能否在放置前指出这一步会留下哪种难填空缺？
- **避免**：形状旋转、预告和随机发牌会显著改变难度，先固定其中两项。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
填满整行来释放空间（Complete a line to reclaim space）

## 设计目标
落下或放入的形状占地方，凑满一行才能把空间拿回来。

## 基础规则
玩家把给定形状放进有限棋盘，填满规定的整行、整列或区域后，这些格子一起清空。每次放置都会占用未来空间，因此要兼顾眼前能清的线、留下的洞以及下一块能否放下。

## 核心循环
1. 查看当前形状和空缺
2. 选择朝向与放置位置
3. 清除填满的线或区域
4. 用腾出的空间接下一块

## 关键取舍
- 先清一行保住空间，还是积攒结构争取一次清多行？
- 贴边放置更整齐，但会不会留下以后难以补上的洞？

## 可调参数
- 形状预告数量：知道更多后续形状，玩家就能规划多步；无预告更重视通用空位。
- 清除条件：只清整行更集中；同时允许整列或小区域，会出现交叉清除机会。

## 最小实现建议
先用六乘六静态棋盘、三种形状和整行清除，不加实时下落。

## 验证方式
玩家能否在放置前指出这一步会留下哪种难填空缺？

## 需要避免
形状旋转、预告和随机发牌会显著改变难度，先固定其中两项。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 俄罗斯方块效应：连接（Tetris Effect: Connected）

- 机制来源：[Official game website — Enhance](https://www.tetriseffect.game/)
- 画面来源页：https://www.tetriseffect.game/
- 权利人：Monstars / Resonair / Stage Games / Enhance / Tetris Holding
- 核验日期：2026-10-21

### 方块数独（Blockudoku）

- 机制来源：[Official developer article — Easybrain](https://easybrain.com/news/easybrain-combines-tile-matching-and-sudoku-into-blockudoku-puzzle-for-ios)
- 画面来源页：https://play.google.com/store/apps/details?id=com.easybrain.block.puzzle.games
- 权利人：Easybrain
- 核验日期：2026-10-21

## 对比观察

Tetris Effect用持续下落压缩决策时间；Blockudoku允许静态摆放，并增加区域清除条件。

## 组合灵感

组合提案：补给箱既是异形物品，也是可消行的拼图。填满一行会消耗该行补给，换来一次团队治疗，玩家要在囤货与腾空间之间取舍。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

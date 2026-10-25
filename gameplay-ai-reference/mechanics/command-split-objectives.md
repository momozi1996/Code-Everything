---
id: command-split-objectives
title: "把队伍拆开处理不同目标"
system: command
source: https://gameplayatlas.loopyhop.com/mechanic/command-split-objectives/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 把队伍拆开处理不同目标 · Split forces between simultaneous objectives

> 同一批人无法同时守住每个地方。

- **系统**：指挥与单位（command）
- **标签**：planning, spatial
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/command-split-objectives/)

## 基础规则

多个目标同时需要人员，玩家把有限单位分组分别移动、守点或执行任务。分兵扩大覆盖范围，也让每组更脆弱；距离和到达时间决定是否来得及相互支援。

## 核心循环

1. 比较同时发生的需求
2. 给各目标分配人数
3. 分别执行并观察压力
4. 调回援军或放弃一处

## 关键取舍

- 守住所有入口但每处都薄弱，还是集中守一个关键点？
- 派精锐救远端目标，会不会让本阵失守？

## 可调参数

- **目标间距离**：越远越难临时改派，分兵决策更接近承诺。
- **失败后果差异**：不同损失让优先级成立，而非只比较最近哪个点。

## 最小原型

- **第一步**：两个倒计时目标、六个可拖动人员标记和固定旅行时间。
- **验证**：玩家是否会根据目标价值改变人数，而不是始终平均分配？
- **避免**：别一开始就做复杂寻路；先验证分配是否有取舍。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
把队伍拆开处理不同目标（Split forces between simultaneous objectives）

## 设计目标
同一批人无法同时守住每个地方。

## 基础规则
多个目标同时需要人员，玩家把有限单位分组分别移动、守点或执行任务。分兵扩大覆盖范围，也让每组更脆弱；距离和到达时间决定是否来得及相互支援。

## 核心循环
1. 比较同时发生的需求
2. 给各目标分配人数
3. 分别执行并观察压力
4. 调回援军或放弃一处

## 关键取舍
- 守住所有入口但每处都薄弱，还是集中守一个关键点？
- 派精锐救远端目标，会不会让本阵失守？

## 可调参数
- 目标间距离：越远越难临时改派，分兵决策更接近承诺。
- 失败后果差异：不同损失让优先级成立，而非只比较最近哪个点。

## 最小实现建议
两个倒计时目标、六个可拖动人员标记和固定旅行时间。

## 验证方式
玩家是否会根据目标价值改变人数，而不是始终平均分配？

## 需要避免
别一开始就做复杂寻路；先验证分配是否有取舍。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 全面战争：三国（Total War: THREE KINGDOMS）

- 机制来源：[Official game manual, archived by Sega Retro](https://segaretro.org/images/f/fd/TW3K_Steam_manual.pdf)
- 画面来源页：https://store.steampowered.com/app/779340/
- 权利人：Creative Assembly / SEGA
- 核验日期：2026-10-21

### 环世界（RimWorld）

- 机制来源：[Community wiki — RimWorld](https://rimworldwiki.com/wiki/Controls)
- 画面来源页：https://store.steampowered.com/app/294100/
- 权利人：Ludeon Studios
- 核验日期：2026-10-21

## 对比观察

全面战争主要分配成队兵力；环世界分配的是兼有生产价值与个人伤势的殖民者。

## 组合灵感

组合提案：两处目标都要同步触发，玩家先派人到位，又必须留下足够护卫抵挡到达前的威胁。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

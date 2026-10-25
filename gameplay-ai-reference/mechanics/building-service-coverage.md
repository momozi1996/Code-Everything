---
id: building-service-coverage
title: "设施覆盖选址"
system: building
source: https://gameplayatlas.loopyhop.com/mechanic/building-service-coverage/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 设施覆盖选址 · Service coverage placement

> 让关键设施覆盖更多需求，同时减少无效重叠。

- **系统**：建造与空间（building）
- **标签**：spatial, planning, optimization
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/building-service-coverage/)

## 基础规则

玩家查看设施作用范围，把需要服务的对象安排在有效区域。边界、路径和容量限制收益；覆盖提示与未服务对象引导下一轮选址。

## 核心循环

1. 找出缺口
2. 预览覆盖
3. 放置设施
4. 检查边缘与扩张

## 关键取舍

- 中心位置覆盖广，却占据宝贵地块。
- 边缘站点减少盲区，却增加重复建设。

## 可调参数

- **范围形状**：圆形易理解，沿路传播强调路网配合。
- **服务容量**：容量有限时，已覆盖区域也可能需要新设施。

## 最小原型

- **第一步**：做有限地图、几个需求点和一个可移动覆盖圆，显示覆盖数量与建造成本。
- **验证**：在新增需求点后，玩家是否会重新评估旧设施位置，而不只是继续堆数量？
- **避免**：覆盖范围、服务容量和道路可达是三种限制，首版先清楚区分再逐项加入。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
设施覆盖选址（Service coverage placement）

## 设计目标
让关键设施覆盖更多需求，同时减少无效重叠。

## 基础规则
玩家查看设施作用范围，把需要服务的对象安排在有效区域。边界、路径和容量限制收益；覆盖提示与未服务对象引导下一轮选址。

## 核心循环
1. 找出缺口
2. 预览覆盖
3. 放置设施
4. 检查边缘与扩张

## 关键取舍
- 中心位置覆盖广，却占据宝贵地块。
- 边缘站点减少盲区，却增加重复建设。

## 可调参数
- 范围形状：圆形易理解，沿路传播强调路网配合。
- 服务容量：容量有限时，已覆盖区域也可能需要新设施。

## 最小实现建议
做有限地图、几个需求点和一个可移动覆盖圆，显示覆盖数量与建造成本。

## 验证方式
在新增需求点后，玩家是否会重新评估旧设施位置，而不只是继续堆数量？

## 需要避免
覆盖范围、服务容量和道路可达是三种限制，首版先清楚区分再逐项加入。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 英灵神殿（Valheim）

- 机制来源：[Community wiki](https://valheim.fandom.com/wiki/Workbench)
- 画面来源页：https://store.steampowered.com/app/892970/
- 权利人：Iron Gate AB
- 核验日期：2026-10-21

### 城市：天际线（Cities: Skylines）

- 机制来源：[Official game manual](https://cdn.akamai.steamstatic.com/steam/apps/255710/manuals/CitiesSkylines-UserManual_EN.pdf)
- 画面来源页：https://store.steampowered.com/app/255710/
- 权利人：Colossal Order / Paradox Interactive
- 核验日期：2026-10-21

## 对比观察

工作台提供局部建造支持；城市服务还要应对通行与容量限制。

## 组合灵感

设计每天只驻扎一个位置的流动兽医营地，覆盖不同农场并处理有限诊疗量。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

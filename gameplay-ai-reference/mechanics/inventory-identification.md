---
id: inventory-identification
title: "未知道具鉴定"
system: inventory
source: https://gameplayatlas.loopyhop.com/mechanic/inventory-identification/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 未知道具鉴定 · Unknown-item identification

> 先承担试用风险，还是花资源换取确定性？

- **系统**：背包与资源（inventory）
- **标签**：information, risk, discovery
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/inventory-identification/)

## 基础规则

拾取的道具先隐藏名称或效果，玩家通过鉴定、观察或使用来确认。尝试可能消耗道具或触发负面效果，而已获得的知识让以后同类物品更容易判断。

## 核心循环

1. 拾取未知物品
2. 选择安全鉴定或试用
3. 观察结果并记录
4. 据此决定保留用途

## 关键取舍

- 紧急时喝未知药水可能获救，也可能雪上加霜。
- 有限鉴定资源优先给高价值装备，还是先排除危险消耗品？

## 可调参数

- **知识保留范围**：单局保留促使每轮重新学习；跨局保留形成长期图鉴。
- **试错代价**：低代价鼓励实验；高代价使线索和鉴定工具更重要。

## 最小原型

- **第一步**：做四种随机外观药水、一项鉴定资源，以及本局共享的已知效果记录。
- **验证**：观察玩家在安全与危急状态下是否采用不同鉴定顺序。
- **避免**：先限制负面效果强度；没有线索的即死结果很难产生可学习的判断。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
未知道具鉴定（Unknown-item identification）

## 设计目标
先承担试用风险，还是花资源换取确定性？

## 基础规则
拾取的道具先隐藏名称或效果，玩家通过鉴定、观察或使用来确认。尝试可能消耗道具或触发负面效果，而已获得的知识让以后同类物品更容易判断。

## 核心循环
1. 拾取未知物品
2. 选择安全鉴定或试用
3. 观察结果并记录
4. 据此决定保留用途

## 关键取舍
- 紧急时喝未知药水可能获救，也可能雪上加霜。
- 有限鉴定资源优先给高价值装备，还是先排除危险消耗品？

## 可调参数
- 知识保留范围：单局保留促使每轮重新学习；跨局保留形成长期图鉴。
- 试错代价：低代价鼓励实验；高代价使线索和鉴定工具更重要。

## 最小实现建议
做四种随机外观药水、一项鉴定资源，以及本局共享的已知效果记录。

## 验证方式
观察玩家在安全与危急状态下是否采用不同鉴定顺序。

## 需要避免
先限制负面效果强度；没有线索的即死结果很难产生可学习的判断。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 破碎的像素地牢（Shattered Pixel Dungeon）

- 机制来源：[Game wiki](https://pixeldungeon.fandom.com/wiki/Shattered_Pixel_Dungeon/Journal)
- 画面来源页：https://store.steampowered.com/app/1769170/
- 权利人：Shattered Pixel
- 核验日期：2026-10-21

### Caves of Qud（Caves of Qud）

- 机制来源：[Developer patch notes](https://store.steampowered.com/news/posts/?appids=333640&enddate=1598676844&feed=steam_community_announcements)
- 画面来源页：https://store.steampowered.com/app/333640/
- 权利人：Freehold Games
- 核验日期：2026-10-21

## 对比观察

前者主要重新洗牌物品外观与效果的对应；后者强调角色面对陌生技术时的理解能力。

## 组合灵感

组合提案：炼金经营中可付费鉴定原料，也可小剂量试药，结果写入本轮药性记录。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

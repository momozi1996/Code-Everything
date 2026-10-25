---
id: driving-air-balance
title: "空中调整车身，准备落地"
system: driving
source: https://gameplayatlas.loopyhop.com/mechanic/driving-air-balance/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 空中调整车身，准备落地 · Adjust vehicle pitch before landing

> 腾空后仍能改变姿态，让车轮以合适角度接触下一段地面。

- **系统**：驾驶与竞速（driving）
- **标签**：precision, dexterity, risk
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/driving-air-balance/)

## 基础规则

载具离地后，玩家用前后倾或油门刹车等输入影响旋转。观察落地点的坡度，逐步把车身调到可接受的角度，再接地继续行驶。修正过头会造成新的倾斜，因而既要决定何时施力，也要决定何时停止。

## 核心循环

1. 起跳并观察落地坡度
2. 比较车身与地面角度
3. 输入修正并及时停手
4. 落地后准备下一次起伏

## 关键取舍

- 现在强力修正，还是等落点更清楚后轻微调整？
- 车身已接近目标角度，还应继续按住吗？

## 可调参数

- **姿态响应与惯性**：响应快容易及时修正；惯性大需要提前停止输入。
- **落地容错范围**：宽容范围帮助学习，窄范围使坡度判断和细小修正更重要。

## 最小原型

- **第一步**：做一个可旋转的矩形、固定抛物线和两种坡面，先测试输入与落地角度的关系。
- **验证**：失败后，玩家能否指出是修正太晚还是按得太久，并在下一次改善？
- **避免**：不要一开始同时加入复杂悬挂、损伤与多轮接触，先让姿态变化可预测。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
空中调整车身，准备落地（Adjust vehicle pitch before landing）

## 设计目标
腾空后仍能改变姿态，让车轮以合适角度接触下一段地面。

## 基础规则
载具离地后，玩家用前后倾或油门刹车等输入影响旋转。观察落地点的坡度，逐步把车身调到可接受的角度，再接地继续行驶。修正过头会造成新的倾斜，因而既要决定何时施力，也要决定何时停止。

## 核心循环
1. 起跳并观察落地坡度
2. 比较车身与地面角度
3. 输入修正并及时停手
4. 落地后准备下一次起伏

## 关键取舍
- 现在强力修正，还是等落点更清楚后轻微调整？
- 车身已接近目标角度，还应继续按住吗？

## 可调参数
- 姿态响应与惯性：响应快容易及时修正；惯性大需要提前停止输入。
- 落地容错范围：宽容范围帮助学习，窄范围使坡度判断和细小修正更重要。

## 最小实现建议
做一个可旋转的矩形、固定抛物线和两种坡面，先测试输入与落地角度的关系。

## 验证方式
失败后，玩家能否指出是修正太晚还是按得太久，并在下一次改善？

## 需要避免
不要一开始同时加入复杂悬挂、损伤与多轮接触，先让姿态变化可预测。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 特技摩托：崛起（Trials Rising）

- 机制来源：[Official Ubisoft feature](https://news.ubisoft.com/en-us/article/4Br16FNvGgY2MtpWelZDIh/trials-rising-going-tandem-and-breaking-bones-abroad-e3-2018)
- 画面来源页：https://www.nintendo.com/us/store/products/trials-rising-standard-edition-switch/
- 权利人：RedLynx / Ubisoft
- 核验日期：2026-10-21

### 登山赛车2（Hill Climb Racing 2）

- 机制来源：[Community controls wiki / Reddit](https://www.reddit.com/r/HillClimbRacing/wiki/hcr2/controls/)
- 画面来源页：https://fingersoft.com/games/hill-climb-racing-2/
- 权利人：Fingersoft
- 核验日期：2026-10-21

## 对比观察

特技摩托强调骑手倾身与车身平衡，双人模式还加入协调；登山赛车把空中旋转映射到已有的油门和刹车。

## 组合灵感

组合提案：送货重量改变空中旋转速度，玩家在出发前选择多装货，或保留容易控制的车身；先只设轻、重两档。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

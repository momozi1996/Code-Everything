---
id: incremental-spend-time-advance
title: "消耗道具，把未来收益提前结算"
system: incremental
source: https://gameplayatlas.loopyhop.com/mechanic/incremental-spend-time-advance/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 消耗道具，把未来收益提前结算 · Spend an item to bring future earnings forward

> 同一张时间券，配置更好时使用会得到不同结果。

- **系统**：放置与增量（incremental）
- **标签**：time, economy, planning
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/incremental-spend-time-advance/)

## 基础规则

玩家拥有数量有限的时间推进道具，使用后按当前可生效的产出或进度规则立即结算一段时间。先升级再使用通常会改变收益，而等待升级也有机会成本。应明确它推进哪些系统，以及临时效果是否被计入。

## 核心循环

1. 查看道具的预计结算
2. 判断是否先调整产出
3. 使用道具推进允许的进度
4. 用收益投入下一轮

## 关键取舍

- 现在用道具跨过卡点，还是再等一个产量升级让它更值钱？
- 一次用完多个，还是每次结算后重新投资再用下一张？

## 可调参数

- **结算依据**：按当前速率结算易于预测；模拟过程则要解释中途停工与解锁。
- **作用范围**：只影响一个产线或地区会增加选择；全局推进则需要统一边界提示。

## 最小原型

- **第一步**：只推进一种资源，使用前明确显示时间长度、预计收入和排除项。
- **验证**：玩家是否会先检查当前产出，再决定用券或保留？
- **避免**：不要把本机制的原型验证绑定真实付费；先用关卡奖励发券。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
消耗道具，把未来收益提前结算（Spend an item to bring future earnings forward）

## 设计目标
同一张时间券，配置更好时使用会得到不同结果。

## 基础规则
玩家拥有数量有限的时间推进道具，使用后按当前可生效的产出或进度规则立即结算一段时间。先升级再使用通常会改变收益，而等待升级也有机会成本。应明确它推进哪些系统，以及临时效果是否被计入。

## 核心循环
1. 查看道具的预计结算
2. 判断是否先调整产出
3. 使用道具推进允许的进度
4. 用收益投入下一轮

## 关键取舍
- 现在用道具跨过卡点，还是再等一个产量升级让它更值钱？
- 一次用完多个，还是每次结算后重新投资再用下一张？

## 可调参数
- 结算依据：按当前速率结算易于预测；模拟过程则要解释中途停工与解锁。
- 作用范围：只影响一个产线或地区会增加选择；全局推进则需要统一边界提示。

## 最小实现建议
只推进一种资源，使用前明确显示时间长度、预计收入和排除项。

## 验证方式
玩家是否会先检查当前产出，再决定用券或保留？

## 需要避免
不要把本机制的原型验证绑定真实付费；先用关卡奖励发券。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 冒险资本家（AdVenture Capitalist）

- 机制来源：[Official support documentation](https://screenzilla.helpshift.com/hc/en/5-adventure-capitalist/faq/34-what-s-the-deal-with-all-these-time-warps/)
- 画面来源页：https://store.steampowered.com/app/346900/
- 权利人：Hyper Hippo Games
- 核验日期：2026-10-21

### 点击英雄（Clicker Heroes）

- 机制来源：[Community game wiki](https://clickerheroes.fandom.com/wiki/Currencies)
- 画面来源页：https://store.steampowered.com/app/363970/
- 权利人：Playsaurus
- 核验日期：2026-10-21

## 对比观察

冒险资本家突出某个星球的即时利润预览；点击英雄还把时间推进放进英雄、技能和任务等进度语境。

## 组合灵感

组合提案：用限量时间券提前结算工坊产出，但本轮到期的债务也随之结算，玩家必须先确认净收入。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

---
id: commerce-dynamic-market
title: "供需驱动价格"
system: commerce
source: https://gameplayatlas.loopyhop.com/mechanic/commerce-dynamic-market/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 供需驱动价格 · Supply-driven market prices

> 让买卖行为改变下一次报价，市场成为会被玩家影响的系统。

- **系统**：商业与交易（commerce）
- **标签**：economy, optimization, risk
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/commerce-dynamic-market/)

## 基础规则

玩家观察行情后买入或卖出。市场供需随交易与生产变化，连续抛售可能压低自身利润；收入反馈同时也是下一步的市场信号。

## 核心循环

1. 观察价格与产量
2. 选择买卖方向
3. 执行交易
4. 重估改变后的市场

## 关键取舍

- 现在卖掉锁定收益，还是等待需求上升？
- 扩大产能是否会把高价市场自己做没？

## 可调参数

- **价格弹性**：交易少量就大幅变价会强化择时，也可能鼓励短线操控。
- **市场共享范围**：共享市场加强对抗，分区市场增加运输意义。

## 最小原型

- **第一步**：做两种商品、可见库存与简单的供需价格公式，每轮刷新需求。
- **验证**：大批卖出后，玩家是否理解自己压低了价格，并改变后续交易量。
- **避免**：先限制价格边界和买卖差价，避免玩家靠同一循环无限套利。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
供需驱动价格（Supply-driven market prices）

## 设计目标
让买卖行为改变下一次报价，市场成为会被玩家影响的系统。

## 基础规则
玩家观察行情后买入或卖出。市场供需随交易与生产变化，连续抛售可能压低自身利润；收入反馈同时也是下一步的市场信号。

## 核心循环
1. 观察价格与产量
2. 选择买卖方向
3. 执行交易
4. 重估改变后的市场

## 关键取舍
- 现在卖掉锁定收益，还是等待需求上升？
- 扩大产能是否会把高价市场自己做没？

## 可调参数
- 价格弹性：交易少量就大幅变价会强化择时，也可能鼓励短线操控。
- 市场共享范围：共享市场加强对抗，分区市场增加运输意义。

## 最小实现建议
做两种商品、可见库存与简单的供需价格公式，每轮刷新需求。

## 验证方式
大批卖出后，玩家是否理解自己压低了价格，并改变后续交易量。

## 需要避免
先限制价格边界和买卖差价，避免玩家靠同一循环无限套利。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 外星贸易公司（Offworld Trading Company）

- 机制来源：[Community wiki](https://offworldtradingcompany.fandom.com/wiki/Market)
- 画面来源页：https://store.steampowered.com/app/271240/
- 权利人：Mohawk Games / Stardock
- 核验日期：2026-10-21

### 大航海家4（Patrician IV）

- 机制来源：[Official manual](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/57620/manuals/p4_manual-en.pdf?t=1730294615)
- 画面来源页：https://store.steampowered.com/app/57620/
- 权利人：Gaming Minds Studios / Kalypso Media
- 核验日期：2026-10-21

## 对比观察

外星贸易公司的实时共享市场让对手直接影响行情；大航海家4把价格与城市、航程连接。

## 组合灵感

组合创意：矿业小镇中玩家开采过多某矿会拉低当地价格，逼迫采集路线与制造用途一起调整。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

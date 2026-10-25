---
id: matching-merge-three-upgrade
title: "把同级物件合成更高一级"
system: matching
source: https://gameplayatlas.loopyhop.com/mechanic/matching-merge-three-upgrade/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 把同级物件合成更高一级 · Merge matching items into the next tier

> 合并既带来升级，也把多个占位缩成一个。

- **系统**：匹配与消除（matching）
- **标签**：planning, spatial, optimization
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/matching-merge-three-upgrade/)

## 基础规则

玩家把足够数量的同级物件聚在一起，消耗它们生成更高一级物件。升级产物继续占据棋盘，并能参与下一层合并；玩家要为当前素材、未来产物和暂时无法合并的零散物件分配空间。

## 核心循环

1. 收集同级素材
2. 为合并安排位置
3. 生成高一级物件
4. 围绕产物准备下一组合

## 关键取舍

- 马上合并腾空间，还是多等几个素材争取更好的批量收益？
- 把产物留在中央方便下一次合并，还是放边缘减少挡路？

## 可调参数

- **每次消耗数量**：需要更多素材会增加占位压力，也让腾出空间的瞬间更明显。
- **批量合并奖励**：批量奖励鼓励等待，但过大时会让小规模合并失去价值。

## 最小原型

- **第一步**：做四乘四棋盘、三个物件等级和固定的三合一规则。
- **验证**：玩家是否能说出自己这次合并主要为了升级，还是为了腾位置？
- **避免**：不要一开始就加入几十条升级链；先验证空间压力是否足以形成选择。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
把同级物件合成更高一级（Merge matching items into the next tier）

## 设计目标
合并既带来升级，也把多个占位缩成一个。

## 基础规则
玩家把足够数量的同级物件聚在一起，消耗它们生成更高一级物件。升级产物继续占据棋盘，并能参与下一层合并；玩家要为当前素材、未来产物和暂时无法合并的零散物件分配空间。

## 核心循环
1. 收集同级素材
2. 为合并安排位置
3. 生成高一级物件
4. 围绕产物准备下一组合

## 关键取舍
- 马上合并腾空间，还是多等几个素材争取更好的批量收益？
- 把产物留在中央方便下一次合并，还是放边缘减少挡路？

## 可调参数
- 每次消耗数量：需要更多素材会增加占位压力，也让腾出空间的瞬间更明显。
- 批量合并奖励：批量奖励鼓励等待，但过大时会让小规模合并失去价值。

## 最小实现建议
做四乘四棋盘、三个物件等级和固定的三合一规则。

## 验证方式
玩家是否能说出自己这次合并主要为了升级，还是为了腾位置？

## 需要避免
不要一开始就加入几十条升级链；先验证空间压力是否足以形成选择。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 三重镇（Triple Town）

- 机制来源：[Official developer description — Spry Fox](https://spryfox.com/our-games/triple-town/)
- 画面来源页：https://store.steampowered.com/app/209950/
- 权利人：Spry Fox
- 核验日期：2026-10-21

### 合成龙（Merge Dragons!）

- 机制来源：[Official developer help / documentation](https://gramgames.helpshift.com/hc/en/9-merge-dragons-1497457953/faq/54-tip-merging-5-at-once-is-better-than-3/)
- 画面来源页：https://play.google.com/store/apps/details?id=com.gramgames.mergedragons
- 权利人：Gram Games / Zynga
- 核验日期：2026-10-21

## 对比观察

Triple Town把合并位置和不断填满的城镇绑在一起；Merge Dragons明确用五合二奖励较大的批量。

## 组合灵感

组合提案：三株成熟作物可合成一株多年生作物，但等待成熟期间都占田地。玩家要比较短期收割收入与长期节省的种植空间。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

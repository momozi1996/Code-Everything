---
id: matching-pattern-creates-power
title: "凑出特定形状制造特殊块"
system: matching
source: https://gameplayatlas.loopyhop.com/mechanic/matching-pattern-creates-power/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 凑出特定形状制造特殊块 · Create a power piece with a match pattern

> 同样是消除，凑成哪种形状决定留下什么工具。

- **系统**：匹配与消除（matching）
- **标签**：planning, spatial, optimization
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/matching-pattern-creates-power/)

## 基础规则

普通匹配只清除物件，较长直线或拐角形状还会留下特殊块。玩家先通过移动准备形状，再决定何时触发特殊块；生成位置和作用范围必须看得清，才能规划它将来帮助哪一片区域。

## 核心循环

1. 寻找能扩成特殊形状的匹配
2. 调整位置完成形状
3. 留下对应的特殊块
4. 选择位置与时机使用

## 关键取舍

- 现在做普通三连完成一点目标，还是多花一步凑出能清整列的工具？
- 特殊块更强，但生成位置离目标太远，是否值得准备？

## 可调参数

- **形状到效果的对应**：少量固定对应易于记忆；形状过多会让玩家转而依赖提示。
- **特殊块生成位置**：位置可预测时能提前布局；随机位置会削弱空间规划。

## 最小原型

- **第一步**：只做普通三连和一种四连特殊块，让生成位置固定且可预览。
- **验证**：玩家会不会为了未来作用范围，主动放弃眼前的普通匹配？
- **避免**：同时解释多种形状和多种爆炸范围会压过核心选择，先验证一种。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
凑出特定形状制造特殊块（Create a power piece with a match pattern）

## 设计目标
同样是消除，凑成哪种形状决定留下什么工具。

## 基础规则
普通匹配只清除物件，较长直线或拐角形状还会留下特殊块。玩家先通过移动准备形状，再决定何时触发特殊块；生成位置和作用范围必须看得清，才能规划它将来帮助哪一片区域。

## 核心循环
1. 寻找能扩成特殊形状的匹配
2. 调整位置完成形状
3. 留下对应的特殊块
4. 选择位置与时机使用

## 关键取舍
- 现在做普通三连完成一点目标，还是多花一步凑出能清整列的工具？
- 特殊块更强，但生成位置离目标太远，是否值得准备？

## 可调参数
- 形状到效果的对应：少量固定对应易于记忆；形状过多会让玩家转而依赖提示。
- 特殊块生成位置：位置可预测时能提前布局；随机位置会削弱空间规划。

## 最小实现建议
只做普通三连和一种四连特殊块，让生成位置固定且可预览。

## 验证方式
玩家会不会为了未来作用范围，主动放弃眼前的普通匹配？

## 需要避免
同时解释多种形状和多种爆炸范围会压过核心选择，先验证一种。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 糖果传奇（Candy Crush Saga）

- 机制来源：[Official developer help / documentation](https://candycrush.zendesk.com/hc/en-us/articles/211939685-Creating-and-combining-Special-Candies)
- 画面来源页：https://play.google.com/store/apps/details?id=com.king.candycrushsaga
- 权利人：King
- 核验日期：2026-10-21

### 宝石迷阵3（Bejeweled 3）

- 机制来源：[Community reference — Wikipedia gameplay section](https://en.wikipedia.org/wiki/Bejeweled_3)
- 画面来源页：https://store.steampowered.com/app/78000/
- 权利人：PopCap Games / Electronic Arts
- 核验日期：2026-10-21

## 对比观察

相似的形状在两作中不一定对应相同作用范围：糖果传奇四连产生行列清除工具，宝石迷阵3四连产生邻域爆炸工具。

## 组合灵感

组合提案：横线、拐角和长直线分别生成压制、破甲和处决资源。玩家先读敌人的失衡需求，再选择准备哪种形状。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

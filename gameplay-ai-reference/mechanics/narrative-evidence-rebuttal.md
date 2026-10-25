---
id: narrative-evidence-rebuttal
title: "拿证据反驳某一句话"
system: narrative
source: https://gameplayatlas.loopyhop.com/mechanic/narrative-evidence-rebuttal/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 拿证据反驳某一句话 · Use evidence to challenge a specific statement

> 不是猜凶手，而是指出这句话与哪条事实冲突。

- **系统**：叙事与选择（narrative）
- **标签**：information, narrative, discovery
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/narrative-evidence-rebuttal/)

## 基础规则

对方给出一组可以逐句审视的陈述，玩家将某份证据对应到其中一句。只有证据内容与该陈述确实冲突时，质询才推进；成功后证词被补充或改写，产生下一处可检查的矛盾。

## 核心循环

1. 阅读一段陈述
2. 比较证据里的事实
3. 在矛盾处出示证据
4. 检查更新后的说法

## 关键取舍

- 已经找到明确矛盾就反驳，还是先追问补齐上下文？
- 两份证据都相关时，哪份能直接推翻这句话？

## 可调参数

- **证据与陈述的对应范围**：一份证据可反驳多个合理陈述，会减少“只认作者指定句”的挫败感。
- **错误质询成本**：轻罚鼓励验证假设；重罚要求更清楚的文字与复查机会。

## 最小原型

- **第一步**：做三句证词、三张证据卡和一次改口，不先写完整案件。
- **验证**：玩家能否不用穷举，就用自己的话解释这一对为什么冲突？
- **避免**：相关不等于矛盾；需要说明证据如何否定陈述，避免猜作者意图。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
拿证据反驳某一句话（Use evidence to challenge a specific statement）

## 设计目标
不是猜凶手，而是指出这句话与哪条事实冲突。

## 基础规则
对方给出一组可以逐句审视的陈述，玩家将某份证据对应到其中一句。只有证据内容与该陈述确实冲突时，质询才推进；成功后证词被补充或改写，产生下一处可检查的矛盾。

## 核心循环
1. 阅读一段陈述
2. 比较证据里的事实
3. 在矛盾处出示证据
4. 检查更新后的说法

## 关键取舍
- 已经找到明确矛盾就反驳，还是先追问补齐上下文？
- 两份证据都相关时，哪份能直接推翻这句话？

## 可调参数
- 证据与陈述的对应范围：一份证据可反驳多个合理陈述，会减少“只认作者指定句”的挫败感。
- 错误质询成本：轻罚鼓励验证假设；重罚要求更清楚的文字与复查机会。

## 最小实现建议
做三句证词、三张证据卡和一次改口，不先写完整案件。

## 验证方式
玩家能否不用穷举，就用自己的话解释这一对为什么冲突？

## 需要避免
相关不等于矛盾；需要说明证据如何否定陈述，避免猜作者意图。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 逆转裁判123 成步堂精选集（Phoenix Wright: Ace Attorney Trilogy）

- 机制来源：[Community wiki — Ace Attorney Wiki](https://aceattorney.fandom.com/wiki/Trial)
- 画面来源页：https://minireview.io/adventure/ace-attorney-trilogy
- 权利人：CAPCOM / screenshot via MiniReview
- 核验日期：2026-10-21

### 弹丸论破：希望的学园与绝望的高中生（Danganronpa: Trigger Happy Havoc）

- 机制来源：[Community wiki — Danganronpa Wiki](https://danganronpa.fandom.com/wiki/Truth_Bullets)
- 画面来源页：https://store.steampowered.com/app/413410/
- 权利人：Spike Chunsoft
- 核验日期：2026-10-21

## 对比观察

逆转裁判强调逐句选择与出示；弹丸论破还把证据匹配放进持续滚动的辩论操作中。

## 组合灵感

组合提案：未鉴定的物证只有模糊描述；花资源化验后出现精确时间或材质，才能推翻更具体的证词。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

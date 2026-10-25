---
id: narrative-deliberate-silence
title: "选择不回答，让对方继续"
system: narrative
source: https://gameplayatlas.loopyhop.com/mechanic/narrative-deliberate-silence/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 选择不回答，让对方继续 · Choose silence and let the other person continue

> 不提供信息也是一种回应，但未必能避免后果。

- **系统**：叙事与选择（narrative）
- **标签**：information, narrative, risk
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/narrative-deliberate-silence/)

## 基础规则

在对话中保留明确的不回答路径。玩家可以拒绝透露立场，让对方继续说、自行猜测或改变问题；系统要为沉默写出有意义的反馈，而非把它当成漏按按钮。即使没有倒计时，这个规则也可以成立。

## 核心循环

1. 判断是否愿意透露立场
2. 回答或保持沉默
3. 观察对方如何理解
4. 决定继续隐瞒还是开口

## 关键取舍

- 不撒谎也不坦白，是否值得承受对方的不信任？
- 先让对方说出更多，还是及时澄清误会？

## 可调参数

- **沉默反馈的明确程度**：让角色追问或移开话题，可表明游戏确实接收到了这个选择。
- **沉默能保留多少信息**：若每次沉默都被准确猜中，隐藏信息就失去作用。

## 最小原型

- **第一步**：写两次连续问话，为回答、撒谎、沉默分别保留一条可见反应。
- **验证**：玩家是否能预测沉默保护了什么、又损失了什么？
- **避免**：不要把沉默统一写成“坏回答”，否则它只是一个陷阱按钮。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
选择不回答，让对方继续（Choose silence and let the other person continue）

## 设计目标
不提供信息也是一种回应，但未必能避免后果。

## 基础规则
在对话中保留明确的不回答路径。玩家可以拒绝透露立场，让对方继续说、自行猜测或改变问题；系统要为沉默写出有意义的反馈，而非把它当成漏按按钮。即使没有倒计时，这个规则也可以成立。

## 核心循环
1. 判断是否愿意透露立场
2. 回答或保持沉默
3. 观察对方如何理解
4. 决定继续隐瞒还是开口

## 关键取舍
- 不撒谎也不坦白，是否值得承受对方的不信任？
- 先让对方说出更多，还是及时澄清误会？

## 可调参数
- 沉默反馈的明确程度：让角色追问或移开话题，可表明游戏确实接收到了这个选择。
- 沉默能保留多少信息：若每次沉默都被准确猜中，隐藏信息就失去作用。

## 最小实现建议
写两次连续问话，为回答、撒谎、沉默分别保留一条可见反应。

## 验证方式
玩家是否能预测沉默保护了什么、又损失了什么？

## 需要避免
不要把沉默统一写成“坏回答”，否则它只是一个陷阱按钮。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 行尸走肉：第二季（The Walking Dead: Season Two）

- 机制来源：[Official Xbox game manual — Telltale](https://dlassets-ssl.xboxlive.com/public/content/243b02b9-fbcc-41de-85d3-72e532bd24b6/GameManual/40c0590a-e48c-4c91-8273-0833b769a33b/en-AE/index.html)
- 画面来源页：https://store.steampowered.com/app/261030/
- 权利人：Telltale Games / Skybound Games
- 核验日期：2026-10-21

### 狼奔豕突（Oxenfree）

- 机制来源：[Official Netflix Games support](https://games-netflix.helpshift.com/hc/en/31-oxenfree/faq/1201-what-happens-if-i-ignore-a-conversation-prompt/)
- 画面来源页：https://www.androidcentral.com/tune-your-radio-terror-oxenfree-android
- 权利人：Night School Studio / screenshot via Android Central
- 核验日期：2026-10-21

## 对比观察

行尸走肉把沉默摆成一个可选回答；Oxenfree 也允许玩家通过不介入来表达。

## 组合灵感

组合提案：伪装潜入时，回答能证明身份，也可能暴露知识漏洞；沉默能少说错话，却会让守卫提高警惕。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。

---
id: gpt6-astra-arcade-jelly
title: "果冻擂台双人对抗"
model: "GPT-6 Astra"
author: "火山哥️ @huoshan007"
source: "https://x.com/huoshan007/status/2102703772128489903"
published_at: "2026-09-23T10:17:00+00:00"
contentLicense: CC-BY-NC-4.0
---

# 果冻擂台双人对抗

- **模型**：GPT-6 Astra
- **作者**：火山哥️ @huoshan007
- **原帖**：https://x.com/huoshan007/status/2102703772128489903
- **分类**：游戏
- **code2 标签**：code2game, code2canvas
- **许可**：CC-BY-NC-4.0（默认许可：署名-非商业使用（CC BY-NC 4.0）。本条内容为第三方原作者作品，若原作者另有明确声明，以原作者声明为准。如需下架请提 Issue，即刻移除。）

## Prompt

```
请用原生 JavaScript ES 模块和 Canvas 2D 制作原创同屏双人游戏《果冻擂台》。画布 960×600。薄荷绿、莓果粉两个有表情、有软体形变动画的果冻，圆形悬浮擂台随回合缩小。采用加速度、阻尼和真实碰撞冲量；移动＋带 1.25 秒冷却的冲刺＋按住防守。防守降低击退并减速。出圈超过 0.3 秒失分，对手得 1 分，自动进入下一回合；双方同时出圈算平。整局 60 秒，依据真实得分结算。键盘与手机方向键均可操作，支持同屏双人和通过相同输入接口操作的非作弊机器人。使用确定性种子；暂停时冻结逻辑；结束回调仅一次。做原创渐变果冻、表情、粒子、倒影、危险环，不使用任何外部素材。为碰撞、防守、环出界、平局、计分、结束冻结写自动测试。
```

## 相关链接

- https://github.com/huoshantao7-hub/party-pocket-arcade
- https://raw.githubusercontent.com/huoshantao7-hub/party-pocket-arcade/1d631426532c498b4a42e25e2b68230044a03dc1/docs/jelly.md
- https://raw.githubusercontent.com/huoshantao7-hub/party-pocket-arcade/1d631426532c498b4a42e25e2b68230044a03dc1/assets/jelly.jpg

## 原始媒体（指向原作者 CDN，不在本仓库托管）

- https://raw.githubusercontent.com/huoshantao7-hub/party-pocket-arcade/1d631426532c498b4a42e25e2b68230044a03dc1/assets/jelly.jpg

## 备注

作者仓库标注“复现提示词”，不是逐轮原始聊天记录；按作者公开复现版本原样收录。6 款不同任务来自同一个 X 帖和同一仓库，不算6个独立来源。运行成品需 Node.js 20+；同 Wi-Fi 手机手柄仍未经过实体手机跨网络验证。源码 MIT；不以作者描述替代本次试玩验收。

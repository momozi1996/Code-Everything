---
id: gpt6-astra-arcade-magnet
title: "磁力双星合作收星"
model: "GPT-6 Astra"
author: "火山哥️ @huoshan007"
source: "https://x.com/huoshan007/status/2102703772128489903"
published_at: "2026-09-23T10:17:00+00:00"
contentLicense: CC-BY-NC-4.0
---

# 磁力双星合作收星

- **模型**：GPT-6 Astra
- **作者**：火山哥️ @huoshan007
- **原帖**：https://x.com/huoshan007/status/2102703772128489903
- **分类**：游戏
- **code2 标签**：code2game, code2canvas, code2deck
- **许可**：CC-BY-NC-4.0（默认许可：署名-非商业使用（CC BY-NC 4.0）。本条内容为第三方原作者作品，若原作者另有明确声明，以原作者声明为准。如需下架请提 Issue，即刻移除。）

## Prompt

```
请制作原创双人合作小游戏《磁力双星》，纯 JavaScript ES Module + Canvas 2D，可在浏览器本地运行，无外部图片、字体、账号或付费依赖。

画面 960×600，深蓝紫宇宙背景，柔和的微型悬浮岛、细网格地面、带阴影的青蓝/粉色小磁铁角色。角色要有眼睛、微笑、腮红、弹性移动和磁铁形天线。两个角色用发光软绳连接，画面持续运动，不能做成 PPT。巡游彗星用原创圆润石头造型，星星也有小表情。

一局 75 秒。两位玩家各自站上同色圆台，同时停留累计 1.2 秒才能解锁中央星星；未同时站稳时，充能缓慢衰退。每次收星切换下一组机关位置，使用八种安全布局并循环。每八颗星点亮一座星系，75 秒内尽量多收集，时间到才结束。

移动速度约 177 像素/秒，归一化对角线输入；两人间有约 310 像素磁力绳约束。星星解锁后靠近 34 像素自动收集，互动可吸取 110 像素内的星星。互动同时给本人 1.05 秒护盾，冷却 3.6 秒。三个持续巡游的彗星具有真实碰撞，撞退角色、最多扣本人 5 分，随后有 1.8 秒受击保护；护盾期间不受击。成功收星给收集者 100 分、帮忙开机关的搭档 50 分。

P1：WASD，F/G 护盾吸星；P2：方向键，K/L 护盾吸星。提供手机触控方向键与操作键，以及单人+机器人、同屏双人、明确标注的自动展示模式。机器人必须通过普通移动和动作输入走到自己的圆台，等待配合，收取解锁星星，不可修改位置或分数作弊。

引擎 export meta 和 createGame({width,height,seed,sound,end})；返回 update(dt,inputs)、draw(ctx)、bot(index)、getState()。暂停重开在宿主实现；固定种子可复现，75 秒结算只触发一次。可选局域网 Node 房间码服务，使同一 Wi-Fi 手机成为真实独立控制器，不宣称已有公网联机。

测试必须包含：两人独立移动、磁力绳约束、单人踩台不能解锁、两人同步解锁、收星只计分一次、护盾保护与冷却、真实碰撞、机器人多轮合作收星、75 秒定时结束和确定性。交付完整源码、启动方式、规则说明与浏览器 QA 截图。
```

## 相关链接

- https://github.com/huoshantao7-hub/party-pocket-arcade
- https://raw.githubusercontent.com/huoshantao7-hub/party-pocket-arcade/1d631426532c498b4a42e25e2b68230044a03dc1/docs/magnet.md
- https://raw.githubusercontent.com/huoshantao7-hub/party-pocket-arcade/1d631426532c498b4a42e25e2b68230044a03dc1/assets/magnet.jpg

## 原始媒体（指向原作者 CDN，不在本仓库托管）

- https://raw.githubusercontent.com/huoshantao7-hub/party-pocket-arcade/1d631426532c498b4a42e25e2b68230044a03dc1/assets/magnet.jpg

## 备注

作者仓库标注“复现提示词”，不是逐轮原始聊天记录；按作者公开复现版本原样收录。6 款不同任务来自同一个 X 帖和同一仓库，不算6个独立来源。运行成品需 Node.js 20+；同 Wi-Fi 手机手柄仍未经过实体手机跨网络验证。源码 MIT；不以作者描述替代本次试玩验收。

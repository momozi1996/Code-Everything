# website/ — Frontier 浏览版站点源码

这是 code-everything 的**在线浏览版**完整源码：一个零依赖的纯静态站点
（HTML + CSS + 原生 JS），数据通过 `data/*.js`（`window.XXX = {...}`）
在浏览器端加载。

## 本地运行

```bash
cd website
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 页面一览

| 文件 | 页面 |
|---|---|
| `index.html` | 主案例库（739 条，多模型） |
| `code2video.html` | Code2Video 合集 |
| `game-prompts.html` | 手游反推提示词 |
| `problems.html` | 世界难题集 |
| `astra-prompts.html` | Astra 提示词 |
| `opus-video-prompts.html` | 向阳乔木视频提示词 |
| `goodcase.html` | GoodCase 广场 |
| `github-projects.html` | 完整 GitHub 项目索引 |

## 关于媒体资源

出于**版权与体积**的考虑，预览图（约 739 张）与预览视频（约 456 个）
**不在本仓库中**（见根目录 NOTICE.md）。数据中保留了指向原作者 CDN 的
原始链接（`mediaSources` 字段）；页面中指向 `assets/images/` 等本地路径的
预览会 404，这不影响其他功能。

如果你 fork 本仓库自托管，请自行准备预览图并同样遵守原作者的权利声明。

## 数据同步

`website/data/*.js` 由仓库根目录 `scripts/export_from_site.py` 的上游
（维护者私有整理文档，不公开）生成。修改数据请改 `data/*.jsonl` 的源头，不要手改
`website/data/*.js`。

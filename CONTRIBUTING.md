# 贡献指南

感谢你愿意为 code-everything 添砖加瓦！

## 你可以贡献什么

1. **提交新案例** — 你在 X 上看到的优秀 code-gen 案例（游戏 / 3D / 前端 / 视频…）
2. **补全 Prompt** — 主库中仍有 426 条案例 `promptStatus=unavailable`，
   如果你找到原帖中的 Prompt，欢迎补全
3. **修正信息** — 署名错误、链接失效、许可标注错误等
4. **改进工具** — `scripts/` 下的导出与校验脚本、数据 schema

## 提交新案例（推荐方式）

开一个 Issue，选择「**提交新案例**」模板，填写：

- 原帖链接（必须，X/Twitter 链接）
- 原作者（昵称 + @handle）
- 模型与版本（如 Claude Opus 5.5 / GPT-6 Astra）
- 原始 Prompt（如有，请逐字粘贴，不要改写）
- 在线 Demo 链接（如有）

维护者会把它规范化为 JSONL 条目并合并。

## 直接提 PR（进阶）

1. Fork 本仓库
2. 向对应的 `data/*.jsonl` 追加一行 JSON（格式见 `schemas/`），
   并运行导出脚本生成对应的 `cases/` 页面：

   ```bash
   python3 scripts/export_from_site.py --mirror <本地镜像> --out .
   python3 scripts/validate.py   # 必须通过
   ```

3. 每条数据**必须**包含 `attribution`（创作者 + 原帖链接）与
   `contentLicense` 字段。不确定许可时，保持默认 `CC-BY-NC-4.0`。
4. 提交 PR，CI 会自动运行校验。

## 几条硬性规则

- ❌ 不收录原作者已删除或明确表示不希望传播的内容
- ❌ 不改写他人 Prompt 后冒充原文（转写/节选请在 `promptStatus` 标注）
- ❌ 不上托管他人的图片/视频二进制文件到本仓库
- ✅ 署名与出处链接是每条数据的必填项

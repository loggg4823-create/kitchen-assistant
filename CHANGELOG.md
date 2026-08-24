# 更新日志

时间倒序。格式：`日期 - 类别 - 一句话`。

## 2026-08-24

- **修复** - manifest `start_url` 指向不存在的 `/kitchen-assistant/`（手机主屏图标打不开），改为 `./`；SW 缓存升 v3
- **新增** - 开火后节奏记忆锚点：详情页预演头下显示开火后步骤节点串（备料步 `prep` 标记过滤，无火菜不显示）
- **变更** - 部署到 GitHub Pages（公开仓库 `kitchen-assistant`，免费 Pages），手机端真离线生效；本地服务器降级为开发预览

## 2026-08-22

- **新增** - `knowledge.js`：9 原理卡（去腥/火候三档/熟没熟/复热/生熟比/涉油安全/活物先麻醉/味道验收三问/口感目标）+ 12 食材卡（新鲜度/储存/预处理/生熟比/简单做法）
- **新增** - `recipes.js`：白灼虾、蒸水蛋改造为「状态优先+权威口径」样板（蛋壳量水法）；新增宫保鸡丁（四关模板）、农家小炒肉、鱼香肉丝、虾仁蒸鸡蛋+蛤蜊蒸蛋变体
- **变更** - `index.html` 重写：三 tab（菜谱/食材/原理）、30 秒预演头、涉油安全卡、权威口径、改造版、记录/flag、双向联动
- **变更** - `sw.js` → v2（加入 knowledge.js）
- **修复** - 启动脚本 + BOM 修复（`start-server.ps1` 必须 UTF-8 with BOM）
- **备份** - `C:\Users\log\Desktop\AI\backup\kitchen-assistant-20260822-131415`

> 更早历史：项目由 shuizhucai（Flutter）演进为单文件 HTML PWA，早期开发计划见 shuizhucai 目录 `kitchen_assistant_plan.md`。

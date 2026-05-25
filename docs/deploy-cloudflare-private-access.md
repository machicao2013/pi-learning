# Cloudflare Pages 私有访问配置

本项目不使用 Wrangler Direct Upload。推荐使用 Cloudflare Pages 的 GitHub 集成：Cloudflare 连接 GitHub 仓库后，每次 `main` 分支更新会自动安装依赖、构建 VitePress 并发布静态站点。

> 注意：不要选择 Cloudflare Workers 的 `wrangler deploy` 自动配置。Workers 静态资产上传会走 Wrangler API，如果项目目标只是文档站，应该使用 Pages 的 GitHub 集成。

## GitHub Actions

仓库只保留 `CI` 工作流，用来在 pull request 和 `main` 推送时做构建校验：

```bash
npm ci
npm run build
```

## Cloudflare Pages GitHub 集成

在 Cloudflare Dashboard 中创建 Pages 项目：

1. 进入 `Workers & Pages`。
2. 选择 `Create application -> Pages -> Connect to Git`。
3. 选择 GitHub 仓库：

```text
machicao2013/pi-learning
```

4. 选择生产分支：

```text
main
```

5. 配置构建：

| 字段 | 值 |
| --- | --- |
| Framework preset | VitePress 或 None |
| Build command | `npm ci && npm run build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | 留空 |
| Node.js version | `22` |

保存后，Cloudflare 会从 GitHub 拉取代码并构建发布。

如果 Cloudflare 当前项目日志里出现 `wrangler deploy`、`workers/scripts/.../assets-upload-session` 或 `wrangler.jsonc` 相关内容，说明它创建成了 Workers 项目或沿用了 Workers 自动配置。请改用 Pages 项目，或把构建命令改成 `npm ci && npm run build`，输出目录改成 `docs/.vitepress/dist`。

## 私有访问

私有访问建议用 Cloudflare Zero Trust Access 保护 Pages 域名：

1. 进入 Cloudflare Dashboard。
2. 打开 `Zero Trust -> Access -> Applications`。
3. 新建 `Self-hosted` application。
4. Application domain 填入 Pages 域名，例如：

```text
pi-learning.pages.dev
```

或你的自定义域名。

5. 添加允许策略，例如只允许指定邮箱、邮箱域名、GitHub 组织或 IdP 用户组。
6. 保存后，用无痕窗口访问域名，确认会先跳转到 Cloudflare Access 登录页。

## 验证清单

- GitHub Actions 的 `CI` 工作流通过。
- Cloudflare Pages 的 GitHub 集成构建通过。
- Pages 域名可以打开站点。
- 无痕窗口访问时，未登录用户会被 Cloudflare Access 拦截。
- 登录允许账号后，可以正常阅读教程页面。

## 官方资料

- Cloudflare Pages GitHub integration: https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/
- Cloudflare Pages build configuration: https://developers.cloudflare.com/pages/configuration/build-configuration/
- Cloudflare Zero Trust Access: https://developers.cloudflare.com/reference-architecture/implementation-guides/zero-trust/

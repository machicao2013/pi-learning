# Cloudflare Pages 私有访问配置

这份项目已经包含 GitHub Actions 自动构建和 Cloudflare Pages 部署配置。代码提交到 `main` 后，部署工作流会构建 VitePress，并通过 Wrangler Direct Upload 上传 `docs/.vitepress/dist`。

## GitHub Secrets

在 GitHub 仓库 `Settings -> Secrets and variables -> Actions` 中添加：

| Secret | 用途 |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | 允许 Wrangler 部署 Pages 的 API token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账号 ID |

API token 至少需要能管理目标 Pages 项目。Cloudflare 官方 Direct Upload CI 文档推荐用 Wrangler 在 CI 中上传预构建静态资源。

## Pages 项目

建议项目名固定为：

```text
pi-learning
```

工作流执行的部署命令是：

```bash
npx wrangler pages deploy docs/.vitepress/dist --project-name=pi-learning --branch=main
```

如果 Cloudflare Pages 项目还不存在，先在 Cloudflare Dashboard 的 Workers & Pages 中创建 Pages 项目，或用 Wrangler 创建并完成第一次部署。

## 私有访问

Cloudflare Pages 的公开访问由 Pages 项目提供，私有访问建议用 Cloudflare Zero Trust Access 保护域名：

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
- `Deploy Cloudflare Pages` 工作流完成部署。
- Pages 域名可以打开站点。
- 无痕窗口访问时，未登录用户会被 Cloudflare Access 拦截。
- 登录允许账号后，可以正常阅读教程页面。

## 官方资料

- Cloudflare Pages Direct Upload with CI: https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/
- Wrangler Pages deploy: https://developers.cloudflare.com/workers/wrangler/commands/pages/
- Cloudflare Pages GitHub integration: https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/
- Cloudflare Zero Trust Access: https://developers.cloudflare.com/reference-architecture/implementation-guides/zero-trust/

# L04. 模型、Provider 与设置

## 学习目标

- 理解 Pi 如何选择模型。
- 区分订阅登录、API key 和自定义 provider。
- 知道哪些设置适合放全局，哪些适合放项目。

## 背景解释

Pi 可以接入订阅 provider，也可以用 API key 方式接入模型。交互模式里可以通过 `/model` 或快捷键切换模型和 thinking level。设置文件可以位于全局目录，也可以位于项目 `.pi/settings.json`，项目级设置适合团队共享。

## 操作步骤

在 Pi 内选择模型：

```text
/model
```

查看可用模型和账号状态：

```bash
pi --list-models
```

项目级设置示例：

```json
{
  "treeFilterMode": "no-tools",
  "reserveTokens": 16384,
  "keepRecentTokens": 20000
}
```

API key 优先级可以理解为：运行时覆盖、已保存凭据、环境变量、自定义解析逻辑。初学者优先使用 `/login` 或环境变量，不要一开始就写自定义 provider。

## 常见坑

- 把个人密钥写进项目设置。项目 `.pi/settings.json` 可以共享，但凭据不应该进入仓库。
- 切换模型后不记录实验条件。比较 agent 表现时，模型、thinking level、工具集合都应固定。
- 过早调 compaction 参数。先观察默认行为，再按长任务需要调整。

## 验收标准

- 你能打开模型选择界面。
- 你知道凭据不应提交到仓库。
- 你能说出全局设置和项目设置的适用场景。

## 下一步

学习 [L05. Sessions、Tree 与分支](/lectures/05-sessions-tree)。

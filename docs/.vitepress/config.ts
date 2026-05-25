import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Learn Pi Agent Harness",
  description: "面向 Pi 的中文学习教程：上手、源码研读与 Harness 工程化",
  cleanUrls: false,
  lastUpdated: true,
  markdown: {
    config(md) {
      const defaultFence =
        md.renderer.rules.fence ||
        ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const language = token.info.trim().split(/\s+/)[0];

        if (language === "mermaid") {
          const encoded = encodeURIComponent(token.content);
          return `<ClientOnly><MermaidDiagram code="${encoded}" /></ClientOnly>`;
        }

        return defaultFence(tokens, idx, options, env, self);
      };
    }
  },
  themeConfig: {
    nav: [
      { text: "讲义", link: "/lectures/" },
      { text: "项目", link: "/projects/" },
      { text: "资料库", link: "/resources/" },
      { text: "技能", link: "/lectures/10-skills" },
      { text: "Pi Docs ↗", link: "https://pi.dev/docs/latest" },
      { text: "GitHub ↗", link: "https://github.com/earendil-works/pi" }
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜索", buttonAriaLabel: "搜索文档" },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "清除",
            backButtonTitle: "关闭",
            noResultsText: "没有结果",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭"
            }
          }
        }
      }
    },
    sidebar: {
      "/lectures/": [
        {
          text: "讲义",
          items: [
            { text: "欢迎", link: "/lectures/" },
            { text: "L01. Pi 是什么", link: "/lectures/01-what-is-pi" },
            { text: "L02. 安装与第一次会话", link: "/lectures/02-install-first-session" },
            { text: "L03. 工具与上下文文件", link: "/lectures/03-tools-context" },
            { text: "L04. 模型、Provider 与设置", link: "/lectures/04-models-settings" },
            { text: "L05. Sessions 与分支", link: "/lectures/05-sessions-tree" },
            { text: "L06. Compaction 与摘要", link: "/lectures/06-compaction" },
            { text: "L07. Monorepo 源码地图", link: "/lectures/07-monorepo-map" },
            { text: "L08. Agent Runtime", link: "/lectures/08-agent-runtime" },
            { text: "L09. Extensions", link: "/lectures/09-extensions" },
            { text: "L10. Skills", link: "/lectures/10-skills" },
            { text: "L11. Prompts 与 Packages", link: "/lectures/11-prompts-packages" },
            { text: "L12. 可靠 Harness", link: "/lectures/12-reliable-harness" }
          ]
        }
      ],
      "/projects/": [
        {
          text: "项目",
          items: [
            { text: "欢迎", link: "/projects/" },
            { text: "P01. 第一次仓库分析", link: "/projects/01-first-repo-analysis" },
            { text: "P02. 添加 AGENTS.md", link: "/projects/02-project-rules" },
            { text: "P03. 长任务管理", link: "/projects/03-long-session" },
            { text: "P04. Prompt 与 Skill", link: "/projects/04-prompt-and-skill" },
            { text: "P05. 小 Extension", link: "/projects/05-small-extension" },
            { text: "P06. 综合 Harness", link: "/projects/06-capstone-harness" }
          ]
        }
      ],
      "/resources/": [
        {
          text: "资料库",
          items: [
            { text: "总览", link: "/resources/" },
            { text: "Pi 上手检查清单", link: "/resources/checklist" },
            { text: "AGENTS.md 模板", link: "/resources/agents-template" },
            { text: "Session 工作流速查", link: "/resources/session-cheatsheet" },
            { text: "Extension 最小骨架", link: "/resources/extension-skeleton" },
            { text: "Skill 最小骨架", link: "/resources/skill-skeleton" },
            { text: "Prompt Template 示例", link: "/resources/prompt-template-pack" },
            { text: "源码地图", link: "/resources/source-map" },
            { text: "术语表", link: "/resources/glossary" }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/earendil-works/pi" }
    ],
    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },
    outline: {
      label: "本页内容",
      level: [2, 3]
    },
    editLink: {
      pattern: "https://github.com/earendil-works/pi",
      text: "查看 Pi 项目"
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short"
      }
    },
    footer: {
      message: "面向 Pi 学习者的非官方中文教程。",
      copyright: "Built for learning. Source facts link to official Pi documentation."
    }
  },
  head: [["meta", { name: "theme-color", content: "#3451b2" }]]
});

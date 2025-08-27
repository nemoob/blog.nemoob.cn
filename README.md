# Forge笔记 - 个人技术博客

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=flat&logo=next.js)](https://nextjs.org)
[![Nextra](https://img.shields.io/badge/Powered%20by-Nextra-blue?style=flat)](https://nextra.site)

一个基于 Next.js 和 Nextra 构建的现代化个人技术博客，专注于分享开发经验、技术心得和实用工具。

## 🌟 项目概述

**Forge笔记** 是一个极简主义设计的技术博客，采用现代化的技术栈构建，提供优秀的阅读体验和性能表现。博客名称"Forge"寓意着在技术的熔炉中不断锻造和成长。

### 🎯 设计理念

- **极简主义** - 简洁清晰的界面设计，专注内容本身
- **响应式设计** - 完美适配桌面、平板和移动设备
- **性能优先** - 基于 Next.js 的静态生成，确保快速加载
- **开发者友好** - 使用 MDX 格式，支持 React 组件和 Markdown

## ✨ 主要功能

### 📝 内容管理
- **技术文章** - 支持 MDX 格式的技术博客文章
- **项目展示** - 开源项目和个人作品展示
- **资源分享** - 开发工具和学习资源推荐
- **分类管理** - 灵活的内容分类和标签系统

### 🎨 用户体验
- **现代化UI** - 简洁优雅的界面设计
- **深色模式** - 支持明暗主题切换
- **搜索功能** - 全站内容搜索
- **响应式布局** - 自适应各种屏幕尺寸

### 🚀 技术特性
- **静态生成** - 基于 Next.js 的 SSG，SEO 友好
- **组件化** - 可复用的 React 组件
- **类型安全** - TypeScript 支持
- **性能优化** - 自动代码分割和图片优化

## 🛠️ 技术栈

- **框架**: [Next.js 14](https://nextjs.org/) - React 全栈框架
- **文档引擎**: [Nextra 2.13](https://nextra.site/) - Next.js 静态站点生成器
- **样式**: CSS-in-JS + 响应式设计
- **内容格式**: MDX (Markdown + JSX)
- **部署**: [Vercel](https://vercel.com/) - 无服务器部署平台
- **版本控制**: Git + GitHub

## 📦 安装步骤

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器
- Git 版本控制工具

### 克隆项目

```bash
# 克隆仓库
git clone https://github.com/nemoob/blog.nemoob.cn.git

# 进入项目目录
cd blog.nemoob.cn
```

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 启动开发服务器

```bash
# 启动开发模式
npm run dev

# 或使用 yarn
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看博客。

## 🚀 使用方法

### 📝 添加新文章

1. 在 `pages/posts/` 目录下创建新的 `.mdx` 文件
2. 添加文章元数据（Front Matter）：

```markdown
---
title: 文章标题
date: 2024-01-27
description: 文章描述
author: 作者名称
tags: [标签1, 标签2]
---

# 文章内容

这里是文章正文...
```

3. 更新 `pages/posts/_meta.json` 文件添加文章索引

### 🛠️ 添加工具资源

编辑 `data/tools.mdx` 文件，按照以下格式添加新工具：

```javascript
export const toolsData = {
  developmentTools: [
    {
      name: "工具名称",
      desc: "工具描述",
      url: "https://tool-url.com"
    }
  ]
};
```

### 🚀 添加项目展示

编辑 `pages/projects.mdx` 文件，添加新的项目卡片组件。

### 🎨 自定义主题

修改 `theme.config.jsx` 文件来自定义博客的主题配置，包括：

- 网站标题和描述
- 导航菜单
- 页脚信息
- 社交媒体链接

## 📁 项目结构

```
blog.nemoob.cn/
├── pages/                  # 页面文件
│   ├── index.mdx          # 首页
│   ├── posts.mdx          # 文章列表页
│   ├── projects.mdx       # 项目展示页
│   ├── resources.mdx      # 资源分享页
│   └── posts/             # 文章目录
│       └── *.mdx          # 具体文章
├── data/                  # 数据文件
│   └── tools.mdx          # 工具配置数据
├── public/                # 静态资源
│   ├── avatar.jpg         # 头像图片
│   └── avatar.svg         # SVG头像
├── theme.config.jsx       # Nextra主题配置
├── next.config.js         # Next.js配置
├── package.json           # 项目依赖
└── README.md              # 项目文档
```

## 🚀 部署指南

### Vercel 部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 中导入项目
3. Vercel 会自动检测 Next.js 项目并进行部署
4. 每次推送到主分支都会自动触发重新部署

### 手动部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```

## ⚠️ 注意事项

### 开发环境

- 确保 Node.js 版本 >= 18.0
- 建议使用 npm 或 yarn 的最新稳定版本
- 开发时请保持依赖版本的一致性

### 内容创作

- MDX 文件必须包含正确的 Front Matter
- 图片资源建议放在 `public/` 目录下
- 文章链接使用相对路径
- 代码块请指定语言以获得语法高亮

### 性能优化

- 图片建议使用 WebP 格式
- 避免在 MDX 中使用过大的内联样式
- 定期更新依赖包以获得最新的性能优化

### 部署相关

- 推送到 GitHub 前请确保本地构建成功
- Vercel 部署失败时检查构建日志
- 自定义域名需要在 Vercel 中配置 DNS

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

---

⭐ 如果这个项目对您有帮助，请给个 Star 支持一下！

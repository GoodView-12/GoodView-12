# 吉辰良景的博客

基于 [Astro](https://astro.build/) 的个人博客，支持简体中文、繁體中文和 English。

## 在线地址

- 博客首页：<https://goodview-12.github.io/blog/>

## 功能

- 查看博客文章
- 查找项目

## 目录结构

```text
goodview-blog/
├── public/
│   ├── images/            # 压缩后的头像、头图、封面
│   ├── favicon.ico
│   └── favicon.svg
├── scripts/
│   └── optimize-images.mjs
├── src/
│   ├── assets/            # 字体与文章占位图
│   ├── components/        # 导航、页脚、卡片、目录、评论等
│   ├── content/
│   │   ├── blog/
│   │   └── projects/
│   ├── layouts/Layout.astro
│   ├── pages/             # 默认语言页面 + [locale] 多语言页面
│   ├── views/             # 各页面共享视图
│   ├── styles/global.css
│   ├── consts.ts          # 图片、导航、社交链接、Giscus 配置
│   └── i8n.ts             # 三语言文案与 base-aware 路由工具
├── astro.config.mjs
└── package.json
```

## 内容管理

- 博客文章：`src/content/blog/*.md` 或 `*.mdx`
- 项目：`src/content/projects/*.md` 或 `*.mdx`

文章 frontmatter：

```yaml
title: '文章标题'
description: '文章简介，会显示在卡片上'
pubDate: '2026-02-18'
updatedDate: '2026-02-20' # 可选
tags: ['Astro', '折腾']
cover: '/images/cover-blog.webp'
```

项目额外支持：

```yaml
status: 'doing' # idea / doing / done / archived
demo: 'https://example.com'
repo: 'https://github.com/your-name/your-repo'
```

## 文章锚点与目录

- Markdown 的 `##`、`###` 标题会自动生成 `id`，文章页左侧会自动出现目录。
- 直接访问 `https://goodview-12.github.io/blog/blog/rebuild/#这次改了什么` 即可跳到对应小节。
- 鼠标悬停在标题右侧会出现 `#` 锚点，点击就能复制/分享该小节的地址。
- 目录会随滚动高亮当前小节；窄屏下目录折叠在正文上方。

## 评论

评论组件位于 `src/components/Comments.astro`，有两种模式：

1. **Giscus（推荐，所有访客共享）**
   - 在仓库 `Settings → General → Features` 中开启 Discussions。
   - 打开 <https://giscus.app>，安装 Giscus App，选择仓库与 `Comments` 分类。
   - 把生成的 `data-repo-id` 和 `data-category-id` 填入 `src/consts.ts` 的 `GISCUS_CONFIG`。
   - 评论会按页面路径映射到 GitHub Discussions。
2. **本地评论模式（默认兜底）**
   - 未填写 Giscus ID 时自动启用。
   - 评论保存在浏览器 `localStorage` 中，仅当前设备可见，适合本地预览和演示。

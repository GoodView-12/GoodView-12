# 吉辰良景的博客

这是一个基于 [Astro](https://astro.build/) 搭建的个人网站，使用 Markdown 管理博客与项目内容，并支持简体中文、繁體中文和 English 三种语言。

## 访问本博客

网址：[goodview-github.io](https://goodview-12.github.io)  
或者  
[跳转到博客页面](https://goodview-12.github.io/blog)　[跳转到项目集页面](https://goodview-12.github.io/projects)  
### 项目集在线工具链接

角色雷达图制作工具：[https://goodview-12.github.io/tools/](https://goodview-12.github.io/tools/)

## 语言版本

| 语言 | 路径 |
| --- | --- |
| 简体中文（默认） | `/`、`/blog`、`/projects`、`/about` |
| 繁體中文 | `/zh-tw/`、`/zh-tw/blog`、`/zh-tw/projects`、`/zh-tw/about` |
| English | `/en/`、`/en/blog`、`/en/projects`、`/en/about` |

右上角的语言切换会保留当前页面。文章和项目的 Markdown 内容不随语言变化。

## 页面说明

| 路径 | 说明 |
| --- | --- |
| `/` | 首页：大头图、动态海浪分界线、头像与联系方式、非对称功能卡片 |
| `/blog` | 博客列表：按标签筛选，卡片展示封面、标题和简介 |
| `/projects` | 项目集：与博客一致的标签筛选，点击可查看项目详情 |
| `/about` | 关于页 |

网站没有 404 页面，也没有 RSS。所有界面文案（导航、按钮、提示等）都集中在 `src/i8n.ts`。

## 本地运行

```bash
npm install
npm run dev
```

构建：`npm run build`，预览构建结果：`npm run preview`。

## 内容管理

- 博客文章：`src/content/blog/*.md` 或 `*.mdx`
- 项目：`src/content/projects/*.md`

当前各保留了一个示例，照着新增文件即可。

文章 frontmatter：

```yaml
title: '文章标题'
description: '文章简介，会显示在卡片上'
pubDate: '2026-02-18'
tags: ['Astro', '折腾']
cover: 'https://example.com/cover.jpg'
updatedDate: '2026-02-20' # 可选
```

项目 frontmatter 额外支持：

```yaml
status: 'doing'  # idea / doing / done / archived
demo: 'https://example.com'
repo: 'https://github.com/your-name/your-repo'
```

## 多语言文案

`src/i8n.ts` 中包含三套字典和语言路由工具：

- `t[locale]`：当前语言的全部界面文案
- `LOCALE_PREFIX` / `LOCALE_PARAM`：语言前缀与路由参数
- `localizePath(path, locale)`：把任意路径转换成目标语言路径
- `getLocaleFromPath(pathname)`：从当前路径判断语言

修改文案时只需要改这个文件，不需要动页面组件。

## 替换图片

首页头图、头像、默认封面和社交链接都集中在 `src/consts.ts`，每个占位链接旁都有 `TODO` 注释。
文章和项目的封面直接写在各自 Markdown 的 `cover` 字段里，同样带有注释。

## 文件结构

```text
goodview-blog/
├── public/
├── src/
│   ├── assets/
│   ├── components/       # 导航、页脚、卡片、标签筛选、海浪分界等
│   ├── content/
│   │   ├── blog/         # 博客文章
│   │   └── projects/     # 项目 Markdown
│   ├── layouts/          # Layout 全局布局
│   ├── pages/            # 默认语言页面 + [locale] 多语言页面
│   ├── views/            # 各页面共享视图
│   ├── styles/           # 全局样式与设计变量
│   ├── consts.ts         # 图片、导航与社交链接
│   └── i8n.ts            # 三语言文案与路由工具
├── astro.config.mjs
├── package.json
└── README.md
```

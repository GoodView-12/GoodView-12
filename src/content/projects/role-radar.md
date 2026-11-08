---
title: '角色雷达图制作工具'
description: '给跑团和 OC 用的小工具，输入数值就能生成一张好看的角色六维图。'
pubDate: '2025-11-02'
tags: ['工具', '可视化']
status: 'done'
# TODO: 替换为你的项目封面链接
cover: 'https://picsum.photos/seed/goodview-project-1/1200/675'
demo: 'https://goodview-12.github.io/tools/'
repo: 'https://github.com/goodview-12'
---

做跑团角色卡的时候，总觉得手动画六维图太麻烦，于是写了这个小工具。

## 能做什么

- 输入六项数值，实时生成雷达图
- 支持自定义角色名、颜色和背景
- 一键导出 PNG，直接贴进角色卡

## 技术细节

整个工具只有一个页面，用原生 Canvas 绘制，没有后端。数据只保存在浏览器本地，不会上传。

## 后续计划

想加上“多角色对比”和“预设模板”，不过要看最近有没有空。

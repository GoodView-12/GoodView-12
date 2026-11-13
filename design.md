# 设计规范（Design System）

> 本文件描述「吉辰良景的博客」当前的设计语言。所有颜色、圆角、字体等均以 `src/styles/global.css` 中的 CSS 变量为唯一来源，组件里不要硬编码色值。

- 最后更新：2026-11-13
- 适用范围：全站（Astro + 原生 CSS，无 UI 框架、无 Tailwind）

---

## 1. 设计原则

1. **扁平优先（Flat first）**
   - 不使用新拟物（Neumorphism）、外发光、内阴影、双层高光等伪 3D 手法。
   - 界面层次只通过「纯色面 + 1px 描边 + 留白」表达。
   - 禁止卡片旋转、悬浮抬升、阴影放大等立体动效。
2. **清爽（Airy & crisp）**
   - 浅色主题以冷白 / 淡蓝灰为底，主色为清透的蓝，辅色为青绿与琥珀。
   - 大面积留白，正文行高 1.75，卡片间距 20–22px。
3. **双主题对等**
   - 浅色与深色都使用同一套语义变量，任何新增颜色必须同时补齐两个主题。
4. **内容优先**
   - 装饰元素（星形、波浪、虚线圆环）只做点缀，颜色一律来自辅助色或边框色，不抢正文。

---

## 2. 色彩系统

### 2.1 语义令牌

| 变量 | 用途 | 浅色 | 深色 |
| --- | --- | --- | --- |
| `--paper` | 页面底色 | `#f5f8fc` | `#0e131a` |
| `--paper-soft` | 次级底色 / 页脚 / 提示块 | `#fbfcfe` | `#131a23` |
| `--card` | 卡片、输入框、浮层表面 | `#ffffff` | `#161d27` |
| `--surface-muted` | 悬停底色、标签底、统计块 | `#edf2f8` | `#1b2430` |
| `--header-surface` | 滚动后的半透明导航底 | `rgba(255,255,255,.88)` | `rgba(14,19,26,.88)` |
| `--ink` | 主文字 / 深色实心块 | `#101828` | `#e8eef7` |
| `--ink-soft` | 正文、次要文字 | `#475467` | `#a8b5c6` |
| `--ink-faint` | 元信息、占位符 | `#667085` | `#7e8da1` |
| `--line` | 常规描边、分隔线 | `#e3e9f2` | `#253041` |
| `--line-strong` | 悬停描边、强调分隔 | `#cbd5e1` | `#33415a` |
| `--accent` | 主色：链接、主按钮、强调 | `#2f6feb` | `#6ea2ff` |
| `--accent-ink` | 主色文字的深/亮版本 | `#1d4ed8` | `#a8c6ff` |
| `--accent-soft` | 主色浅底 | `#e8f0fe` | `#1a2a44` |
| `--accent-2` | 辅色一：项目、目录高亮 | `#0f9b8e` | `#4bc8bb` |
| `--accent-2-ink` | 辅色一文字 | `#0b7a70` | `#95ded7` |
| `--accent-2-soft` | 辅色一浅底 | `#e6f6f4` | `#12302e` |
| `--accent-3` | 辅色二：完成状态、统计 | `#2e9e5b` | `#58c07f` |
| `--accent-3-ink` | 辅色二文字 | `#1c7a44` | `#9ee0b4` |
| `--accent-3-soft` | 辅色二浅底 | `#e7f6ed` | `#132e1f` |
| `--accent-4` | 辅色三：时间、进行中 | `#c97a16` | `#e0a458` |
| `--accent-4-ink` | 辅色三文字 | `#8f570f` | `#f0cd97` |
| `--accent-4-soft` | 辅色三浅底 | `#fdf1e3` | `#2f2416` |
| `--on-accent` | 主色实心上的文字 | `#ffffff` | `#0a1220` |
| `--on-ink` | `--ink` 实心上的文字 | `#ffffff` | `#0b1220` |
| `--code-surface` | 代码块底色 | `#1b2430` | `#0b1119` |
| `--code-ink` | 代码块文字 | `#e8eef7` | `#dbe5f2` |
| `--focus-ring` | 键盘焦点外圈 | `rgba(47,111,235,.4)` | `rgba(110,162,255,.5)` |
| `--tint-1` / `--tint-2` | 页面顶部极淡的径向色晕 | 蓝 6% / 青 5% | 蓝 8% / 青 5% |

> 对比度：`--ink` / `--ink-soft` 在对应底色上均 ≥ 4.5:1；主色按钮使用 `--on-accent` 保证 AA。

### 2.2 使用约定

- 文字只用 `--ink`、`--ink-soft`、`--ink-faint` 三级。
- 面只用 `--paper`、`--paper-soft`、`--card`、`--surface-muted` 四级。
- 强调色只用于「交互 / 状态 / 小面积点缀」，不做大面积背景。
- 深色主题下强调色会整体提亮，**不要**假设 `--accent` 永远是深蓝。

---

## 3. 字体与排版

| 项目 | 规范 |
| --- | --- |
| 正文字体 | `--font-body`：Atkinson（本地 woff）+ 苹方 / HarmonyOS Sans / 微软雅黑 |
| 标题字体 | `--font-display`：中文系统字体优先，西文回落到 Atkinson |
| 正文大小 | `16px`，行高 `1.75` |
| 文章正文 | `1.02rem`，行高 `1.95` |
| 页面标题 | `clamp(2.2rem, 5vw, 3.4rem)` |
| 首页主视觉标题 | `clamp(3rem, 8.5vw, 6.4rem)`，字距 `0.1em` |
| 区块小标签（eyebrow） | `0.75rem`，字重 700，字距 `0.28em`，全大写 |
| 元信息 | `0.74–0.82rem`，颜色 `--ink-faint` |

排版细节：

- 标题 `line-height: 1.25`，`letter-spacing: -0.01em`。
- 文章 `h2` 左侧 4px 主色竖线，`h3` 无装饰，`h2/h3` 的 `scroll-margin-top: 120px`。
- 链接在正文里使用主色 + 下划线，`text-underline-offset: 3px`。

---

## 4. 形状、边框与阴影

| 令牌 | 值 | 用途 |
| --- | --- | --- |
| `--radius-lg` | `20px` | 大卡片、封面、评论容器 |
| `--radius` | `14px` | 普通卡片、导航岛、目录 |
| `--radius-sm` | `10px` | 标签、输入框、小按钮 |
| 胶囊 | `999px` | 按钮、chip、语言切换 |

- **描边**：所有卡片 / 容器默认 `1px solid var(--line)`；悬停改为 `--line-strong`；强调态用 `--accent`。
- **阴影**：全站仅保留焦点外圈（`outline` / `--focus-ring`），**不存在** `box-shadow` 装饰阴影。
- **分隔线**：正文区块用 `1px dashed var(--line)`，列表内用 `1px solid var(--line)`。
- **卡片分隔**：首页 Bento 卡片不使用彩色顶条，统一 1px 描边，靠卡内小标签（PROFILE / LATEST POST…）与留白区分内容类型。

---

## 5. 组件规范

### 5.1 导航（Header）

- 结构：`品牌名 + 主导航 + 主题切换 + 语言切换`。
- 容器：`--card` 面 + 1px 描边 + `--radius`，最大宽度 1040px，两侧留白。
- 滚动后：背景切换为 `--header-surface` 并加 `backdrop-filter: blur(12px)`，描边变 `--line-strong`。
- 导航项：默认 `--ink-soft`；悬停 `--surface-muted`；当前页 `--accent-soft` 底 + `--accent-ink` 字。
- 首页（`headerOverlay`）：导航改为 `position: fixed`，直接悬浮在头图之上，导航岛使用 `--header-surface` + 毛玻璃；Hero 顶部留白 150px（≤720px 120px、≤560px 152px）避免内容被遮挡。
- 移动端：≤560px 时品牌与语言/主题在首行，导航独立换行居中。

### 5.2 主题切换按钮

- 位置：语言切换左侧，34×34（移动端 30×30），`--radius-sm`，1px 描边。
- 图标：内联 SVG，浅色显示太阳、深色显示月亮，仅 `1.7px` 描边、无填充。
- 无障碍：`aria-pressed` 表示当前是否深色；`aria-label` / `title` 取 i18n 文案 `a11y.themeToggle`。

### 5.3 按钮

| 类名 | 面 | 文字 | 描边 | 悬停 |
| --- | --- | --- | --- | --- |
| `.btn--primary` | `--accent` | `--on-accent` | `--accent` | 背景/描边转 `--accent-ink` |
| `.btn--ghost` | `--card` | `--ink` | `--line` | `--surface-muted` + `--line-strong` |
| `.btn--outline` | 透明 | `--ink` | `--line-strong` | `--accent-soft` + `--accent` |

- 圆角胶囊、`padding: 11px 22px`、字重 600；只过渡颜色 / 背景 / 描边，**没有位移和阴影**。
- 首页 Hero 因为背景是深色照片，主按钮固定为白底深字、次按钮为白色 8% 透明底 + 44% 白描边。

### 5.4 卡片

- 文章卡（`PostCard`）、项目卡（`ProjectCard`）、通用 `.card`：
  - `--card` 面、1px 描边、`--radius`、无阴影；
  - 悬停只改描边为 `--line-strong`（标题可转主色）；
  - 图片区域与内容之间用 1px 实线分隔，图片不再做缩放 / 饱和度动画。
- 项目状态标签为纯色小胶囊：进行中=琥珀、已完成=绿、想法=主色、已归档=灰，文字色用对应 `*-ink`。

### 5.5 标签与筛选

- 标签 chip：`--card` 底 + 1px 描边，悬停 `--accent-soft`，选中为 `--ink` 实心 + `--on-ink` 文字。
- 文章内 `#tag`：`--accent-soft` 底 + `--accent-ink` 字，悬停主色实心。

### 5.6 目录（TOC）

- 桌面：`--card` 面 + 1px 描边 + `--radius`，`position: sticky; top: 118px`。
- 当前小节：左侧 2px 主色竖线 + `--accent-soft` 底 + `--accent-ink` 字。
- ≤1080px 折叠为虚线描边的浅色块。

### 5.7 表单（评论）

- 输入框：`--card` 面 + 1px `--line` + `--radius-sm`，`padding: 11px 14px`。
- 聚焦：描边转 `--accent`，外加 `2px` `--focus-ring` 外圈。
- 评论项：`--paper-soft` 面 + 1px 描边 + `--radius`；头像块为 `--accent-soft` 底 + `--accent-ink` 字。
- Giscus 模式跟随站内主题：初始化读 `html[data-theme]`，切换时通过 `postMessage` 同步 iframe。

### 5.8 首页 Bento

- 6 列网格，行高 100px，间距 20px；≤1040px 转 2 列，≤620px 单列。
- 卡片**不再旋转、不再有径向光斑、不再有顶部彩条**，全部为纯色面 + 1px 描边。
- 卡片右上角的 ✦ / ✧ 装饰点已移除；仅保留 Hero 主视觉与工具卡内的大号星形点缀。
- 头像：1px 描边 + `--radius-lg`，取消浮动动画与投影。
- 统计块 / 推荐项目条目：`--surface-muted` 或透明底，悬停只换底色与描边。
- 个人卡的联系方式为「品牌图标 + 文字」，图标 16px，默认主色，悬停转 `--accent-ink`。

### 5.9 页脚

- 极简结构：左侧「吉辰良景」站名（链接回首页），右侧「↑ 回到顶部」。
- 不再包含导航、社交链接与版权行；底色 `--paper-soft`，顶部 1px 描边。
- ≤520px 纵向排列、左对齐。

---

## 6. 深色模式

### 6.1 触发方式

- `html[data-theme='dark']` / `html[data-theme='light']`，同时设置 `color-scheme` 让原生滚动条、表单控件跟随。
- 首次访问：读取 `localStorage['goodview-blog:theme']`；没有记录则跟随 `prefers-color-scheme`。
- 用户点击切换后写入 localStorage，之后不再自动跟随系统。
- 没有显式选择时，系统主题变化会实时同步。

### 6.2 防闪烁

`src/components/BaseHead.astro` 末尾有一段**同步内联脚本**，在首次绘制前写入 `data-theme`，避免深色用户看到白屏闪烁。

### 6.3 主题工具模块

`src/scripts/theme.ts` 导出：

- `getStoredTheme()` / `getSystemTheme()` / `getActiveTheme()`
- `setTheme(theme, persist?)`
- `toggleTheme()`
- `watchSystemTheme(callback)`

任何需要读写主题的组件都应复用该模块，不要重复实现 localStorage 逻辑。

### 6.4 浏览器 UI

- `BaseHead` 输出两条 `theme-color`（分别带 light / dark 媒体查询）；切换主题时 `setTheme()` 会同步更新。
- Giscus 评论 iframe 通过 MutationObserver 监听 `data-theme` 并切换主题。

---

## 7. 动效

| 场景 | 规范 |
| --- | --- |
| 颜色 / 描边 / 背景 | `0.2s ease` |
| 大区块进出场 | `fadeUp 0.6s cubic-bezier(.2,.8,.2,1)`、`bentoIn 0.7s` |
| 卡片筛选出现 | `cardPop 0.4s` |
| Hero 星点 / 工具卡星形 | `twinkle 3–4s` 无限透明度呼吸 |
| 首页大图 | `heroZoom 22s` 缓慢缩放 |
| 波浪分隔 | 水平平移动画 11–19s |

- 不新增位移式悬停（`translateY` / `scale`）作为主要反馈。
- 全部动效在 `prefers-reduced-motion: reduce` 下降为 0.001ms。

---

## 8. 无障碍

- 全站 `:focus-visible` 使用 `2px solid var(--accent)` + `3px` 偏移。
- 跳过链接（skip-link）使用 `--ink` 实心 + `--on-ink` 文字。
- 主题按钮、语言切换均提供 `aria-label` / `aria-pressed` / `aria-current`。
- 深色主题下强调色提亮、文字提亮，避免低对比。
- 装饰性字符均带 `aria-hidden="true"`。

---

## 9. 维护约定

1. **新增颜色**：先加到 `:root`，再补 `:root[data-theme='dark']`，然后在组件里引用语义变量。
2. **禁止**在 `.astro` 的 `<style>` 中写死浅色值（如 `#fff`、`rgba(255,253,249,…)`），否则深色模式会漏色。
3. **禁止**使用 `box-shadow` 做装饰层次；需要强调时用描边或色块。
4. **禁止**使用 `transform: rotate()`、悬停抬升、内阴影制造「拟物」质感。
5. 新增组件时优先复用 `.card`、`.btn--*`、`.eyebrow`、`.page`、`.container` 等全局类。
6. 主题相关逻辑统一走 `src/scripts/theme.ts`；样式统一走 `src/styles/global.css` 的变量。

---

## 10. 本次改动清单

| 文件 | 改动 |
| --- | --- |
| `src/styles/global.css` | 全新清爽配色 + 深色令牌；删除 `--shadow-*`、`--shadow-rgb`、新拟物按钮；按钮 / 卡片改扁平；圆角收紧 |
| `src/scripts/theme.ts` | 新增主题读写、切换、系统监听工具 |
| `src/components/BaseHead.astro` | 双 `theme-color`；新增防闪烁内联脚本 |
| `src/layouts/Layout.astro` | 新增 `headerOverlay` 开关并透传给 Header |
| `src/components/Header.astro` | 新增 `overlay` 模式：`position: fixed` 浮在头图上，岛屿半透明 + 毛玻璃 |
| `src/components/HeaderLink.astro` | 导航项改为底色 / 文字反馈 |
| `src/components/Footer.astro` | 精简为「站名 + 回到顶部」，移除导航 / 社交链接 / 版权行 |
| `src/components/SocialIcon.astro` | 新增品牌图标组件（Bilibili / 邮箱 / GitHub / Gitee），16px 填充式 SVG |
| `src/components/PostCard.astro` | 卡片去阴影、去图片缩放；箭头改描边圆点 |
| `src/components/ProjectCard.astro` | 卡片去阴影；状态标签改纯色胶囊；操作按钮改描边 |
| `src/components/TagFilter.astro` | chip 改扁平底色，去位移 |
| `src/components/TableOfContents.astro` | 目录容器改描边卡片，去阴影 |
| `src/components/Comments.astro` | 表单 / 评论项去内阴影；Giscus 主题同步 |
| `src/components/WaveDivider.astro` | 波浪渐变色改为蓝 / 青 |
| `src/views/HomeView.astro` | Hero 去文字阴影；删除卡片旋转 / 光斑 / 渐变 / 顶部彩条 / 角落星点 / 头像浮动；联系方式改图标 + 文字；启用浮层导航并调整 Hero 顶部留白 |
| `src/views/ArticleView.astro` | 返回 / 操作按钮改扁平；封面去阴影；代码块改用主题令牌 |
| `src/views/AboutView.astro` | 移除渐变与投影；修复首行多余字符导致的构建错误 |
| `src/views/BlogListView.astro` / `ProjectListView.astro` | 「敬请期待」块底色改令牌 |
| `src/pages/404.astro` | 卡片去阴影、改描边 |
| `src/i8n.ts` | 三语言新增 `a11y.themeToggle` |
| `README.md` | 补充深色模式说明与 `design.md`、`src/scripts/theme.ts` 目录条目 |

---

## 11. 快速自查

- [ ] 浅色 / 深色下都没有发白或发灰的硬编码底色
- [ ] 没有 `box-shadow` 装饰、没有 `rotate()`、没有悬停抬升
- [ ] 主按钮在两种主题下文字都清晰可读
- [ ] 卡片、chip、输入框都使用统一圆角与描边
- [ ] 键盘 Tab 能看到 2px 主色焦点圈
- [ ] 首屏无主题闪烁；刷新后主题保持

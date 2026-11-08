export const LOCALES = ['zh-CN', 'zh-TW', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'zh-CN';
export const ALTERNATE_LOCALES: Locale[] = ['zh-TW', 'en'];

export const LOCALE_PREFIX: Record<Locale, string> = {
	'zh-CN': '',
	'zh-TW': '/zh-tw',
	en: '/en',
};

export const LOCALE_PARAM: Record<Locale, string> = {
	'zh-CN': '',
	'zh-TW': 'zh-tw',
	en: 'en',
};

export const LOCALE_SHORT: Record<Locale, string> = {
	'zh-CN': '简',
	'zh-TW': '繁',
	en: 'EN',
};

export const LOCALE_NAME: Record<Locale, string> = {
	'zh-CN': '简体中文',
	'zh-TW': '繁體中文',
	en: 'English',
};

export const HTML_LANG: Record<Locale, string> = {
	'zh-CN': 'zh-CN',
	'zh-TW': 'zh-Hant',
	en: 'en',
};

export const INTL_LOCALE: Record<Locale, string> = {
	'zh-CN': 'zh-CN',
	'zh-TW': 'zh-TW',
	en: 'en-US',
};

const zhCN = {
	meta: {
		siteName: '吉辰良景',
		siteLatin: 'GOODVIEW',
		logoGlyph: '吉',
		author: 'goodview',
		homeTitle: '吉辰良景 · 首页',
		homeDescription: '吉辰良景的个人网站，记录代码、番剧和生活里的小灵感。',
		blogTitle: '博客 · 吉辰良景',
		blogDescription: '折腾记录、动画笔记和偶尔的碎碎念。',
		projectsTitle: '项目集 · 吉辰良景',
		projectsDescription: '工具、小游戏和一些奇奇怪怪的想法。',
		aboutTitle: '关于 · 吉辰良景',
		aboutDescription: '关于吉辰良景，以及这个网站。',
	},
	a11y: {
		skip: '跳到正文',
		mainNav: '主导航',
		footerNav: '页脚导航',
		langSwitch: '切换语言',
		homeLink: '返回首页',
		online: '在线',
		heroImage: '首页头图',
		avatar: '吉辰良景的头像',
		backToTop: '回到顶部',
	},
	nav: {
		home: '首页',
		blog: '博客',
		projects: '项目集',
	},
	common: {
		all: '全部',
		countArticles: '共 {count} 篇文章',
		countProjects: '共 {count} 个项目',
		latestPost: '最新文章',
		allPosts: '全部文章',
		browse: '逛一圈',
		open: '打开',
		detail: '详情',
		backToBlog: '返回博客',
		backToProjects: '返回项目集',
		updatedOn: '更新于',
		emptyBlog: '还没有文章，去写一篇吧。',
		emptyProjects: '还没有项目，先去挖个坑吧。',
		projectDemo: '在线体验',
		projectRepo: '查看源码',
		projectDemoShort: '在线体验',
		projectRepoShort: '源码',
		status: {
			idea: '想法中',
			doing: '进行中',
			done: '已完成',
			archived: '已归档',
		},
		social: {
			bilibili: 'Bilibili',
			email: '邮箱',
			github: 'GitHub',
			gitee: 'Gitee',
		},
	},
	footer: {
		tagline: '用 Astro 手工搭建，慢慢更新中。',
		rights: '保留所有权利。',
		about: '关于',
	},
	home: {
		heroKicker: "goodview's little universe",
		heroTitle: '吉辰良景',
		heroSub: '代码、番剧，和一点没来由的灵感。',
		heroPrimary: '进入博客',
		heroSecondary: '看看项目',
		scroll: 'SCROLL',
		profileTag: 'PROFILE',
		name: '吉辰良景',
		handle: '@goodview',
		bio: ['前端 / 二次元 / 独立开发', '写点代码，做点小工具，偶尔追番。'],
		blogTag: 'LATEST POST',
		blogFallbackTitle: '还没有文章',
		blogFallbackDesc: '去写下第一篇吧。',
		nowTag: 'NOW',
		nowItems: ['在补《葬送的芙莉莲》', '折腾 Astro 和小工具', '练习画一只像样的猫'],
		projectsTag: 'PROJECTS',
		projectsTitle: (count: number) => `${count} 个做过 / 在做的东西`,
		projectsDesc: '工具、玩具，还有一点点私心。',
		projectsLink: '逛一圈',
		toolTag: 'TOOL',
		toolTitle: ['角色雷达图', '制作工具'],
		toolLink: '打开',
		tagsTag: 'TAGS',
		tagsHint: '文章越多，标签越热闹。',
		noteTag: 'NOTE',
		noteText: '“先把它做出来，再把它做好。”',
		noteSign: '— 写给自己的话',
	},
	blog: {
		eyebrow: 'BLOG',
		title: '博客',
		lead: '折腾记录、动画笔记，还有偶尔冒出来的碎碎念。选一个标签慢慢逛吧。',
		filterLabel: '按标签筛选',
		comingSoon: '更多的文字还在路上。',
	},
	projects: {
		eyebrow: 'PROJECTS',
		title: '项目集',
		lead: '工具、小游戏，还有一些实现到一半的脑洞。点进去看看它们的故事。',
		filterLabel: '按标签筛选',
		comingSoon: '下一个坑正在挖。',
	},
	about: {
		eyebrow: 'ABOUT',
		title: '你好，我是吉辰良景',
		lead: '一个喜欢折腾前端、偶尔追番、偶尔画画的人。这里用来放我的文章、项目和那些没什么用但很开心的小东西。',
		siteHeading: '关于这个网站',
		siteBody: [
			'网站用 Astro 搭建，没有引入前端框架。导航、标签筛选、语言切换和动画都是原生 CSS 与 JavaScript 完成的。',
			'文章和项目分别放在 src/content/blog 与 src/content/projects，写一个 Markdown 文件就算更新。',
		],
		findHeading: '找到我',
	},
	article: {
		eyebrowBlog: 'ARTICLE',
		eyebrowProject: 'PROJECT',
	},
};

export type Dict = typeof zhCN;
export type NavKey = keyof Dict['nav'];
export type SocialKey = keyof Dict['common']['social'];

const zhTW: Dict = {
	meta: {
		siteName: '吉辰良景',
		siteLatin: 'GOODVIEW',
		logoGlyph: '吉',
		author: 'goodview',
		homeTitle: '吉辰良景 · 首頁',
		homeDescription: '吉辰良景的個人網站，記錄程式、動畫和生活裡的小靈感。',
		blogTitle: '部落格 · 吉辰良景',
		blogDescription: '折騰記錄、動畫筆記和偶爾的碎碎念。',
		projectsTitle: '專案集 · 吉辰良景',
		projectsDescription: '工具、小遊戲和一些奇奇怪怪的想法。',
		aboutTitle: '關於 · 吉辰良景',
		aboutDescription: '關於吉辰良景，以及這個網站。',
	},
	a11y: {
		skip: '跳到正文',
		mainNav: '主導覽',
		footerNav: '頁尾導覽',
		langSwitch: '切換語言',
		homeLink: '返回首頁',
		online: '線上',
		heroImage: '首頁頭圖',
		avatar: '吉辰良景的頭像',
		backToTop: '回到頂部',
	},
	nav: {
		home: '首頁',
		blog: '部落格',
		projects: '專案集',
	},
	common: {
		all: '全部',
		countArticles: '共 {count} 篇文章',
		countProjects: '共 {count} 個專案',
		latestPost: '最新文章',
		allPosts: '全部文章',
		browse: '逛一圈',
		open: '打開',
		detail: '詳情',
		backToBlog: '返回部落格',
		backToProjects: '返回專案集',
		updatedOn: '更新於',
		emptyBlog: '還沒有文章，去寫一篇吧。',
		emptyProjects: '還沒有專案，先去挖個坑吧。',
		projectDemo: '線上體驗',
		projectRepo: '查看原始碼',
		projectDemoShort: '線上體驗',
		projectRepoShort: '原始碼',
		status: {
			idea: '想法中',
			doing: '進行中',
			done: '已完成',
			archived: '已封存',
		},
		social: {
			bilibili: 'Bilibili',
			email: '電子郵件',
			github: 'GitHub',
			gitee: 'Gitee',
		},
	},
	footer: {
		tagline: '用 Astro 手工打造，慢慢更新中。',
		rights: '保留所有權利。',
		about: '關於',
	},
	home: {
		heroKicker: "goodview's little universe",
		heroTitle: '吉辰良景',
		heroSub: '程式、動畫，和一點沒來由的靈感。',
		heroPrimary: '進入部落格',
		heroSecondary: '看看專案',
		scroll: 'SCROLL',
		profileTag: 'PROFILE',
		name: '吉辰良景',
		handle: '@goodview',
		bio: ['前端 / 二次元 / 獨立開發', '寫點程式，做點小工具，偶爾追番。'],
		blogTag: 'LATEST POST',
		blogFallbackTitle: '還沒有文章',
		blogFallbackDesc: '去寫下第一篇吧。',
		nowTag: 'NOW',
		nowItems: ['在補《葬送的芙莉蓮》', '折騰 Astro 和小工具', '練習畫一隻像樣的貓'],
		projectsTag: 'PROJECTS',
		projectsTitle: (count: number) => `${count} 個做過 / 在做的東西`,
		projectsDesc: '工具、玩具，還有一點點私心。',
		projectsLink: '逛一圈',
		toolTag: 'TOOL',
		toolTitle: ['角色雷達圖', '製作工具'],
		toolLink: '打開',
		tagsTag: 'TAGS',
		tagsHint: '文章越多，標籤越熱鬧。',
		noteTag: 'NOTE',
		noteText: '「先把它做出來，再把它做好。」',
		noteSign: '— 寫給自己的話',
	},
	blog: {
		eyebrow: 'BLOG',
		title: '部落格',
		lead: '折騰記錄、動畫筆記，還有偶爾冒出來的碎碎念。選一個標籤慢慢逛吧。',
		filterLabel: '依標籤篩選',
		comingSoon: '更多的文字還在路上。',
	},
	projects: {
		eyebrow: 'PROJECTS',
		title: '專案集',
		lead: '工具、小遊戲，還有一些做到一半的腦洞。點進去看看它們的故事。',
		filterLabel: '依標籤篩選',
		comingSoon: '下一個坑正在挖。',
	},
	about: {
		eyebrow: 'ABOUT',
		title: '你好，我是吉辰良景',
		lead: '一個喜歡折騰前端、偶爾追番、偶爾畫畫的人。這裡用來放我的文章、專案和那些沒什麼用但很開心的小東西。',
		siteHeading: '關於這個網站',
		siteBody: [
			'網站用 Astro 搭建，沒有引入前端框架。導覽、標籤篩選、語言切換和動畫都是原生 CSS 與 JavaScript 完成的。',
			'文章和專案分別放在 src/content/blog 與 src/content/projects，寫一個 Markdown 檔案就算更新。',
		],
		findHeading: '找到我',
	},
	article: {
		eyebrowBlog: 'ARTICLE',
		eyebrowProject: 'PROJECT',
	},
};

const en: Dict = {
	meta: {
		siteName: 'Goodview',
		siteLatin: '吉辰良景',
		logoGlyph: 'G',
		author: 'goodview',
		homeTitle: 'Goodview · Home',
		homeDescription: 'The personal site of Goodview: code, anime, and small everyday inspiration.',
		blogTitle: 'Blog · Goodview',
		blogDescription: 'Build logs, animation notes, and the occasional stray thought.',
		projectsTitle: 'Projects · Goodview',
		projectsDescription: 'Tools, tiny games, and a few odd ideas.',
		aboutTitle: 'About · Goodview',
		aboutDescription: 'About Goodview and this website.',
	},
	a11y: {
		skip: 'Skip to content',
		mainNav: 'Main navigation',
		footerNav: 'Footer navigation',
		langSwitch: 'Switch language',
		homeLink: 'Back to home',
		online: 'Online',
		heroImage: 'Hero image',
		avatar: 'Goodview avatar',
		backToTop: 'Back to top',
	},
	nav: {
		home: 'Home',
		blog: 'Blog',
		projects: 'Projects',
	},
	common: {
		all: 'All',
		countArticles: 'Articles · {count}',
		countProjects: 'Projects · {count}',
		latestPost: 'Latest post',
		allPosts: 'All posts',
		browse: 'Take a look',
		open: 'Open',
		detail: 'Details',
		backToBlog: 'Back to blog',
		backToProjects: 'Back to projects',
		updatedOn: 'Updated',
		emptyBlog: 'No posts yet. Time to write one.',
		emptyProjects: 'No projects yet. Go dig a hole.',
		projectDemo: 'Live demo',
		projectRepo: 'View source',
		projectDemoShort: 'Demo',
		projectRepoShort: 'Source',
		status: {
			idea: 'Idea',
			doing: 'In progress',
			done: 'Done',
			archived: 'Archived',
		},
		social: {
			bilibili: 'Bilibili',
			email: 'Email',
			github: 'GitHub',
			gitee: 'Gitee',
		},
	},
	footer: {
		tagline: 'Built by hand with Astro, updated slowly.',
		rights: 'All rights reserved.',
		about: 'About',
	},
	home: {
		heroKicker: "goodview's little universe",
		heroTitle: 'Goodview',
		heroSub: 'Code, anime, and inspiration with no particular reason.',
		heroPrimary: 'Read the blog',
		heroSecondary: 'See projects',
		scroll: 'SCROLL',
		profileTag: 'PROFILE',
		name: 'Goodview',
		handle: '@goodview',
		bio: ['Frontend / anime / indie dev', 'A little code, a few tools, and the occasional episode.'],
		blogTag: 'LATEST POST',
		blogFallbackTitle: 'No posts yet',
		blogFallbackDesc: 'Write the first one.',
		nowTag: 'NOW',
		nowItems: ['Rewatching Frieren', 'Tinkering with Astro and small tools', 'Learning to draw a decent cat'],
		projectsTag: 'PROJECTS',
		projectsTitle: (count: number) => `${count} ${count === 1 ? 'thing' : 'things'} made / in progress`,
		projectsDesc: 'Tools, toys, and a little bit of selfishness.',
		projectsLink: 'Take a look',
		toolTag: 'TOOL',
		toolTitle: ['Character radar', 'chart maker'],
		toolLink: 'Open',
		tagsTag: 'TAGS',
		tagsHint: 'More posts, more tags.',
		noteTag: 'NOTE',
		noteText: '"Make it exist first, then make it good."',
		noteSign: '— a note to myself',
	},
	blog: {
		eyebrow: 'BLOG',
		title: 'Blog',
		lead: 'Build logs, animation notes, and the occasional stray thought. Pick a tag and wander.',
		filterLabel: 'Filter by tag',
		comingSoon: 'More words are on the way.',
	},
	projects: {
		eyebrow: 'PROJECTS',
		title: 'Projects',
		lead: 'Tools, tiny games, and a few ideas that are still half-built. Click in to read their stories.',
		filterLabel: 'Filter by tag',
		comingSoon: 'The next hole is being dug.',
	},
	about: {
		eyebrow: 'ABOUT',
		title: 'Hi, I am Goodview',
		lead: 'A frontend tinkerer who occasionally watches anime and draws. This is where I keep my posts, projects, and small things that are not useful but make me happy.',
		siteHeading: 'About this site',
		siteBody: [
			'Built with Astro and no frontend framework. Navigation, tag filtering, language switching, and animations are all plain CSS and JavaScript.',
			'Posts and projects live in src/content/blog and src/content/projects. Adding a Markdown file is all it takes to update the site.',
		],
		findHeading: 'Find me',
	},
	article: {
		eyebrowBlog: 'ARTICLE',
		eyebrowProject: 'PROJECT',
	},
};

export const t: Record<Locale, Dict> = {
	'zh-CN': zhCN,
	'zh-TW': zhTW,
	en,
};

export function getStatusLabel(locale: Locale, status: string): string {
	const statuses = t[locale].common.status;
	return statuses[status as keyof typeof statuses] ?? statuses.done;
}

export function localeFromParam(param?: string): Locale {
	if (param === LOCALE_PARAM['zh-TW']) return 'zh-TW';
	if (param === LOCALE_PARAM.en) return 'en';
	return DEFAULT_LOCALE;
}

export function getLocaleFromPath(pathname: string): Locale {
	if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
	if (pathname === '/zh-tw' || pathname.startsWith('/zh-tw/')) return 'zh-TW';
	return DEFAULT_LOCALE;
}

export function stripLocale(pathname: string): string {
	const locale = getLocaleFromPath(pathname);
	const prefix = LOCALE_PREFIX[locale];
	if (!prefix) return pathname || '/';
	const rest = pathname.slice(prefix.length);
	return rest === '' ? '/' : rest;
}

export function localizePath(pathname: string, locale: Locale): string {
	const clean = stripLocale(pathname) || '/';
	const prefix = LOCALE_PREFIX[locale];
	if (!prefix) return clean;
	return clean === '/' ? `${prefix}/` : `${prefix}${clean}`;
}

export function normalizePath(pathname: string): string {
	return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}


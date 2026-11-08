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
		homeDescription: '吉辰良景的个人网站。',
		blogTitle: '博客 · 吉辰良景',
		blogDescription: '记录文章',
		projectsTitle: '项目集 · 吉辰良景',
		projectsDescription: '一些小工具、小游戏。',
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
		tagline: '用 Astro 搭建，慢慢更新中。',
		rights: '保留所有权利。',
		about: '关于',
	},
	home: {
		heroKicker: "goodview's little universe",
		heroTitle: '吉辰良景',
		heroSub: '欢迎访问————。',
		heroPrimary: '进入博客',
		heroSecondary: '看看项目',
		scroll: 'SCROLL',
		profileTag: 'PROFILE',
		name: '吉辰良景',
		handle: '@goodview',
		bio: ['梦想成为一个厉害的开发者'],
		blogTag: 'LATEST POST',
		blogFallbackTitle: '还没有文章',
		blogFallbackDesc: '去写下第一篇吧。',
		nowTag: 'NOW',
		nowItems: ['正在学习前端开发', '打算陆续开发一些小工具', '想尝试制作MC模组'],
		projectsTag: 'PROJECTS',
		projectsTitle: (count: number) => `${count} 个做过 / 在做的东西`,
		projectsDesc: '展示一些自己的作品。',
		projectsLink: '逛一圈',
		toolTag: 'TOOL',
		toolTitle: ['角色雷达图', '制作工具'],
		toolLink: '打开',
		tagsTag: 'TAGS',
		tagsHint: '文章越多，标签越热闹。',
		noteTag: 'NOTE',
		noteText: '“请输入文本。”',
		noteSign: '— 写给自己的话',
	},
	blog: {
		eyebrow: 'BLOG',
		title: '博客',
		lead: '放一些文章',
		filterLabel: '按标签筛选',
		comingSoon: '更多的内容还在路上。',
	},
	projects: {
		eyebrow: 'PROJECTS',
		title: '项目集',
		lead: '展示一些作品。',
		filterLabel: '按标签筛选',
		comingSoon: '下一个坑正在挖。',
	},
	about: {
		eyebrow: 'ABOUT',
		title: '你好，我是吉辰良景',
		lead: '暂无内容。',
		siteHeading: '关于这个网站',
		siteBody: [
			'网站用 Astro 搭建',
			'文章和项目分别放在 src/content/blog 与 src/content/projects。',
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
		homeDescription: '吉辰良景的個人網站。',
		blogTitle: '部落格 · 吉辰良景',
		blogDescription: '記錄文章',
		projectsTitle: '專案集 · 吉辰良景',
		projectsDescription: '一些小工具、小遊戲。',
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
		tagline: '用 Astro 搭建，慢慢更新中。',
		rights: '保留所有權利。',
		about: '關於',
	},
	home: {
		heroKicker: "goodview's little universe",
		heroTitle: '吉辰良景',
		heroSub: '歡迎訪問————。',
		heroPrimary: '進入部落格',
		heroSecondary: '看看專案',
		scroll: 'SCROLL',
		profileTag: 'PROFILE',
		name: '吉辰良景',
		handle: '@goodview',
		bio: ['夢想成為一個厲害的開發者'],
		blogTag: 'LATEST POST',
		blogFallbackTitle: '還沒有文章',
		blogFallbackDesc: '去寫下第一篇吧。',
		nowTag: 'NOW',
		nowItems: ['正在學習前端開發', '打算陸續開發一些小工具', '想嘗試製作 MC 模組'],
		projectsTag: 'PROJECTS',
		projectsTitle: (count: number) => `${count} 個做過 / 在做的東西`,
		projectsDesc: '展示一些自己的作品。',
		projectsLink: '逛一圈',
		toolTag: 'TOOL',
		toolTitle: ['角色雷達圖', '製作工具'],
		toolLink: '打開',
		tagsTag: 'TAGS',
		tagsHint: '文章越多，標籤越熱鬧。',
		noteTag: 'NOTE',
		noteText: '「請輸入文字。」',
		noteSign: '— 寫給自己的話',
	},
	blog: {
		eyebrow: 'BLOG',
		title: '部落格',
		lead: '放一些文章',
		filterLabel: '依標籤篩選',
		comingSoon: '更多的文字還在路上。',
	},
	projects: {
		eyebrow: 'PROJECTS',
		title: '專案集',
		lead: '展示一些作品。',
		filterLabel: '依標籤篩選',
		comingSoon: '下一個坑正在挖。',
	},
	about: {
		eyebrow: 'ABOUT',
		title: '你好，我是吉辰良景',
		lead: '暫無內容。',
		siteHeading: '關於這個網站',
		siteBody: [
			'網站用 Astro 搭建',
			'文章和專案分別放在 src/content/blog 與 src/content/projects。',
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
		homeDescription: 'The personal site of Goodview.',
		blogTitle: 'Blog · Goodview',
		blogDescription: 'Notes and articles.',
		projectsTitle: 'Projects · Goodview',
		projectsDescription: 'Some small tools and tiny games.',
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
		tagline: 'Built with Astro, updated slowly.',
		rights: 'All rights reserved.',
		about: 'About',
	},
	home: {
		heroKicker: "goodview's little universe",
		heroTitle: 'Goodview',
		heroSub: 'Welcome————.',
		heroPrimary: 'Read the blog',
		heroSecondary: 'See projects',
		scroll: 'SCROLL',
		profileTag: 'PROFILE',
		name: 'Goodview',
		handle: '@goodview',
		bio: ['Dreaming of becoming a great developer'],
		blogTag: 'LATEST POST',
		blogFallbackTitle: 'No posts yet',
		blogFallbackDesc: 'Write the first one.',
		nowTag: 'NOW',
		nowItems: ['Learning frontend development', 'Planning to build some small tools', 'Wanting to try making MC mods'],
		projectsTag: 'PROJECTS',
		projectsTitle: (count: number) => `${count} ${count === 1 ? 'thing' : 'things'} made / in progress`,
		projectsDesc: 'Showing off some of my work.',
		projectsLink: 'Take a look',
		toolTag: 'TOOL',
		toolTitle: ['Character radar', 'chart maker'],
		toolLink: 'Open',
		tagsTag: 'TAGS',
		tagsHint: 'More posts, more tags.',
		noteTag: 'NOTE',
		noteText: '"Please enter text."',
		noteSign: '— a note to myself',
	},
	blog: {
		eyebrow: 'BLOG',
		title: 'Blog',
		lead: 'Some articles.',
		filterLabel: 'Filter by tag',
		comingSoon: 'More words are on the way.',
	},
	projects: {
		eyebrow: 'PROJECTS',
		title: 'Projects',
		lead: 'Showing some work.',
		filterLabel: 'Filter by tag',
		comingSoon: 'The next hole is being dug.',
	},
	about: {
		eyebrow: 'ABOUT',
		title: 'Hi, I am Goodview',
		lead: 'Nothing here yet.',
		siteHeading: 'About this site',
		siteBody: [
			'Built with Astro.',
			'Posts and projects live in src/content/blog and src/content/projects.',
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
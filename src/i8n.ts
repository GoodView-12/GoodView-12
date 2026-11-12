export const LOCALES = ['zh-CN', 'zh-TW', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'zh-CN';
export const ALTERNATE_LOCALES: Locale[] = ['zh-TW', 'en'];

/**
 * 站点部署在 GitHub Pages 的子路径下（例如 /blog）。
 * Astro 的 BASE_URL 总是以 / 结尾，这里统一去掉末尾斜杠方便拼接。
 */
const RAW_BASE = import.meta.env.BASE_URL || '/';
export const BASE_PATH = RAW_BASE === '/' ? '' : RAW_BASE.replace(/\/+$/, '');

const EXTERNAL_PATTERN = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i;

/** 给站内绝对路径加上部署 base，外链、mailto、锚点原样返回。 */
export function withBase(path: string): string {
	if (!path) return path;
	if (EXTERNAL_PATTERN.test(path)) return path;
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${BASE_PATH}${normalized}`;
}

/** 去掉部署 base，得到站点内部路径。 */
export function stripBase(pathname: string): string {
	if (!BASE_PATH) return pathname || '/';
	if (!pathname) return '/';
	if (pathname === BASE_PATH) return '/';
	if (pathname.startsWith(`${BASE_PATH}/`)) {
		return pathname.slice(BASE_PATH.length) || '/';
	}
	return pathname;
}

/** 站内图片等静态资源统一加上 base。 */
export function resolveAsset(src: string): string {
	return ensureAssetBase(src);
}

/**
 * 与 withBase 类似，但已经带 base 的资源路径不会重复添加。
 * 只用于静态资源（图片、字体等），不要用于页面路由。
 */
export function ensureAssetBase(path: string): string {
	if (!path) return path;
	if (EXTERNAL_PATTERN.test(path)) return path;
	const normalized = path.startsWith('/') ? path : `/${path}`;
	if (!BASE_PATH) return normalized;
	if (normalized === BASE_PATH || normalized.startsWith(`${BASE_PATH}/`)) return normalized;
	return `${BASE_PATH}${normalized}`;
}

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
		brandName: '吉辰良景的博客',
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
		timeTag: 'TIME',
		lunarPrefix: '农历',
		projectsTag: 'PROJECTS',
		projectsPickTitle: '推荐项目',
		projectsLink: '查看全部',
		recommendTag: '推荐',
		toolTag: 'TOOL',
		toolTitle: ['角色雷达图', '制作工具'],
		toolLink: '打开',
		updatesTag: 'UPDATES',
		updatesTitle: '最近更新',
		updatesEmpty: '还没有更新。',
		statsTag: 'SITE',
		statsPosts: '篇文章',
		statsProjects: '个项目',
		statsLink: '关于本站',
		sinceLabel: '已建站',
		sinceUnit: '天',
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
		tocTitle: '本页目录',
		anchorLabel: '本节链接',
	},
	comments: {
		title: '评论',
		lead: '说点什么吧，友善交流。',
		nameLabel: '昵称',
		namePlaceholder: '你的昵称',
		contentLabel: '评论内容',
		contentPlaceholder: '写下你的想法…',
		submit: '发表评论',
		empty: '还没有评论，来抢沙发。',
		count: '{count} 条评论',
		localNotice: '当前为本地评论模式：评论只保存在这台设备的浏览器里，换设备或清理缓存后会消失。',
		delete: '删除',
		deleteConfirm: '确定删除这条评论吗？',
		nameRequired: '请先填写昵称。',
		contentRequired: '评论内容不能为空。',
		tooLong: '内容太长了，最多 1000 个字符。',
		justNow: '刚刚',
		localBadge: '本地',
	},
	notFound: {
		eyebrow: 'NOT FOUND',
		title: '页面走丢了',
		lead: '你访问的页面不存在，可能已经被移动、改名或删除。',
		home: '回到首页',
		blog: '去看看博客',
	},
};

export type Dict = typeof zhCN;
export type NavKey = keyof Dict['nav'];
export type SocialKey = keyof Dict['common']['social'];

const zhTW: Dict = {
	meta: {
		siteName: '吉辰良景',
		brandName: '吉辰良景的部落格',
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
		timeTag: 'TIME',
		lunarPrefix: '農曆',
		projectsTag: 'PROJECTS',
		projectsPickTitle: '推薦專案',
		projectsLink: '查看全部',
		recommendTag: '推薦',
		toolTag: 'TOOL',
		toolTitle: ['角色雷達圖', '製作工具'],
		toolLink: '打開',
		updatesTag: 'UPDATES',
		updatesTitle: '最近更新',
		updatesEmpty: '還沒有更新。',
		statsTag: 'SITE',
		statsPosts: '篇文章',
		statsProjects: '個專案',
		statsLink: '關於本站',
		sinceLabel: '已建站',
		sinceUnit: '天',
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
		tocTitle: '本頁目錄',
		anchorLabel: '本節連結',
	},
	comments: {
		title: '留言',
		lead: '說點什麼吧，友善交流。',
		nameLabel: '暱稱',
		namePlaceholder: '你的暱稱',
		contentLabel: '留言內容',
		contentPlaceholder: '寫下你的想法…',
		submit: '發表留言',
		empty: '還沒有留言，來搶沙發。',
		count: '{count} 則留言',
		localNotice: '目前為本地留言模式：留言只保存在這台裝置的瀏覽器裡，換裝置或清理快取後會消失。',
		delete: '刪除',
		deleteConfirm: '確定刪除這則留言嗎？',
		nameRequired: '請先填寫暱稱。',
		contentRequired: '留言內容不能為空。',
		tooLong: '內容太長了，最多 1000 個字元。',
		justNow: '剛剛',
		localBadge: '本地',
	},
	notFound: {
		eyebrow: 'NOT FOUND',
		title: '頁面走丟了',
		lead: '你造訪的頁面不存在，可能已經被移動、改名或刪除。',
		home: '回到首頁',
		blog: '去看看部落格',
	},
};

const en: Dict = {
	meta: {
		siteName: 'Goodview',
		brandName: "Goodview's Blog",
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
		timeTag: 'TIME',
		lunarPrefix: 'Lunar ',
		projectsTag: 'PROJECTS',
		projectsPickTitle: 'Featured projects',
		projectsLink: 'View all',
		recommendTag: 'Featured',
		toolTag: 'TOOL',
		toolTitle: ['Character radar', 'chart maker'],
		toolLink: 'Open',
		updatesTag: 'UPDATES',
		updatesTitle: 'Recent updates',
		updatesEmpty: 'No updates yet.',
		statsTag: 'SITE',
		statsPosts: 'posts',
		statsProjects: 'projects',
		statsLink: 'About this site',
		sinceLabel: 'Building for',
		sinceUnit: 'days',
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
		tocTitle: 'On this page',
		anchorLabel: 'Section link',
	},
	comments: {
		title: 'Comments',
		lead: 'Say something nice.',
		nameLabel: 'Name',
		namePlaceholder: 'Your name',
		contentLabel: 'Comment',
		contentPlaceholder: 'Share your thoughts…',
		submit: 'Post comment',
		empty: 'No comments yet. Be the first.',
		count: '{count} comments',
		localNotice:
			'Local comment mode: comments are stored only in this browser and will disappear after you clear site data.',
		delete: 'Delete',
		deleteConfirm: 'Delete this comment?',
		nameRequired: 'Please enter a name.',
		contentRequired: 'Comment cannot be empty.',
		tooLong: 'Too long. 1000 characters maximum.',
		justNow: 'just now',
		localBadge: 'local',
	},
	notFound: {
		eyebrow: 'NOT FOUND',
		title: 'This page wandered off',
		lead: 'The page you are looking for does not exist. It may have been moved, renamed, or deleted.',
		home: 'Back home',
		blog: 'Read the blog',
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

function localeOfSitePath(pathname: string): Locale {
	if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
	if (pathname === '/zh-tw' || pathname.startsWith('/zh-tw/')) return 'zh-TW';
	return DEFAULT_LOCALE;
}

export function getLocaleFromPath(pathname: string): Locale {
	return localeOfSitePath(stripBase(pathname));
}

export function stripLocale(pathname: string): string {
	const path = stripBase(pathname);
	const locale = localeOfSitePath(path);
	const prefix = LOCALE_PREFIX[locale];
	if (!prefix) return path || '/';
	const rest = path.slice(prefix.length);
	return rest === '' ? '/' : rest;
}

/**
 * localizePath 接收“站点内部路径”（例如 /blog/），不会把它误当成部署 base。
 * 如果来源是 Astro.url.pathname，请先调用 stripBase()。
 */
export function localizePath(pathname: string, locale: Locale): string {
	const path = pathname || '/';
	const sourceLocale = localeOfSitePath(path);
	const sourcePrefix = LOCALE_PREFIX[sourceLocale];
	const clean =
		sourcePrefix && (path === sourcePrefix || path.startsWith(`${sourcePrefix}/`))
			? path.slice(sourcePrefix.length) || '/'
			: path;
	const targetPrefix = LOCALE_PREFIX[locale];
	const localized = clean === '/' ? (targetPrefix ? `${targetPrefix}/` : '/') : `${targetPrefix}${clean}`;
	return withBase(localized);
}

export function normalizePath(pathname: string): string {
	return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}
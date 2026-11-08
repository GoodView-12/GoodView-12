import type { NavKey, SocialKey } from './i8n';

// TODO: 替换为你自己的首页大头图链接
export const HERO_IMAGE = 'https://picsum.photos/seed/goodview-hero/1920/1080';
// TODO: 替换为你自己的头像链接
export const AVATAR_IMAGE = 'https://picsum.photos/seed/goodview-avatar/640/640';
// TODO: 替换为默认文章封面链接（文章没有 cover 时使用）
export const DEFAULT_COVER = 'https://picsum.photos/seed/goodview-cover/1200/675';

export const NAV_ITEMS: { key: NavKey; path: string }[] = [
	{ key: 'home', path: '/' },
	{ key: 'blog', path: '/blog' },
	{ key: 'projects', path: '/projects' },
];

// TODO: 换成自己的各个主页地址
export const SOCIAL_LINKS: { key: SocialKey; href: string; external: boolean }[] = [
	{ key: 'bilibili', href: 'https://space.bilibili.com/1', external: true },
	{ key: 'email', href: 'mailto:hello@example.com', external: false },
	{ key: 'github', href: 'https://github.com/goodview-12', external: true },
	{ key: 'gitee', href: 'https://gitee.com/goodview', external: true },
];

export const TOOL_LINK = {
	href: 'https://goodview-12.github.io/tools/',
};

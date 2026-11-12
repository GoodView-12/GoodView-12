import type { NavKey, SocialKey } from './i8n';
import { ensureAssetBase } from './i8n';

// 首页大头图、头像与默认封面放在 public/images 下，构建时会自动带上部署 base。
export const HERO_IMAGE = ensureAssetBase('/images/hero.webp');
export const HERO_IMAGE_SMALL = ensureAssetBase('/images/hero-960.webp');
export const AVATAR_IMAGE = ensureAssetBase('/images/avatar.webp');
export const AVATAR_IMAGE_SMALL = ensureAssetBase('/images/avatar-256.webp');
export const DEFAULT_COVER = ensureAssetBase('/images/cover-blog.webp');

// 建站时间，显示在首页时间卡片中。
export const SITE_LAUNCH_DATE = '2026-11-08';
export const SITE_LAUNCH_DATE_LABEL = '2026.11.08';

export const NAV_ITEMS: { key: NavKey; path: string }[] = [
	{ key: 'home', path: '/' },
	{ key: 'blog', path: '/blog/' },
	{ key: 'projects', path: '/projects/' },
];

/**
 * 评论配置。
 * 1. 仓库开启 Discussions；
 * 2. 在 https://giscus.app 安装 App 并选择讨论分类；
 * 3. 把页面给出的 data-repo-id / data-category-id 填到下面对应字段。
 * 填空时组件会自动退回到“本地评论模式”，不会报错。
 */
export const GISCUS_CONFIG = {
	repo: 'GoodView-12/blog',
	repoId: '',
	category: 'Comments',
	categoryId: '',
	mapping: 'pathname',
	reactionsEnabled: '1',
	inputPosition: 'top',
	strict: '0',
};

export const SOCIAL_LINKS: { key: SocialKey; href: string; external: boolean }[] = [
	{ key: 'bilibili', href: 'https://space.bilibili.com/3494365418752453?', external: true },
	{ key: 'email', href: 'mailto:wwwwwjwc@163.com', external: false },
	{ key: 'github', href: 'https://github.com/goodview-12', external: true },
	{ key: 'gitee', href: 'https://gitee.com/goodview', external: true },
];

export const TOOL_LINK = {
	href: 'https://goodview-12.github.io/tools/',
};

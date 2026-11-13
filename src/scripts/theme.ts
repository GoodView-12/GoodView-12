/**
 * 主题（浅色 / 深色）工具。
 * 首屏防闪烁的同步脚本内联在 BaseHead.astro 中，这里负责交互期的读写与同步。
 */
export const THEME_STORAGE_KEY = 'goodview-blog:theme';

export type Theme = 'light' | 'dark';

const DARK_THEME_COLOR = '#0e131a';
const LIGHT_THEME_COLOR = '#f5f8fc';
const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');

export const getStoredTheme = (): Theme | null => {
	try {
		const value = window.localStorage.getItem(THEME_STORAGE_KEY);
		return value === 'light' || value === 'dark' ? value : null;
	} catch {
		return null;
	}
};

export const getSystemTheme = (): Theme => (systemQuery.matches ? 'dark' : 'light');

/** 用户显式选择优先，否则跟随系统。 */
export const getActiveTheme = (): Theme => getStoredTheme() ?? getSystemTheme();

export const setTheme = (theme: Theme, persist = true) => {
	const root = document.documentElement;
	root.dataset.theme = theme;
	root.style.colorScheme = theme;

	document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((meta) => {
		meta.setAttribute('content', theme === 'dark' ? DARK_THEME_COLOR : LIGHT_THEME_COLOR);
	});

	if (!persist) return;
	try {
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	} catch {
		/* 隐私模式下可能无法写入，保持当前会话主题即可 */
	}
};

export const toggleTheme = (): Theme => {
	const next = getActiveTheme() === 'dark' ? 'light' : 'dark';
	setTheme(next);
	return next;
};

/** 没有显式选择时跟随系统切换，返回取消订阅函数。 */
export const watchSystemTheme = (onChange: (theme: Theme) => void) => {
	const handler = () => {
		if (getStoredTheme()) return;
		const theme = getSystemTheme();
		setTheme(theme, false);
		onChange(theme);
	};

	systemQuery.addEventListener('change', handler);
	return () => systemQuery.removeEventListener('change', handler);
};

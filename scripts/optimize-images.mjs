import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

/**
 * 把 image/ 里的原始图片压缩成 public/images 下的 WebP。
 * 用法：npm run optimize:images
 */
const root = process.cwd();
const sourceDir = path.join(root, 'image');
const outDir = path.join(root, 'public', 'images');

const heroSource = path.join(sourceDir, 'home_img1.png');
const avatarSource = path.join(sourceDir, 'pfp.png');
const gifSource = path.join(sourceDir, 'anon_gif1.gif');

await mkdir(outDir, { recursive: true });

const write = async (name, pipeline) => {
	const file = path.join(outDir, name);
	await pipeline.toFile(file);
	const { size } = await stat(file);
	console.log(`${name.padEnd(20)} ${(size / 1024).toFixed(0).padStart(5)} KB`);
};

await write(
	'hero.webp',
	sharp(heroSource).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 78 }),
);
await write(
	'hero-960.webp',
	sharp(heroSource).resize({ width: 960, withoutEnlargement: true }).webp({ quality: 74 }),
);
await write(
	'avatar.webp',
	sharp(avatarSource).resize(512, 512, { fit: 'cover', position: 'attention' }).webp({ quality: 82 }),
);
await write(
	'avatar-256.webp',
	sharp(avatarSource).resize(256, 256, { fit: 'cover', position: 'attention' }).webp({ quality: 80 }),
);
await write(
	'cover-blog.webp',
	sharp(heroSource)
		.resize(1200, 675, { fit: 'cover', position: 'attention' })
		.webp({ quality: 78 }),
);
await write(
	'cover-project.webp',
	sharp(gifSource).resize(1200, 675, { fit: 'cover', position: 'attention' }).webp({ quality: 78 }),
);
await write(
	'cover-toolbox.webp',
	sharp(heroSource).resize(1200, 675, { fit: 'cover', position: 'left' }).webp({ quality: 78 }),
);

console.log('图片压缩完成，输出目录：public/images');

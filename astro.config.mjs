// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/constitution': '/guidelines/tos',
		'/note-guideline': '/guidelines/creating-note',
		'/cp-guideline': '/guidelines/cp',
		'/emoji-guideline': '/guidelines/emoji-request',
		'/park-guideline': '/guidelines/discord',
		'/avatars': '/hints/about-avatars',
		'/club-guideline': '/guidelines/club',
		'/hints': '/hints/roles',
		'/hints-roles': '/hints/roles',
		'/hints-report': '/hints/report-abuse',
		'/shrimpia-plus': '/services/shrimpia-plus',
	},
	integrations: [
		starlight({
			title: 'シュリンピアドキュメント',
			favicon: '/favicon.png',
			defaultLocale: 'root',
			locales: {
					root: {
							lang: 'ja',
							label: '日本語'
					}
			},
			
			plugins: [
				starlightLinksValidator(),
			],
			logo: {
				src: '@/assets/logo.png',
				alt: 'シュリンピア',
			},
			customCss: [
				'@/styles/global.scss',
			],
			components: {
				Head: '@/components/Head.astro',
				Footer: '@/components/Footer.astro',
			},
			head: [
				{ tag: 'link', attrs: { rel: 'stylesheet', href: 'https://koruri.chillout.chat/koruri.css' } },
			],
			sidebar: [
				{ 
					label: 'サービス',
					autogenerate: { directory: 'services' },
				},
				{
					label: '規約・ガイドライン',
					autogenerate: { directory: 'guidelines' },
				},
				{
					label: 'ヒント',
					autogenerate: { directory: 'hints' },
				},
				{
					label: 'Minecraft',
					badge: 'NEW',
					items: [{
						label: "参加方法",
						link: "/minecraft/getting-started",
					}, {
						label: "サーバールール",
						link: "/minecraft/rules",
					}, {
						label: "ワールド解説",
						link: "/minecraft/worlds",
					}, {
						label: "Tips",
						link: "/minecraft/tips",
					}, {
						label: "プラグイン",
						autogenerate: { directory: 'minecraft/plugins' },
					}],
				},
				{
					label: '世界観',
					autogenerate: { directory: 'tales' },
				},
			],
		}),
	],
	vite: {
		resolve: {
			alias: {
				'@': '/src',
			},
		},
	},
});

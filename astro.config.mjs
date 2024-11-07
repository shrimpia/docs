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
			title: '帝国ドキュメント（仮設）',
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
				PageFrame: '@/components/PageFrame.astro',
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
					label: '帝国法規',
					autogenerate: { directory: 'guidelines' },
				},
				{
					label: 'ヒント',
					autogenerate: { directory: 'hints' },
				},
				{
					label: '世界観',
					badge: 'NEW',
					autogenerate: { directory: 'tales' },
				}
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

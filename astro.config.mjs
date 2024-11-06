// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
			logo: {
				src: '@/assets/logo.png',
				alt: 'シュリンピア',
			},
			customCss: [
				'@/styles/global.scss',
			],
			components: {
				Footer: '@/components/Footer.astro',
			},
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
					autogenerate: { directory: 'tales' },
					badge: 'NEW',
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

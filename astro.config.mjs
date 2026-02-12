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
			title: 'シュリンピアドキュメント',
			favicon: '/favicon.png',
			defaultLocale: 'root',
			locales: {
					root: {
							lang: 'ja',
							label: '日本語'
					}
			},
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
					label: '規約・ガイドライン',
					items: [{
						label: "サーバールール",
						link: "/guidelines/tos",
					}, {
						label: "ローカルタイムラインルール",
						link: "/guidelines/ltl",
					}, {
						label: "投稿ガイドライン",
						link: "/guidelines/creating-note",
					}, {
						label: "カップリング作品に関するガイドライン",
						link: "/guidelines/cp",
					}, {
						label: "Discord利用ルール",
						link: "/guidelines/discord",
					}, {
						label: "絵文字申請ガイドライン",
						link: "/guidelines/emoji-request",
					}, {
						label: "アバターデコレーション申請ガイドライン",
						link: "/guidelines/avatar-decoration-guideline",
					}, {
						label: "部活動ガイドライン",
						link: "/guidelines/club",
					}, {
						label: "更新履歴",
						link: "/guidelines/changelog",
					}],
				},
				{ 
					label: 'サービス',
					autogenerate: { directory: 'services' },
				},
				{
					label: 'ヒント',
					autogenerate: { directory: 'hints' },
				},
				// {
				// 	label: 'Minecraft',
				// 	badge: 'NEW',
				// 	items: [{
				// 		label: "参加方法",
				// 		link: "/minecraft/getting-started",
				// 	}, {
				// 		label: "ルール",
				// 		link: "/guidelines/minecraft",
				// 	}, {
				// 		label: "ワールド解説",
				// 		link: "/minecraft/worlds",
				// 	}, {
				// 		label: "Tips",
				// 		link: "/minecraft/tips",
				// 	}, {
				// 		label: "プラグイン",
				// 		autogenerate: { directory: 'minecraft/plugins' },
				// 	}],
				// },
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

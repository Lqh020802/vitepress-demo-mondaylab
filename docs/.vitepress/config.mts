import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: '司洛胖崽',
	description: 'A VitePress Site',
	base: '/vitepress-demo-mondaylab/',
	themeConfig: {
		logo: 'https://vuejs.org/images/logo.png',
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'test', link: '/markdown-examples' }
		],

		sidebar: [
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples', link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' }
				]
			}
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
	}
});

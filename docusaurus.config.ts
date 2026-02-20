import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'RocketRide Documentation',
	tagline: 'Comprehensive guides and resources for RocketRide products and services',
	favicon: 'img/favicon.ico',

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Production url
	url: 'https://docs.rocketride.com/',

	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: false,
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'data-toolchain',
				path: 'docs-data-toolchain',
				routeBasePath: '/',
				sidebarPath: './sidebars.ts',
			},
		],
	],

	themeConfig: {
		image: 'img/social-card.png',
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: false,
			respectPrefersColorScheme: false,
		},
		algolia: {
			// The application ID provided by Algolia
			appId: '04UY0RFHYN',

			// Public API key: it is safe to commit it
			apiKey: 'f678cc674b267641e4c2e36a75e26c96',

			indexName: 'docs-crawler',

			contextualSearch: false,
		},
		navbar: {
			title: 'RocketRide',
			logo: {
				alt: 'RocketRide Logo',
				src: 'img/rocketride_logo_colored.png',
				srcDark: 'img/rocketride_logo_white.png',
				href: 'https://rocketride.ai/',
				target: '_blank',
			},
			items: [
				{
					label: 'Documentation',
					to: '/intro',
					position: 'left',
					docsPluginId: 'data-toolchain',
					activeBasePath: '/',
				},
				{
					href: 'https://discord.gg/9hr3tdZmEG',
					position: 'right',
					className: 'header-discord-link',
					'aria-label': 'Discord server',
				},
				{
					href: 'https://github.com/rocketride-ai',
					position: 'right',
					className: 'header-github-link',
					'aria-label': 'GitHub repository',
				},
				{
					label: 'Community Support',
					href: 'https://discord.gg/9hr3tdZmEG',
					position: 'right',
				},
			],
		},
		footer: {
			copyright: `© ${new Date().getFullYear()} RocketRide |
      <a href="https://aparavi.com/end-user-license-agreement/" target="_blank" style="color: inherit; text-decoration: none;">End User License Agreement</a> | 
      <a href="https://aparavi.com/master-saas-agreement/" target="_blank" style="color: inherit; text-decoration: none;">Master Saas Agreement</a> | 
      <a href="https://aparavi.com/privacy-policy" target="_blank" style="color: inherit; text-decoration: none;">Privacy Policy</a> | 
      <a href="https://github.com/rocketride-ai" target="_blank" style="color: inherit; text-decoration: none;">GitHub</a> | 
      <a href="https://discord.gg/9hr3tdZmEG" target="_blank" style="color: inherit; text-decoration: none;">Discord</a> | 
      <a href="https://www.youtube.com/@AparaviSoftware" target="_blank" style="color: inherit; text-decoration: none;">YouTube</a>`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;

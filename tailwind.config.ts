import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				darkbg: '#001D18',
				lightbg: '#FFFFFF',
				'primary-green': '#00B598',
				'light-green': '#E7F8F5',
			},
			backgroundImage: {
				'dark-gradient': 'linear-gradient(90deg, #aa7100 0%, #442d00 100%)',
				'light-gradient': 'linear-gradient(135deg, #001d18 0%, #066959 93.36%)',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;

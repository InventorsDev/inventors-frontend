import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-light': '#E1E5EB',
        'primary-dark': '#1F2937',
        'primary-darker': '#111827',
        'primary-darkest': '#0B1017',
        'primary-lighter': '#2F3947',
        'primary-lightest': '#6B7280',
        'primary-red': '#EF4',
        'primary-green': '#10B981',
        'primary-blue': '#06B6D4',
      }
    },
  },
  plugins: [],
}
export default config

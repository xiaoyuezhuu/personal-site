import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#666666',
        accent: '#2563eb',
        background: '#ffffff',
        'background-alt': '#fafafa',
      },
      fontFamily: {
        // Text font (body)
        sans: ['var(--font-text)', 'Inter', 'system-ui', 'sans-serif'],
        text: ['var(--font-text)', 'Inter', 'system-ui', 'sans-serif'],
        // Title/display font (headings)
        title: ['var(--font-title)', 'Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
        'content-medium': '960px',
        'content-centered': '800px',
      },
    },
  },
  plugins: [typography],
}
export default config

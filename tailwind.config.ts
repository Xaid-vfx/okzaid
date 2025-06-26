import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                // Add the custom font variables
                sans: ['var(--font-inter)', 'sans-serif'],
                serif: ['var(--font-lora)', 'serif'],
            },
            // Add a text-shadow utility
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
        },
    },
    plugins: [
        // Plugin to generate text-shadow utilities
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value: string) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') as Record<string, string> }
            )
        }),
    ],
}
export default config 
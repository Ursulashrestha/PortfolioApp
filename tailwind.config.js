/** @type {import('tailwindcss').Config} */
import portfolio from './src/portfolio'

module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'button-color': portfolio.colors.buttonColor,
                'link-color': portfolio.colors.LinkHighlightColor
            },
            keyframes: {
                screamJump: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)', color: 'inherit' },
                    '25%': { transform: 'translateY(-10px) rotate(-5deg)', color: '#0A66C2' }, // LinkedIn blue
                    '50%': { transform: 'translateY(-15px) rotate(5deg)', color: '#0A66C2' },
                    '75%': { transform: 'translateY(-10px) rotate(-5deg)', color: '#0A66C2' },
                }
            },
            animation: {
                screamJump: 'screamJump 0.8s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}

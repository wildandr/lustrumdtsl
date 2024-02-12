import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/component/module/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animationDelay: ['responsive', 'hover', 'focus'],
            animationDuration: ['responsive', 'hover', 'focus'],
            animation: {
              'twinkle-1s': 'twinkle 1s ease-in-out infinite',
              'twinkle-2s': 'twinkle 2s ease-in-out infinite',
              'twinkle-3s': 'twinkle 3s ease-in-out infinite',
              'twinkle-4s': 'twinkle 4s ease-in-out infinite',
            },
            keyframes: {
                twinkle: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.1' },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "cia-green": "#005A48",
                chiasGreen: {
                    500: '#058369',
                  },
            },
            fontFamily: {
                sfui: ['SFUIText-Regular'],
                LibreBaskerville: ['LibreBaskerville-Regular'],
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            addCommonColors: true,
            themes: {
                light: {
                    colors: { primary: "#005A48" },
                },
            },
        }),
    ],
};
export default config;

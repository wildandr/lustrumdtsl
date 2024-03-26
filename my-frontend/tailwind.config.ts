import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/component/module/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/component/layout/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                '16k': '1680px',
                '1440': '1440px',
              },
            animationDelay: ["responsive", "hover", "focus"],
            animationDuration: ["responsive", "hover", "focus"],
            animation: {
                "twinkle-1s": "twinkle 1s ease-in-out infinite",
                "twinkle-2s": "twinkle 2s ease-in-out infinite",
                "twinkle-3s": "twinkle 3s ease-in-out infinite",
                "twinkle-4s": "twinkle 4s ease-in-out infinite",
            },
            keyframes: {
                twinkle: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.1" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "cia-green": "#005A48",
                "ciaGreen": "#058369",
                "sbc": "#ED4F23",
                "cic": "#FDB950",
                "fcec": "#0173BC",
                "craft": "#833434",
                "cia-green-placeholder": "#80ACA3",
                "cia-green-border": "#18AB8E",
                "sbc-orange": "#E25933",
                "sbc-orange-placeholder": "#E25933",
                "sbc-orange-border": "#ED4F23",
                chiasGreen: {
                    500: "#058369",
                },
                clapBlue: {
                    500: "#4573A4",
                },
                gold: {
                    500: "#F2D87A",
                },
            },
            fontFamily: {
                League_Spartan: ['var(--font-league-spartan)'],
                
                LeagueSpartan: ["league-spartan"],
                sfui: ["PlusJakartaSans"],
                LibreBaskerville: ["LibreBaskerville-Regular"],
                Poppins: ["Poppins-Regular"],
                PoppinsBold: ["Poppins-Bold"],
                PoppinsMedium: ["Poppins-Medium"],
                PoppinsSemiBold: ["Poppins-SemiBold"],
                PoppinsLight: ["Poppins-Light"],
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: "class",
    plugins: [
        require("tailwindcss-list-style")(["responsive"]),
        nextui({
            addCommonColors: true,
            themes: {
                light: {
                    colors: { primary: "#18AB8E" },
                },
            },
        }),
    ],
};
export default config;

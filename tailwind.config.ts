import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#3b82f6", // Blue-500 equivalent
                secondary: "#64748b", // Slate-500
                success: "#22c55e", // Green-500
                danger: "#ef4444", // Red-500
                dark: {
                    100: "#1e293b", // Slate-800
                    200: "#0f172a", // Slate-900
                    300: "#020617", // Slate-950
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
export default config;

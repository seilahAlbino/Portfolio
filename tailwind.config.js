/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ab21c2",
                secondary: "#6dbe9e",

                lightbackground: "#f4f5f0",
                lighttext: "#242424",

                darkbackground: "#0b0a0f",
                darktext: "#dbdbdb",

                light: "#fff",
                dark: "#080807",
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                shake: {
                    '0%': { top: '0px' },
                    '50%': { transform: 'rotate(1deg)' },
                    '80%': { transform: 'rotate(-1deg)' },
                    '100%': { top: '10px' }
                }
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-out forwards',
                shake: 'shake 60ms infinite alternate',
            },
        },
    },
    darkMode: "class",
    plugins: [],
}


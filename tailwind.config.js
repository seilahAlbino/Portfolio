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
                shake: {
                    '0%': { top: '0px' },
                    '50%': { transform: 'rotate(2deg)' },
                    '80%': { transform: 'rotate(-2deg)' },
                    '100%': { top: '10px' }
                }
            },
            animation: {
                shake: 'shake 60ms infinite alternate',
            },
        },
    },
    darkMode: "class",
    plugins: [],
}


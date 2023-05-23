/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/*.{js,jsx}",
        "./src/**/*.{js,jsx}"
    ],
    darkMode: "class",
    theme: {
        colors: {
            white: '#FAFAFA',
            black: '#212121',
            blue: '#0D47A1',
            lightBlue: '#448AFF',
            bgGrey: 'rgba(0, 0, 0, 0.5)',
        },
        extend: {},
    },
    plugins: [],
}
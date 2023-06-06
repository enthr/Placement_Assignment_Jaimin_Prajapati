/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}", "./src/*.{js,jsx}", "./src/**/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                rose: '#E99A9E',
                myLightBlue: '#788BFD',
                myTan: '#D3C3A7'
            }
        }
    },
    plugins: [],
}
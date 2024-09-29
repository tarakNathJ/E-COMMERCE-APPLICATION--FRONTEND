/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "Heading-Color": "#D5D5DA",
                "linear-right": "#4BC9FF",
                "linear-mid": "#E7EFF9",
                "linear-left": "#5CC6F3",
                "bg-Cart": "#F4F9FA",
                "homeBody": "#EAE9FF",
                "Cart2": "#F5FDFF",
                "showAllProduct": "#F6F6F6",
                "priceBer": "#D9D9D9",
                "personalInfo": "#F8F7F7",
                "Botton": "#FBC151",
                "linerLift": "#FFFDCB",
                "linerRight": "#B2F4F0",
                "bottonBlue": "#7783E7",
                "signupBG": "#F1FBFA",
                "UploadBlockColor": "#7A7A7A",
                "NaveberBackColor": "#0C0C37",
                "botton": "#0E1552",
                "naveberBottom": "#D5D5DA",
            }
        },
    },
    plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx,css,scss}"],
  theme: {
    extend: {
      width: {
        table: "986px",
        tools: "310px",
        input: "1000px",
        logo: "64px",
        head: "1400px",
        category: "1200px",
        star: "970px",
        imageToIcon: "950px",
        imageInput: "510px",
        sidebarMenu: "220px",
      },
      height: {
        bg: "1000px",
        sidebar: "600px",
        input: "50px",
        button: "52px",
        mytool: "500px",
        imageToIcon: "65vh",
        sidebarMenu: "50vh",
        introduction: "65vh",
      },
      fontSize: {
        placeholder: "16px",
      },
    },
  },
  plugins: [],
};

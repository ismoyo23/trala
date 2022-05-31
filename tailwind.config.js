module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat", sans-serif'],
        roboto: ['"Roboto", sans-serif'],
        nunito: ['"Nunito", sans-serif'],
      },
      boxShadow: {
        0.15: "0px 4px 40px rgba(0, 0, 0, 0.15)",
        0.1: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        0.8: "0px 2px 40px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        kdm: "url('./assets/kdm.svg')",
        discount: "url('./assets/discount.svg')",
        footer: "url('./assets/footer.svg')",
        bgPlay: "url('./assets/bg-play.svg')",
      },
    },
  },
  plugins: [],
};

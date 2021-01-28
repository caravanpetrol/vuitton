module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/scss/_normalize.scss";
            @import "@/assets/scss/_fonts.scss";
            @import "@/assets/scss/_functions.scss";
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mq.scss";
        `,
      },
    },
  },
};

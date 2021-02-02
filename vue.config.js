module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/abstracts/_functions.scss";
        @import "@/assets/scss/abstracts/_variables.scss";
        @import "@/assets/scss/abstracts/_mq.scss";
        @import "@/assets/scss/abstracts/_utils.scss";
        @import "@/assets/scss/abstracts/_fonts.scss";
        @import "@/assets/scss/base/_normalize.scss";
        @import "@/assets/scss/base/_animations.scss";
        @import "@/assets/scss/base/_base.scss";
        @import "@/assets/scss/base/_buttons.scss";
        @import "@/assets/scss/base/_icons.scss";
        @import "@/assets/scss/base/_search.scss";
        `,
      },
    },
  },
};

module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `
                @import "@/assets/stylesheets/palette.scss";
                @import "@/assets/stylesheets/reset.scss";
                @import "@/assets/stylesheets/fonts.scss";
                @import "@/assets/stylesheets/variables.scss";
            `
        }
      }
    }
};
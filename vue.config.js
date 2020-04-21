module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  outputDir: "dist",
  publicPath:
    process.env.NODE_ENV === "production" ? "/company-site-frontend/" : "/"
};

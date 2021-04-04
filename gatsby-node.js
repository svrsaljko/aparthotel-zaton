exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production" || getConfig().mode === "development") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

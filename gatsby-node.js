exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production" || getConfig().mode === "development") {
    console.log("jeee")
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

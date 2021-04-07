exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production" || getConfig().mode === "development") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

exports.createPages = async props => {
  // console.log("STOOOOOOOOO JE OVO: props:", props)
}

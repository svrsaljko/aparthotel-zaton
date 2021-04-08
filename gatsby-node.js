const path = require("path")

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production" || getConfig().mode === "development") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query RegionBlogQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(data/region)/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    const { slug } = node.frontmatter
    actions.createPage({
      path: "/destination/" + slug,
      component: path.resolve("./src/templates/region-details.js"),
      context: { slug }, // query variable
    })
  })
}

const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production" || getConfig().mode === "development") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query PagesQuery {
      regionMarkdowns: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(data/region)/" } }
      ) {
        regions: nodes {
          frontmatter {
            slug
          }
        }
      }

      galleryMarkdowns: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(data/gallery)/" } }
      ) {
        galleries: nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.regionMarkdowns.regions.forEach(node => {
    const { slug } = node.frontmatter
    actions.createPage({
      path: "/destination/" + slug,
      component: path.resolve("./src/templates/region-details.js"),
      context: { slug }, // query variable
    })
  })

  data.galleryMarkdowns.galleries.forEach(node => {
    const { slug } = node.frontmatter
    actions.createPage({
      path: "/gallery/" + slug,
      component: path.resolve("./src/templates/gallery-blog.js"),
      context: { slug }, // query variable
    })
  })
}

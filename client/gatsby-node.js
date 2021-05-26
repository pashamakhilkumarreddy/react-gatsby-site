const path = require("path")

const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`${__dirname}/src/templates/article.js`)
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  // response.allContentfulBlogPost.edges.forEach(edge => {
  //   createPage({
  //     component: blogTemplate,
  //     path: `/blog/${edge.node.slug}`,
  //     context: {
  //       slug: edge.node.slug,
  //     },
  //   })
  // })
}

module.exports.onCreateNode = onCreateNode
module.exports.createPages = createPages

const path = require("path")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`${__dirname}/src/templates/article.js`)
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  console.log(response.allContentfulBlogPost)
}

module.exports.createPages = createPages

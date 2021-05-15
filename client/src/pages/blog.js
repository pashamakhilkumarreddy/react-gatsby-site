import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Layout from "../layouts"

const Blog = () => {
  const markDownData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="columns is-centered is-vcentered is-mobile is-multiline">
        {markDownData.allMarkdownRemark.edges.map(({ node }, i) => (
          <div
            className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fulld box"
            key={i.toString()}
          >
            {node.frontmatter.title}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Blog

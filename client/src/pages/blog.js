import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/MainLayout"
import BlogPost from "../components/BlogPost"

const Blog = () => {
  const articles = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              date
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="columns is-justify-content-space-around is-vcentered is-mobile is-multiline">
        {articles.allMarkdownRemark.edges.map(({ node }, i) => (
          <BlogPost
            key={i.toString()}
            title={node.frontmatter.title}
            slug={node.fields.slug}
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Blog

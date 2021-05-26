import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/MainLayout"
import BlogPost from "../components/BlogPost"
import Head from "../components/Head"

const Blog = () => {
  const articles = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
            title
            publishedDate(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `)
  return (
    <>
      <Head title="Blog" />
      <Layout>
        <div className="columns is-justify-content-space-around is-vcentered is-mobile is-multiline">
          {articles.allContentfulBlogPost.edges.map(({ node }, i) => (
            <BlogPost
              key={i.toString()}
              title={node.title}
              slug={node.slug}
              date={node.publishedDate}
              timeToRead={node.timeToRead}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Blog

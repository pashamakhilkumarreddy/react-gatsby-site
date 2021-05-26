import { graphql } from "gatsby"
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import PropTypes from "prop-types"
import Layout from "../layouts/MainLayout"
import Head from "../components/Head"

const Article = ({ data }) => {
  const { references, raw } = data.contentfulBlogPost.body
  const parsedBody = JSON.parse(raw)
  const options = {
    renderNode: {
      "embedded-asset-block"(node) {
        const name = references[0].file.fileName.split(".")[0]
        const alt =
          name.slice(0, 1).toUpperCase() +
          name.slice(1, name.length).toLowerCase()
        const url = references[0].file.url
        return (
          <img
            src={url}
            alt={alt}
            className="mt-3"
            loading="lazy"
            decoding="async"
          />
        )
      },
    },
  }
  return (
    <>
      <Head title={data.contentfulBlogPost.title} />
      <Layout>
        <div className="columns is-centered is-vcentered">
          <div className="column is-12-mobile is-12-tablet is-10-desktop is-10-widescreen is-10-fullhd">
            <h2 className="title is-2">{data.contentfulBlogPost.title}</h2>
            <div className="is-flex has-flex-direction-column">
              <time
                dateTime={data.contentfulBlogPost.publishedDate}
                className="is-italic"
              >
                {new Date(data.contentfulBlogPost.publishedDate).toDateString()}
              </time>

              {data.contentfulBlogPost.timeToRead ? (
                <>
                  <span className="px-2">&#124;</span>
                  <p>
                    {data.contentfulBlogPost.timeToRead > 1
                      ? `${data.contentfulBlogPost.timeToRead} minutes`
                      : `${data.contentfulBlogPost.timeToRead} minute`}{" "}
                    read
                  </p>
                </>
              ) : null}
            </div>
            <div className="mt-3">
              {documentToReactComponents(parsedBody, options)}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         description
//         date
//       }
//       timeToRead
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM DD, YYYY")
      body {
        raw
        references {
          file {
            url
            fileName
          }
        }
      }
    }
  }
`

export default Article

import { graphql } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import Layout from "../layouts/MainLayout"

const Article = ({ data }) => {
  return (
    <Layout>
      <div className="columns is-centered is-vcentered">
        <div className="column is-12-mobile is-12-tablet is-10-desktop is-10-widescreen is-10-fullhd">
          <h2 className="title is-2">
            {data.markdownRemark.frontmatter.title}
          </h2>
          <div className="is-flex has-flex-direction-column">
            <time
              dateTime={data.markdownRemark.frontmatter.date}
              className="is-italic"
            >
              {new Date(data.markdownRemark.frontmatter.date).toDateString()}
            </time>
            <span className="px-2">&#124;</span>
            <p>
              {data.markdownRemark.timeToRead > 1
                ? `${data.markdownRemark.timeToRead} minutes`
                : `${data.markdownRemark.timeToRead} minute`}{" "}
              read
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date
      }
      timeToRead
      html
    }
  }
`

export default Article

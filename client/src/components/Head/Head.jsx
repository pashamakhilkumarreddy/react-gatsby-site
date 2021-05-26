import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet-async"

const Head = ({ title = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>{`${data.site.siteMetadata.title} | ${title}`}</title>
      <meta name="description" content="React Gatsby Demo" />
      <meta name="keywords" content="React, Gatsby, JavaScript" />
      <meta name="author" content="Akhil" />
    </Helmet>
  )
}

export default Head

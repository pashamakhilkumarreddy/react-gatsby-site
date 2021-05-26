import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title = "" }) => {
  return (
    <Helmet>
      <title>{`React Gatsby Demo | ${title}`}</title>
      <meta name="description" content="React Gatsby Demo" />
      <meta name="keywords" content="React, Gatsby, JavaScript" />
      <meta name="author" content="Akhil" />
    </Helmet>
  )
}

export default Head

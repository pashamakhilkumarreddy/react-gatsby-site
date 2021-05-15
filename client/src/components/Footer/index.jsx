import { graphql, useStaticQuery } from "gatsby"
import React, { memo } from "react"
import * as FooterStyles from "../../assets/styles/scss/footer.module.scss"

const Footer = () => {
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
    <footer className={FooterStyles.footer}>
      <div className="content has-text-centered">
        <p className="title is-4">&copy; 2021 {data.site.siteMetadata.title}</p>
      </div>
    </footer>
  )
}

export default memo(Footer)

import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"

const PageNotFound = () => {
  return (
    <Layout>
      <div className="columns is-centered is-vcentered is-mobile">
        <div className="column is-full-mobile is-full-tablet is-full-desktop is-full-widescreen is-full-fullhd has-text-centered">
          <h2 className="title is-2">Page Not Found</h2>
          <Link to="/" className="button is-info is-light">
            Go to Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default PageNotFound

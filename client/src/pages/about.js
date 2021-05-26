import React, { memo } from "react"
import Layout from "../layouts/MainLayout"
import Head from "../components/Head"

const About = () => {
  return (
    <>
      <Head title="About" />
      <Layout>
        <div className="columns is-centered is-vcentered is-mobile">
          <div className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
            <h2 className="title is-2">About</h2>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default memo(About)

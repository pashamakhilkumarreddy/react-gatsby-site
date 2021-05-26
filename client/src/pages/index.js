import React, { memo } from "react"
import Layout from "../layouts/MainLayout"
import Head from "../components/Head"

const Home = () => {
  return (
    <>
      <Head title="Home" />
      <Layout>
        <div className="columns is-centered is-vcentered is-mobile">
          <div className="column is-full-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
            <h2 className="title is-2 has-text-centered">Home</h2>
          </div>
        </div>
      </Layout>
    </>
  )
}

Home.propTypes = {}

export default memo(Home)

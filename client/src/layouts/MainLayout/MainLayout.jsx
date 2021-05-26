import React from "react"
import PropTypes from "prop-types"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "../../assets/styles/scss/main.scss"

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mt-6">{children}</main>
      <Footer />
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any,
}

export default MainLayout

import React, { memo, useState } from "react"
import { Link } from "gatsby"
import * as HeaderStyles from "../../assets/styles/scss/header.module.scss"

const Header = () => {
  const [display, setDisplay] = useState(false)
  return (
    <header className={HeaderStyles.header}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="" alt="Logo" loading="lazy" decoding="async" />
          </Link>

          <span // eslint-disable-line jsx-a11y/click-events-have-key-events
            role="button"
            className={`navbar-burger ${display ? "is-active" : ""}`}
            onClick={() => setDisplay(display => !display)}
            aria-label="menu"
            aria-expanded="false"
            data-target="main-navbar"
            tabIndex={0}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div
          id="main-navbar"
          className={`navbar-menu ${display ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
          </div>
          <div className="navbar-end">
            <Link to="/blog" className="navbar-item">
              Blog
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default memo(Header)

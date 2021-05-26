import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const BlogPost = ({
  slug = "",
  title = "",
  date = new Date(),
  timeToRead = 0,
}) => {
  return (
    <div className="column is-11-mobile is-5-tablet is-5-desktop is-4-widescreen is-4-fulld box is-flex is-flex-direction-column">
      <Link to={`/blog/${slug}`} className="title is-4 mb-2">
        <span>{title}</span>
      </Link>
      <div className="is-flex is-flex-direction-row pt-2 is-size-6">
        <time dateTime={date} className="is-italic">
          {new Date(date).toGMTString()}
        </time>
        <span className="px-2">&#124;</span>
        <span>{timeToRead > 0 ? `${timeToRead} min` : ""}</span>
      </div>
    </div>
  )
}

BlogPost.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.any.isRequired,
  timeToRead: PropTypes.number.isRequired,
}

export default BlogPost

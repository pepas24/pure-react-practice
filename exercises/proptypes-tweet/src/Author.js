import React from "react";
import PropTypes from "prop-types"

export function Author({ author }) {
  const { handle, name } = author
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  )
}
Author.propTypes = {
  author: PropTypes.shape({
    handle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
}

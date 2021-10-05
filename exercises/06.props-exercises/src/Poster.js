import React from "react";
import PropTypes from "prop-types"

export function Poster({ image, title, text }) {
  return (
    <div className="poster">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
Poster.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

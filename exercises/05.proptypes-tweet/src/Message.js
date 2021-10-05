import React from "react";
import PropTypes from "prop-types"

export function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  )
}
Message.propType = {
  text: PropTypes.string.isRequired
}

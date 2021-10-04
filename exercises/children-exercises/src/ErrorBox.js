import React from "react";
import PropTypes from "prop-types"

export function ErrorBox({ children }) {
  return (
    <div className="error-box">
      <i className="bx bx-traffic-cone"/>
      {children}
    </div>
  )
}
ErrorBox.propTypes = {
  children: PropTypes.node.isRequired
}

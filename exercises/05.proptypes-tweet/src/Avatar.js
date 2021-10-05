import React from "react";
import PropTypes from "prop-types"

export function Avatar({ avatarUrl }) {
  return (
    <img
      src={avatarUrl}
      alt="avatar"
      className="avatar"
    />
  )
}
Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired
}

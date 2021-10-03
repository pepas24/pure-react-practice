import React from "react";
import PropTypes from "prop-types"

export function AddressLabel({ person }) {
  const { name, address, state } = person
  return (
    <div className="address">
      <p>{name}</p>
      <p>{address}</p>
      <p>{state}</p>
    </div>
  )
}
AddressLabel.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  })
}

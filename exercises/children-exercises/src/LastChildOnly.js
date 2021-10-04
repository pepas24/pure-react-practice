import React from "react";
import PropTypes from "prop-types"

export function LastChildOnly({ children }) {
  const childrenArray = React.Children.toArray(children)
  const lastChild = childrenArray[childrenArray.length - 1]

  return (
    <div>
      <p>Children received: {childrenArray.length}</p>
      <div>
        {lastChild}
      </div>
    </div>
  )
}
LastChildOnly.propTypes = {
  children: PropTypes.node.isRequired
}

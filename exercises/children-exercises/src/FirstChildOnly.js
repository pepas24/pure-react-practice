import React from "react";
import PropTypes from "prop-types"

export function FirstChildOnly({ children }) {
  const childrenArray = React.Children.toArray(children)
  const firstChild = childrenArray[0]

  return (
    <div>
      <p>Children received: {childrenArray.length}</p>
      <div>
        {firstChild}
      </div>
    </div>
  )
}
FirstChildOnly.propTypes = {
  children: PropTypes.node.isRequired
}

import React from "react";
import PropTypes from "prop-types"

export function Head({number, children}) {
  const childrenArray = React.Children.toArray(children)
  const childrenToShow = childrenArray.slice(0, number)

  return (
    <div>
      <p>Children received: {childrenArray.length}</p>
      <p>Children to show: {childrenToShow.length}</p>
      <div>
        {childrenToShow.map( child => child)}
      </div>
    </div>
  )
}
Head.propTypes = {
  number: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}

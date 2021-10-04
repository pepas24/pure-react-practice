import React from "react";
import PropTypes from "prop-types"

export function Tail({ number, children }) {
  const childrenArray = React.Children.toArray(children)
  const childrenToShow = childrenArray.slice(-number)

  return (
    <div>
      <p>Children received: {childrenArray.length}</p>
      <p>Children to show: {childrenToShow.length}</p>
      <div>
        {childrenToShow.map(child => child)}
      </div>
    </div>
  )
}
Tail.propTypes = {
  number: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

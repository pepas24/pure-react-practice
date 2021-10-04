import React from "react";
import PropTypes from "prop-types"

export function Title({ children }) {
  return (
    <div className="dialog__title">
      <h3>{children}</h3>
    </div>
  )
}

export function Body({ children }) {
  return <div className="dialog__body">{children}</div>
}

export function Footer({ children }) {
  return <div className="dialog__footer">{children}</div>
}

export function Dialog({ children }) {
  return (
    <div className="dialog">
      {children}
    </div>
  )
}

const acceptedComponents = (propValue, key, componentName, location, propFullName) => {
  const allowedComponents = ['Title', 'Body', 'Footer']
  if (allowedComponents.indexOf(propValue[key].type.name) === -1) {
    return new Error(`Invalid prop ${propFullName} passed to ${componentName}. Expected one of type ${allowedComponents.toString()}.`)
  }
}

Dialog.propTypes = {
  children: PropTypes.arrayOf(acceptedComponents)
}

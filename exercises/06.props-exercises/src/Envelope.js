import React from "react";
import PropTypes from "prop-types"
import { AddressLabel } from "./AddressLabel";
import { Stamp } from "./Stamp";

export function Envelope({toPerson, fromPerson}) {
  return (
    <div className="envelope">
      <AddressLabel person={toPerson}/>
      <AddressLabel person={fromPerson}/>
      <Stamp />
    </div>
  )
}
Envelope.propTypes = {
  fromPerson: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    state: PropTypes.string
  }),
  toPerson: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    state: PropTypes.string
  })
}

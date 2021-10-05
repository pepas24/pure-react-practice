import React from "react";
import PropTypes from "prop-types"

export function CreditCard({ cardInfo }) {
  const { bank, personName, expirationDate, cardNumber } = cardInfo

  const formatCardNumber = (number) => {
    let formatedNumber = ''
    const characters = number.split('')
    characters.forEach((char, index) => {
      if ((index + 1) % 4 === 0) {
        char = char + ' '
      }
      formatedNumber += char
    })
    return formatedNumber
  }

  return (
    <div className="credit-card">
      <h3 className="bank-name">{bank}</h3>
      <p className="card-number">{formatCardNumber(cardNumber)}</p>
      <p className="expiration-date">{expirationDate}</p>
      <p className="person-name">{personName}</p>
    </div>
  )
}
CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    bank: PropTypes.string.isRequired,
    personName: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
  })
}

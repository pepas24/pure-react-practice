import React from "react";
import PropTypes from "prop-types"

export function SingleLineEmail({ email }) {
  const { sender, subject, date, message } = email

  return (
    <div className="single-line-email">
      <div className="actions">
        <input type="checkbox" />

      </div>
      <div className="content">
        <div className="content-first-line">
          <p className="sender">{sender}</p>
          <span>{subject}</span>
        </div>
        <p className="message">{message}</p>
      </div>
      <p>{date}</p>
    </div>
  )
}
SingleLineEmail.propTypes = {
  email: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })
}

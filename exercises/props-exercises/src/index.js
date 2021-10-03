import React from "react"
import ReactDom from "react-dom"

import "./index.css"

import { AddressLabel } from "./AddressLabel"
import { CreditCard } from "./CreditCard"
import { Envelope } from "./Envelope"
import { Poster } from "./Poster"
import { SingleLineEmail } from "./SingleLineEmail"

function App () {
  const sender = {
    name: "Mr. Sender",
    address: "123 Fake St.",
    state: "Boston, MA 02118"
  }

  const receiver = {
    name: "Mr. Receiver",
    address: "123 Fake St.",
    state: "San Francisco, CA 94101"
  }

  const cardInfo = {
    bank: "Big Bank Inc.",
    cardNumber: "1234567887654321",
    expirationDate: "08/19",
    personName: "Cardholder Name"
  }

  const testEmail = {
    sender: "React Newsletter",
    subject: "React Newsletter · Issue 36",
    message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque asperiores tenetur at eveniet velit nam officiis autem tempore unde nisi.",
    date: "Jul. 15"
  }

  return (
    <div>
      <h2>Create an AddressLabel component</h2>
      <AddressLabel person={{
        name: "Full Name",
        address: "123 Fake St.",
        state: "Boston, MA 02118"
      }}/>
      <hr />

      <h2>Create an Envelop component</h2>
      <Envelope fromPerson={sender} toPerson={receiver}/>
      <hr />

      <h2>Create a CreditCard component</h2>
      <CreditCard cardInfo={cardInfo}/>
      <hr />

      <h2>Create a Poster component</h2>
      <Poster
        image="http://localhost:3000/logo192.png"
        title="React"
        text="The best thing since jQuery, probably"
      />
      <hr />

      <h2>Create a SingleLineEmail component</h2>
      <SingleLineEmail email={testEmail}/>
    </div>
  )
}

ReactDom.render(
  <App />,
  document.querySelector('#root')
)

import React from "react"
import ReactDom from "react-dom"

import "./index.css"

import { ErrorBox } from "./ErrorBox"
import { FirstChildOnly } from "./FirstChildOnly"
import { LastChildOnly } from "./LastChildOnly"
import { Head } from "./Head"
import { Tail } from "./Tail"
import { Dialog, Title, Body, Footer } from "./Dialog"

function App() {
  return (
    <div>
      <h2>Make an ErrorBox componente that receive a children prop</h2>
      <ErrorBox>
        Something has gone wrong
      </ErrorBox>
      <hr />

      <h2>Use React.Children.toArray</h2>
      <h3>FirstChildOnly</h3>
      <FirstChildOnly>
        <p>Hello 1</p>
        <p>Hello 2</p>
        <p>Hello 3</p>
      </FirstChildOnly>

      <h3>LastChildOnly</h3>
      <LastChildOnly>
        <p>Hello 1</p>
        <p>Hello 2</p>
        <p>Hello 3</p>
      </LastChildOnly>

      <h3>Head</h3>
      <Head number={3}>
        <p>Hello 1</p>
        <p>Hello 2</p>
        <p>Hello 3</p>
        <p>Hello 4</p>
        <p>Hello 5</p>
        <p>Hello 6</p>
        <p>Hello 7</p>
      </Head>

      <h3>Tail</h3>
      <Tail number={3}>
        <p>Hello 1</p>
        <p>Hello 2</p>
        <p>Hello 3</p>
        <p>Hello 4</p>
        <p>Hello 5</p>
        <p>Hello 6</p>
        <p>Hello 7</p>
      </Tail>
      <hr />

      <h2>Dialog component</h2>
      <Dialog>
        <Title>This is important</Title>
        <Body>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sit magni est debitis veniam quo laborum iste nobis ea maxime?</Body>
        <Footer>
          <button>Close</button>
        </Footer>
      </Dialog>
    </div>
  )
}

ReactDom.render(
  <App />,
  document.querySelector("#root")
)

import React from 'react'
import ReactDOM from 'react-dom'
import { ConditionalRendering } from './ConditionalRendering'
import { RenderThis } from './RenderThis'
import { RenderThisReactCreateElement } from './RenderThisReactCreateElement'
import { Table } from './Table'

function MyThing() {
  return (
    <div>
      <h3>1. Render something</h3>
      <RenderThis />
      <hr />

      <h3>2. White space in JSX</h3>
      <h4>Single lines</h4>
      <div>
        Newline
        Test
      </div>

      <h4>Empty newlines</h4>
      <div>
        Empty

        Newlines

        Here
      </div>

      <h4>Spaces with newlines</h4>
      <div>
        &nbsp;Non-breaking
        &nbsp;Spaces&nbsp;
      </div>

      <h4>Using space inside expresion</h4>
      <div>
        Line1
        {' '}
        Line2
      </div>
      <hr />

      <h3>Render This with React.createElement</h3>
      <RenderThisReactCreateElement />
      <hr />

      <h3>Conditional rendering</h3>
      <ConditionalRendering />
      <hr />

      <h3>Nested components</h3>
      <Table/>
    </div>
  )
}

ReactDOM.render(
  <MyThing />,
  document.querySelector('#root')
)

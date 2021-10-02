import React from "react";

export function RenderThisReactCreateElement() {
  return React.createElement(
    'div',
    { className: 'book' },
    React.createElement(
      'div',
      { className: 'title' },
      'The title',
    ),
    React.createElement(
      'div',
      { className: 'author' },
      'The Author',
    ),
    React.createElement(
      'ul',
      { className: 'stats' },
      React.createElement(
        'li',
        { className: 'rating' },
        '5 stars',
      ),
      React.createElement(
        'li',
        { className: 'isbn' },
        '12-345678-910',
      )
    )
  )
}

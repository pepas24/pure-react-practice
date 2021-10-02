import React from "react";

export function RenderThis() {
  return (
    <div className="book">
      <div className="title">
        The title
      </div>
      <div className="author">
        The Author
      </div>
      <ul className="stats">
        <li className="rating">
          5 stars
        </li>
        <li className="isbn">
          12-345678-910
        </li>
      </ul>
    </div>
  )
}

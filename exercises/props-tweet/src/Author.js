import React from "react";

export function Author({ author }) {
  const { handle, name } = author
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  )
}

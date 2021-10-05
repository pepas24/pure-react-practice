import React from "react";

export function Avatar({ avatarUrl }) {
  return (
    <img
      src={avatarUrl}
      alt="avatar"
      className="avatar"
    />
  )
}

import React from "react";

export function ConditionalRendering() {
  let username = "root"
  // let username = undefined
  // let username = null
  // let username = false

  return (
    <div>
      { !username
        ? `Not logged in`
        : `Hello, username`
      }
    </div>
  )
}

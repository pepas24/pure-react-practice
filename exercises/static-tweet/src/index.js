import React from 'react'
import ReactDom from 'react-dom'

import { Author } from './Author'
import { Avatar } from './Avatar'
import { Message } from './Message'

import './index.css'

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <div className="heading">
          <div>
            <Author /><Time />
          </div>
          <MoreOptionsButton />
        </div>
        <Message />
        <div className="actions">
          <CommentButton />
          <RetweetButton />
          <ShareButton />
          <LikeButton />
        </div>
      </div>
    </div>
  )
}

const Time = () => (
  <span className="time">3h</span>
)

const MoreOptionsButton = () => (
  <i className="bx bx-dots-horizontal-rounded"></i>
)

const CommentButton = () => (
  <i className="bx bx-message-rounded"></i>
)

const RetweetButton = () => (
  <i className="bx bx-refresh"></i>
)

const ShareButton = () => (
  <i className="bx bx-share-alt"></i>
)

const LikeButton = () => (
  <i className="bx bx-heart"></i>
)

ReactDom.render(
  <Tweet />,
  document.querySelector('#root')
)

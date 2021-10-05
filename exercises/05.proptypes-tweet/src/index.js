import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

import moment from "moment"

import { Author } from './Author'
import { Avatar } from './Avatar'
import { Message } from './Message'

import './index.css'

function Tweet({ tweet }) {
  return (
    <>
    <div className="tweet">
      <Avatar avatarUrl={tweet.avatar}/>
      <div className="content">
        <div className="heading">
          <div>
            <Author author={tweet.author}/>
            <Time time={tweet.timestamp}/>
          </div>
          <MoreOptionsButton />
        </div>
        <Message text={tweet.message}/>
        <div className="actions">
          <CommentButton />
          <RetweetButton count={tweet.retweets}/>
          <ShareButton />
          <LikeButton count={tweet.likes}/>
        </div>
      </div>
    </div>
    </>
  )
}
Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    author: PropTypes.shape({
      handle: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    likes: PropTypes.number,
    retweets: PropTypes.number,
    timestamp: PropTypes.string.isRequired,
  })
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow()
  return (
    <span className="time">{timeString}</span>
  )
}
Time.propTypes = {
  time: PropTypes.string.isRequired
}

const MoreOptionsButton = () => (
  <span className="more-options-button">
    <i className="bx bx-dots-horizontal-rounded"></i>
  </span>
)

const CommentButton = () => (
  <span className="comment-button">
    <i className="bx bx-message-rounded"></i>
  </span>
)

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>
  } else {
    return null
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="bx bx-refresh"></i>
    {getRetweetCount(count)}
  </span>
)
RetweetButton.propTypes = {
  count: PropTypes.number
}

const ShareButton = () => (
  <span className="share-button">
    <i className="bx bx-share-alt"></i>
  </span>
)

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="bx bx-heart" />
    {
      count > 0 &&
      <span className="like-count">{count}</span>
    }
  </span>
)
LikeButton.propTypes = {
  count: PropTypes.number
}

const testTweet = {
  message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquam saepe minus repudiandae perferendis itaque maxime aliquid id doloribus sapiente.",
  avatar: "https://avatars.githubusercontent.com/u/26932904?s=40&v=4",
  author: {
    handle: "sgutierrez",
    name: "Sebastian Gutierrez",
  },
  likes: 2,
  retweets: 3,
  timestamp: "2021-10-01 21:24:37",
}

ReactDom.render(
  <Tweet tweet={testTweet}/>,
  document.querySelector('#root')
)

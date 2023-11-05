import React from 'react'

const Comment = ({comment}) => {
  return (
    <>
    <h3>{comment.user}</h3>
    <span>{comment.comment}</span>
    </>
  )
}

export default Comment
import React from 'react'

const VideoDetails = ({views, createdAt}) => {
  return (
    <div>
        <span>{views} Views |</span>
        <span> Uploaded {createdAt}</span>
    </div>
  )
}

export default VideoDetails
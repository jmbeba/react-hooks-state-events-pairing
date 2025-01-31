import React from "react";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;

import React from "react";

const Votes = ({ votes, setVotes }) => {
  return (
    <div style={{ marginTop: 10 }}>
      <button
        onClick={() =>
          setVotes((prev) => {
            return {
              ...prev,
              upvotes: prev.upvotes + 1,
            };
          })
        }
      >
        {votes.upvotes} 👍🏽
      </button>
      <button
        onClick={() =>
          setVotes((prev) => {
            return {
              ...prev,
              downvotes: prev.downvotes + 1,
            };
          })
        }
      >
        {votes.downvotes} 👎🏽
      </button>
    </div>
  );
};

export default Votes;

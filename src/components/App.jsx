import { useState } from "react";
import video from "../data/video.js";
import VideoDetails from "./VideoDetails.jsx";
import Votes from "./Votes.jsx";
import Comments from "./Comments.jsx";

function App() {
  // console.log("Here's your data:", video);
  const [votes, setVotes] = useState({
    upvotes: video.upvotes,
    downvotes: video.downvotes,
  });
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <VideoDetails views={video.views} createdAt={video.createdAt} />
      <Votes votes={votes} setVotes={setVotes} />
      <button
        onClick={() => setShowComments((prev) => !prev)}
        style={{ marginTop: 10 }}
      >
        {showComments ? "Hide comments" : "Show comments"}
      </button>
      <hr />
      <h2>{video.comments.length} Comments</h2>
      {showComments ? <Comments comments={video.comments} /> : null}
    </div>
  );
}

export default App;

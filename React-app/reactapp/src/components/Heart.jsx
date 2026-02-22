import { useState } from "react";
import "./Heart.css";

function Heart({ title }) {
  const [likes, setLikes] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);

    // animation trigger
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 300);
  };

  return (
    <div className="card">
      <h2>{title}</h2>

      <div>
        <span className={animate ? "heart animate" : "heart"}>❤️</span>
        <p>{likes} Likes</p>
      </div>

      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default Heart;

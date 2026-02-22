import { useState } from "react";
import "./LikeButton.css";

function LikeButton({ title }) {
  const [likes, setLikes] = useState(0);
  const [showHeart, setShowHeart] = useState(false);

  const handleDoubleClick = () => {
    setLikes(likes + 1);
    setShowHeart(true);

    setTimeout(() => {
      setShowHeart(false);
    }, 600);
  };

  return (
    <div className="card">
      <h2>{title}</h2>

      <div className="image-area" onDoubleClick={handleDoubleClick}>
        📸
        {showHeart && <span className="big-heart">❤️</span>}
      </div>

      <p>❤️ {likes} Likes</p>
    </div>
  );
}

export default LikeButton;

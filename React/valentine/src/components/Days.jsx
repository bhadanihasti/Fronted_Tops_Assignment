import React, { useRef } from "react";
import "./Design.css";
import { useNavigate } from "react-router-dom";

function Days() {
  const navigate = useNavigate();
  const noBtn = useRef();

  function moveNo() {
    const maxWidth = 400;
    const maxHeight = 200;

    const ranomX = Math.floor(Math.random() * maxWidth);
    const ranomY = Math.floor(Math.random() * maxHeight);

    noBtn.current.style.left = ranomX + "px";
    noBtn.current.style.top = ranomY + "px";
  }
  return (
    <div className="box">
      <h2>Hello!!</h2>
      <h2>Will You Be My Valentine?❤️</h2>

      <div className="btn">
        <button className="yes" onClick={() => navigate("/yes")}>
          Yes
        </button>

        <div className="no-wrapper">
          <button className="no" ref={noBtn} onMouseEnter={moveNo}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
export default Days;

import React, { useState } from "react";

function Vote() {
  const [Vote, setVote] = useState("18");
  const handleChange = (e) => {
    setVote(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="vote"
        id=""
        placeholder="Enter Your Age"
        value={Vote}
        onChange={handleChange}
      />
      <h2>{Vote >= 18 ? "you give Vote" : "you not give Vote"}</h2>
    </div>
  );
}

export default Vote;

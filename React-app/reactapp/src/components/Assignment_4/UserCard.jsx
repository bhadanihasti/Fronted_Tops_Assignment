import React from "react";

function UserCard({ name, age, location }) {
  const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "250px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      margin: "auto",
    },
  };
  return (
    <div style={styles.card}>
      <h2>my name is {name}</h2>
      <h2>my age is {age}</h2>
      <h2>i live in {location}</h2>
    </div>
  );
}

export default UserCard;

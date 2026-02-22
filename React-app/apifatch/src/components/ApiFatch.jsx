import React, { useEffect, useState } from "react";

function ApiFatch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });
  return (
    <div>
      <h1>API Users List</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((users) => (
          <div
            key={users.id}
            style={{
              background: "#f2f2f2",
              padding: "10px",
              margin: "10px",
              borderRadius: "20px",
            }}
          >
            <p>
              <strong>User:</strong> {users.name}
            </p>
            <p>
              <strong>Email:</strong> {users.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiFatch;

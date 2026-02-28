import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false); // 👈 data aavi gaya pachi loading false
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {loading && <p>Loading...</p>}

      {!loading && users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

export default Users;

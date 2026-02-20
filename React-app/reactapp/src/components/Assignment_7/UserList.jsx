import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Hasti", age: 22 },
    { id: 2, name: "Bali", age: 25 },
    { id: 3, name: "Priya", age: 23 },
    { id: 4, name: "Vishva", age: 24 },
  ];
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {users.map((users) => (
          <li key={users.id}>
            <strong>{users.name} </strong>-Age:{users.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

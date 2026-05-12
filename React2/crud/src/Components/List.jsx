import React from "react";

function List({ ele, index, deleteStudent, EditHandler }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{ele.username}</td>
      <td>{ele.email}</td>
      <td>{ele.phone}</td>
      <td>
        <button
          className="btn btn-warning btn-sm"
          onClick={() => EditHandler(index)}
        >
          Edit
        </button>
        &nbsp;
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteStudent(index)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default List;

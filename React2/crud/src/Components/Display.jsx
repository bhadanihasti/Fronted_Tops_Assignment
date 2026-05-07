import React from "react";
import List from "./List";

function Display({ students, deleteStudent }) {
  return (
    <div className="card shadow border-0 rounded-4">
      <div className="card-header bg-primary text-white text-center py-3 rounded-top-4">
        <h3 className="mb-0">User Data</h3>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((ele, index) => (
                <List
                  key={index}
                  ele={ele}
                  index={index}
                  deleteStudent={deleteStudent}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Display;

import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Components/Create";
import Display from "./Components/Display";
import { useState } from "react";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (data) => {
    setStudents([...students, data]);
  };

  const deleteStudent = (index) => {
    const newStudents = students.filter((ele, i) => {
      return i !== index;
    });
    setStudents(newStudents);
  };

  return (
    <div className="container py-5">
      <Create addStudent={addStudent} />
      <Display students={students} deleteStudent={deleteStudent} />
    </div>
  );
};

export default App;

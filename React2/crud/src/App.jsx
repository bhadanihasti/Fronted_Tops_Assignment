import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Components/Create";
import Display from "./Components/Display";
import { useState } from "react";

const App = () => {
  const [students, setStudents] = useState([]);
  var [editstduent, setEditStudent] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const addStudent = (data) => {
    if (editIndex !== null) {
      const updatedStudents = students.map((student, index) =>
        index === editIndex ? data : student,
      );
      setStudents(updatedStudents);
      setEditIndex(null);
      // setEditIndex({});
    } else {
      setStudents([...students, data]);
    }
  };

  const deleteStudent = (index) => {
    const newStudents = students.filter((ele, i) => {
      return i !== index;
    });
    setStudents(newStudents);
  };

  const EditHandler = (index) => {
    const data = students.find((ele, i) => {
      return i === index;
    });

    setEditStudent(data);
    setEditIndex(index);
  };

  return (
    <div className="container py-5">
      <Create
        addStudent={addStudent}
        editstduent={editstduent}
        editIndex={editIndex}
      />
      <Display
        students={students}
        deleteStudent={deleteStudent}
        EditHandler={EditHandler}
      />
    </div>
  );
};

export default App;

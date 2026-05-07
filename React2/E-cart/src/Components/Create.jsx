import { useState } from "react";

export const Create = ({ addProduct }) => {
  var [name, setName] = useState("");
  const SubmitData = (e) => {
    e.preventDefault();
    addProduct(name);
    setName("");
  };
  return (
    <>
      <div className="form-group d-flex gap-2">
        <input
          type="text"
          placeholder="Enter product name"
          className="form-control"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <button className="btn btn-success" onClick={SubmitData}>
          Submit
        </button>
      </div>
    </>
  );
};
export default Create;

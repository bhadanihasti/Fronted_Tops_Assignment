import React, { useState } from "react";

function Form() {
  const [inputValue, setinputValue] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setinputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="text"
          placeholder="Type AnyThing"
          value={inputValue.text}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="age"
          placeholder="Type AnyThing"
          value={inputValue.age}
          onChange={handleChange}
        />
        <br />

        <h3>You Typed :{inputValue.text}</h3>

        <h3>You Typed :{inputValue.age}</h3>
      </form>
    </div>
  );
}

export default Form;

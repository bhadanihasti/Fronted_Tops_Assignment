import React, { useState } from "react";

function Form() {
  const [inputValue, setinputValue] = useState("");

  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="text"
          placeholder="Type AnyThing"
          value={inputValue}
          onChange={handleChange}
        />
        <br />

        <h3>You Typed :{inputValue}</h3>
      </form>
    </div>
  );
}

export default Form;

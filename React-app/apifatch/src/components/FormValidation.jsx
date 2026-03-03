import React, { useState } from "react";

function FormValidation() {
  const [form, setform] = useState({
    username: "",
    email: "",
  });
  const [error, seterror] = useState({});
  const [submit, setsubmit] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const validate = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};
    if (form.username.length < 5) {
      newError.username = "please Enter Valid UserName (min 5 chars)";
    }

    if (!validate(form.email)) {
      newError.email = "please Enter Valid Email";
    }

    seterror(newError);

    if (Object.keys(newError).length === 0) {
      alert("Form submmited successfully");
      setsubmit(form);
      setform({
        username: "",
        email: "",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <br />
          <span style={{ color: "red" }}>{error.username}</span>
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <br />
          <span style={{ color: "red" }}>{error.email}</span>
        </div>
        <button type="submit">Login</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3>Submitted Data:</h3>
        <p>Name: {submit.username}</p>
        <p>Email: {submit.email}</p>
      </div>
    </div>
  );
}

export default FormValidation;

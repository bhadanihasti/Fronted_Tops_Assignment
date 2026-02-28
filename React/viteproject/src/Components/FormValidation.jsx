import React, { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (formData.username.length < 5) {
      newErrors.username = "Please enter valid username (min 5 chars)";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter valid email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form Submitted Successfully ✅");

      setFormData({
        username: "",
        email: "",
      });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>React Form Validation</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <p style={{ color: "red" }}>{errors.username}</p>
        </div>

        <div>
          <label>Email:</label>
          <br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;

import React, { useState } from "react";

function UserDataForm() {
  const [userData, setuserData] = useState({
    uname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData({
      ...userData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!userData.uname.trim()) {
      newErrors.uname = "Name is required";
    }

    // Email validation (Regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(userData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(userData);
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(userData);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form>
        <div>
          <label htmlFor="uname">Name:</label>

          <input
            type="text"
            id="uname"
            name="uname"
            required
            placeholder="Enter your name"
            value={userData.uname}
            onChange={handleChange}
          />
          {errors.uname && <p style={{ color: "red" }}>{errors.uname}</p>}
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>

          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>

          <input
            type="password"
            id="password"
            name="password"
            required
            minLength="8"
            placeholder="Create a password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <br />
        <div>
          <button onClick={handleClick}>Register</button>
        </div>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.uname}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default UserDataForm;

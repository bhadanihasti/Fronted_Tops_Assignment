import React, { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome {}" : "Please Login"}</h2>
      <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}

export default Login;

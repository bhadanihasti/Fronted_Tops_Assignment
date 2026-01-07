// REGISTER
function register() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  if (!name || !email || !password) {
    alert("All fields required");
    return;
  }

  let user = {
    name,
    email,
    password
  };

  localStorage.setItem("userData", JSON.stringify(user));
  alert("Registration successful!");
  window.location.href = "login.html";
}

// LOGIN
function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let savedUser = JSON.parse(localStorage.getItem("userData"));

  if (!savedUser) {
    alert("No user found, please register first");
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
}

// PROTECT PAGE
function checkLogin() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    window.location.href = "login.html";
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

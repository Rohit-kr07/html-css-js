function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let message = document.getElementById("message");

  if (user === "" || pass === "") {
    message.style.color = "red";
    message.innerText = "All fields are required!";
  } 
  else if (pass.length < 6) {
    message.style.color = "red";
    message.innerText = "Password must be at least 6 characters!";
  }
  else {
    message.style.color = "green";
    message.innerText = "Login Successful!";
  }
}
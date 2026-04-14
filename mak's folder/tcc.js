function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("contactMsg").innerText = "Message sent!";
});

// Register
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");
  const registerMsg = document.getElementById("registerMsg");

  if (password.value !== confirm.value) {
    registerMsg.innerText = "Passwords do not match";
  } else {
    registerMsg.innerText = "Registered successfully!";
  }
});

// Login
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const loginUser = document.getElementById("loginUser");
  const loginPass = document.getElementById("loginPass");
  const loginMsg = document.getElementById("loginMsg");

  if (loginUser.value && loginPass.value) {
    loginMsg.innerText = "Login successful!";
  } else {
    loginMsg.innerText = "Invalid input";
  }
});
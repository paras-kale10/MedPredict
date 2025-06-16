// DOM Elements
const toggleBtn = document.getElementById("darkModeToggle");
const darkModeIcon = document.getElementById("darkModeIcon");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const cards = document.querySelectorAll(".card");
const loginBtn = document.getElementById("loginBtn");

// Dark Mode Toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
  cards.forEach(card => card.classList.toggle("dark-mode"));
  darkModeIcon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Login Button
loginBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

// Page Redirection
function redirectToPage(page) {
  window.location.href = page;
}
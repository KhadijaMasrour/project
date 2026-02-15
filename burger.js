const btn = document.getElementById("burger");
const sidebar = document.getElementById("Menu");

btn.onclick = () => {
  sidebar.classList.toggle("active");

  btn.textContent = sidebar.classList.contains("active") ? "✖" : "☰";

};


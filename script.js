const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  body.classList.add("dark-theme");
  if (themeToggle) themeToggle.innerText = "☀️";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    let theme = "light";
    if (body.classList.contains("dark-theme")) {
      theme = "dark";
      themeToggle.innerText = "☀️";
    } else {
      themeToggle.innerText = "🌙";
    }

    localStorage.setItem("theme", theme);
  });
}

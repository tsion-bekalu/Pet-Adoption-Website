// Theme Toggle
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


// Available Pets Page
const cards = document.querySelectorAll('.card');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResultsDiv = document.getElementById('no-results');

if (cards.length && searchInput && filterButtons.length) {
  let activeFilter = 'all';

  function filterPets() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach(card => {
      const tags = card.getAttribute('data-tags')?.toLowerCase() || "";
      const matchesFilter = (activeFilter === 'all' || tags.includes(activeFilter));
      const matchesSearch = (searchTerm === '' || tags.includes(searchTerm));

      if (matchesFilter && matchesSearch) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResultsDiv) {
      noResultsDiv.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      activeFilter = this.getAttribute('data-filter').toLowerCase();
      filterPets();
    });
  });

  searchInput.addEventListener('input', filterPets);
}


// Contact Us Page

// Highlight active nav link
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.pathname === window.location.pathname) {
    link.classList.add("selected");
  }
});

// Replace text inputs with date & time pickers
const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");

if (dateInput) {
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("min", new Date().toISOString().split("T")[0]);
}

if (timeInput) {
  timeInput.setAttribute("type", "time");
}

// Utility functions
function showError(input, message) {
  clearError(input);
  const error = document.createElement("small");
  error.className = "error-message";
  error.style.color = "red";
  error.style.display = "block";
  error.style.marginTop = "5px";
  error.innerText = message;
  input.insertAdjacentElement("afterend", error);
}

function clearError(input) {
  const nextEl = input.nextElementSibling;
  if (nextEl && nextEl.classList.contains("error-message")) {
    nextEl.remove();
  }
}

// Form validation and submission
const form = document.querySelector("#contact-form form") || document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error-message").forEach(el => el.remove());

    const fname = document.querySelector("#fname");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const date = document.querySelector("#date");
    const time = document.querySelector("#time");

    let valid = true;

    if (fname && fname.value.trim().length < 2) {
      showError(fname, "First name must be at least 2 characters.");
      valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (email && !emailPattern.test(email.value.trim())) {
      showError(email, "Please enter a valid email address.");
      valid = false;
    }

    const phonePattern = /^[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}$/;
    if (phone && !phonePattern.test(phone.value.trim())) {
      showError(phone, "Phone number must follow the format 09-12-34-56-78.");
      valid = false;
    }

    if (date && !date.value.trim()) {
      showError(date, "Please select a preferred date.");
      valid = false;
    }

    if (time && !time.value.trim()) {
      showError(time, "Please select a preferred time.");
      valid = false;
    }

    if (valid) {
      alert(`✅ Thank you, ${fname.value.trim()}! Your pet visit has been scheduled on ${date.value} at ${time.value}. We’ll contact you at ${email.value.trim()}.`);
      form.reset();
    }
  });
}
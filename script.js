// ---------- 1. Grab the things we need from the page ----------
const menuButton = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const allNavLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const backToTop = document.querySelector("#backToTop");
const form = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const year = document.querySelector("#year");


// ---------- 2. Menu button (phones) ----------
// Clicking the button adds or removes the "open" class.
// The CSS decides what "open" looks like.
menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Close the menu after the user picks a link
for (const link of allNavLinks) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
}


// ---------- 3. When the page scrolls ----------
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;

  // Show the back-to-top button only after scrolling down a bit
  if (scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

  // Work out which section we are in
  let currentId = "home";
  for (const section of sections) {
    if (scrollY >= section.offsetTop - 150) {
      currentId = section.id;
    }
  }

  // Highlight the nav link for that section
  for (const link of allNavLinks) {
    if (link.getAttribute("href") === "#" + currentId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  }
});


// ---------- 4. Back to top button ----------
backToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});


// ---------- 5. Contact form (demo only, nothing is really sent) ----------
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading
  formStatus.textContent = "Thanks! This demo form is working, but messages are not sent yet.";
  form.reset();
});


// ---------- 6. Footer year ----------
year.textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Sticky Header Functionality
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  // Smooth Scroll Functionality for Navigation Links
  const navLinks = document.querySelectorAll(".nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - headerHeight,
          behavior: "smooth",
        });
      }
    });
  });
});

// CSS Class for Sticky Header
const style = document.createElement("style");
style.textContent = `
  .header.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    background-color: #4a90e2;
    transition: background-color 0.3s;
  }
`;
document.head.appendChild(style);

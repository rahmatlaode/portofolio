// active menu======================================
// Ambil semua tautan menu
const navLinks = document.querySelectorAll(".navbar a");

// Tambahkan event listener untuk setiap tautan
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Menghapus kelas 'active' dari semua tautan menu
    navLinks.forEach((navLink) => navLink.classList.remove("active"));

    // Menambahkan kelas 'active' pada tautan yang diklik
    link.classList.add("active");

    // Scroll ke bagian yang sesuai dengan tautan yang diklik
    const targetSectionId = link.getAttribute("href");
    const targetSection = document.querySelector(targetSectionId);
    targetSection.scrollIntoView({
      behavior: "smooth",
    });

    event.preventDefault(); // Mencegah tautan berperilaku default
  });
});
// active menu======================================
//  sticky" pada header saat menggulir halaman==================================
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Hamburger Menu Toggle=================================
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active-menu-btn");
  navbar.classList.toggle("active-nav");
});

// navbar==============================

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".list_menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

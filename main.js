'use strict';

// Navbar scroll opacity
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  //console.log(window.scrollY);
  //console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Navbar toggle button for small srceen
const navbarToggleBtn = document.querySelector(".toggle__btn");
const navMenu = document.querySelector(".nav");
const navMenuBg = document.querySelector(".navbar__bg");
navbarToggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navMenuBg.classList.toggle('open');
});
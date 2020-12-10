'use strict';

// Navbar scroll opacity
const navbar = document.querySelector('#navbar');
const toggleBtnTop = document.querySelector(".toggle__btn_top");
const toggleBtnBottom = document.querySelector(".toggle__btn_bottom");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  //console.log(window.scrollY);
  //console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
    toggleBtnTop.classList.add('navbar--dark');
    toggleBtnBottom.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
    toggleBtnTop.classList.remove('navbar--dark');
    toggleBtnBottom.classList.remove('navbar--dark');
  }
});

// Navbar toggle button for small srceen
const toggleBtn = document.querySelector(".toggle__btn");
const ul = document.querySelector("#nav");
const li = document.querySelectorAll("#nav li");


function toggleHandler() {
    toggleBtn.classList.toggle("toggleAnimation")
    ul.classList.toggle("nav-active")
    
    li.forEach((link, index) => {
        console.log(link)
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = "navLinkFade 0.5s ease forwards 0.4s";
        }
    })
}

function init() {
    toggleBtn.addEventListener("click", toggleHandler);
}

init();

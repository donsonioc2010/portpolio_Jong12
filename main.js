'use strict';
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    // Make Home Slowly fade to transparent as the window scrolls down
    home.style.opacity = 1 - window.scrollY / homeHeight;

    // nav 일정 스크롤 이상 내려갈시에 보이게 하는역할
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//스크롤링 핸들 역할
const navbarMenuAll = document.querySelectorAll('.navbar__menu');
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    for (var i = 0; i < navbarMenuAll.length; i++) {
        navbarMenuAll[i].classList.remove('open');
    }
    scrollIntoView(link);
});
// Navbar toggle Button for Small Screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    console.log(navbarMenuAll);
    for (var i = 0; i < navbarMenuAll.length; i++) {
        navbarMenuAll[i].classList.toggle('open');
    }
});

//Show "arrow-up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});
//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}

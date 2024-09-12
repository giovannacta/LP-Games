// HEADER SCROOL COLOR CHANGE

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

//menu

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//REMOVE MENU SCROLL

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
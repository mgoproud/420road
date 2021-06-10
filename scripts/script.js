// alert('WELCOME TO 420 ROAD');
let nav = document.querySelector('.main-nav');
const navbar = document.querySelector('.navbar');
const links = document.querySelector('.menu-link');
const homeLink = document.querySelector('.home-link');
const menuLink = document.querySelector('.menu-link');
const storyLink = document.querySelector('.story-link');
const contactLink = document.querySelector('.contact-link');




nav.addEventListener('mouseover', () => {
    nav.style.background = 'rgb(2, 22, 2)';
    homeLink.style.color = 'rgb(248, 242, 208)';
    menuLink.style.color = 'rgb(248, 242, 208)';
    storyLink.style.color = 'rgb(248, 242, 208)';
    contactLink.style.color = 'rgb(248, 242, 208)';
});
nav.addEventListener('mouseleave', () => {
    nav.style.background = 'rgb(247, 255, 232)';
    homeLink.style.color = 'rgb(2, 14, 2)';
    menuLink.style.color = 'rgb(2, 14, 2)';
    storyLink.style.color = 'rgb(2, 14, 2)';
    contactLink.style.color = 'rgb(2, 14, 2)';
    // document.li.style.color = 'rgb(2, 14, 2)';
})

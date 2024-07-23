const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    logo.classList.toggle('hidden');
});
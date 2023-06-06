const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle')
const body = document.querySelector('html');

navToggle.addEventListener('click', () => {
   header.classList.toggle('nav-open');
   body.classList.toggle('overflow')
})

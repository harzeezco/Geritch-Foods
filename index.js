const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', () => {
   header.classList.toggle('nav-open')
})

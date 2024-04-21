const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const body = document.querySelector('html');
const menuList = document.querySelectorAll('.main-nav-list');

navToggle.addEventListener('click', () => {
	header.classList.toggle('nav-open');
});

menuList.forEach((menu) => {
	menu.addEventListener('click', () => {
		header.classList.remove('nav-open');
	});
});

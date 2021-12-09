const toggleMenu = document.querySelector('.hamburger-menu');
const toggleButton = document.querySelector('.header-right > a');
const closeButton = document.querySelector('.close');

toggleButton.addEventListener('click', function () {
  toggleMenu.classList.toggle('active');
})
closeButton.addEventListener('click', function () {
  toggleMenu.classList.toggle('active');
})
const toggleMenu = document.querySelectorAll('.hamburger-menu');
console.log(toggleMenu);
const toggleButton = document.querySelectorAll('.header-right > a');
console.log(toggleButton);

toggleButton.addEventListener('click', function () {
  toggleMenu.classList.toggle('active');
  console.log(toggleMenu.classlist);
})
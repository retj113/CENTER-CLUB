const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

console.log('menuToggle:', menuToggle); // Проверяем, найден ли элемент
console.log('mainNav:', mainNav); // Проверяем, найден ли элемент

menuToggle.addEventListener('click', () => {
  console.log('Клик по кнопке!'); // Проверяем, срабатывает ли обработчик
  menuToggle.classList.toggle('active');
  mainNav.classList.toggle('active');
});
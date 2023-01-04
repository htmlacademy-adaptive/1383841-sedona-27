// скрипт для открытия навигации

let button_nav = document.querySelector('.main-nav__toggle');
let nav = document.querySelector('.main-nav__list');
setTimeout(nav.classList.add('main-nav__list--tablet', 5000));

button_nav.onclick = function () {
  nav.classList.toggle('opened-flex');
  button_nav.classList.toggle('main-nav__toggle--opened');
};

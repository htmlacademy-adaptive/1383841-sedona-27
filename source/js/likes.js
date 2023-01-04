// скрипт для лайков
let like_button = document.querySelector('.card-info__counter');
let likes_number = document.querySelector('.card-info__counter-number');

like_button.onclick = function () {
  if (like_button.classList.contains('added')) {
    likes_number.textContent--;
  } else {
    likes_number.textContent++;
  }

  like_button.classList.toggle('added');
}

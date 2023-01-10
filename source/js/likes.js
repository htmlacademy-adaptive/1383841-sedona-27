// скрипт для лайков

const cards = document.querySelector('.cards');
const likes = document.querySelectorAll('.card-info');
let likes_number = document.querySelectorAll('.card-info__counter-number');
const click_button = document.querySelectorAll('.card-info__counter');

// if (click_button) {
//   click_button.forEach(click_button => {
//     click_button.onclick = function () {

//       if (click_button.closest('.card-info__counter-number')) {

//         if (click_button.contains('added')) {
//           likes_number.textContent--;
//         } else {
//           likes_number.textContent++;
//         }

//         click_button.classList.toggle('added');
//       }
//     }
//   })
// }


// if (cards) {
//   cards.addEventListener ('click', function(event) {
//     let target = event.target;

//     if (target.classList.contains('card-info__counter')){
//       if(target.classList.contains('added')) {
//           likes_number.textContent--;
//         } else {
//           likes_number.textContent++;
//         }

//         target.classList.toggle('added');
//     } else {
//       return;
//     };
//   });
// };
// for (let i = 0; i < click_button.length; i++) {
//   cards.addEventListener('click', (event) => {

//     let current = event.target;
//     if (current.classList.contains('card-info__counter')) {
//       console.log('Всё работает!!!');
//       if (current.classList.contains('added')) {
//         let likesNumber = Number(likes_number.value);
//         likesNumber.textContent--;
//         likes_number = toString(likesNumber);
//       } else {
//         likes_number.textContent++;
//       }

//       current.classList.toggle('added');
//     }
//   })
// }


function showConsole() {
  console.log('УРА!!!');
}

cards.addEventListener('click', function (event) {
  if (event.target.closest('.card-info__counter')) {
    showConsole();
  }
});

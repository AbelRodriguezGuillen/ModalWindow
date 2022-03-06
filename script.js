'use strict';

const OpenModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const modalOpen = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const modalClosed = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < OpenModalBtns.length; i++) {
  OpenModalBtns[i].addEventListener('click', modalOpen);
}

closeModalBtn.addEventListener('click', modalClosed);
overlay.addEventListener('click', modalClosed);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClosed();
  }
});

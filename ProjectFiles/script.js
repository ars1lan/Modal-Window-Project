'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  //we can also do that
  //modal.style.display = 'block';
};
const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModel);
}
overlay.addEventListener('click', closeModel);
btnCloseModal.addEventListener('click', closeModel);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});

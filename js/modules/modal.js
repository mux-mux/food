//ES6-Modules move toTop closeModal openModal
//Modal with params
//Close and Open with params

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('sidepanel__hide');
  modal.classList.remove('sidepanel__show');
  document.body.style.overflow = '';
}
function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('sidepanel__show');
  modal.classList.remove('sidepanel__hide');
  document.body.style.overflow = 'hidden';
}

function modal(triggerSelector, modalSelector) {
  //Modal
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', () => openModal(modalSelector)); //()=>trick to not call immidiatelly function that have params
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });
}

export default modal;
export { closeModal, openModal };

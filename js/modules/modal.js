function modal() {
  //Modal
  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });

  function closeModal() {
    modal.classList.add('sidepanel__hide');
    modal.classList.remove('sidepanel__show');
    document.body.style.overflow = '';
  }
  function openModal() {
    modal.classList.add('sidepanel__show');
    modal.classList.remove('sidepanel__hide');
    document.body.style.overflow = 'hidden';
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
}

module.exports = modal;

import { closeModal, openModal } from './modal';
import { postData } from '../services/services';

function forms(formSelector) {
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: 'icons/spinner.svg',
    success: 'Thanks! We will call you soon!',
    failure: 'Error happened. Try once again!',
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('https://api.jsonbin.io/v3/b/64d76407b89b1e2299cf891e', json)
        .then((data) => {
          showThanksModal(message.success);
          message.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(msg) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('sidepanel__hide');
    openModal('.modal');

    const thankModal = document.createElement('div');
    thankModal.classList.add('modal__dialog');
    thankModal.innerHTML = `
    <div class="modal__content">
      <div class="modal__close" data-close>x</div>
      <div class="modal__title">${msg}</div>
    </div>
    `;

    document.querySelector('.modal').append(thankModal);

    setTimeout(() => {
      thankModal.remove();
      prevModalDialog.classList.add('sidepanel__show');
      prevModalDialog.classList.remove('sidepanel__hide');
      closeModal('.modal');
    }, 4000);
  }
}

export default forms;

import { closeModal, openModal } from './modal';
import { postData } from '../services/services';

function forms(formSelector) {
  const forms = document.querySelectorAll(formSelector);
  const submitButtons = document.querySelectorAll(`${formSelector} button`);

  submitButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      checkFormValidity(e.target.parentNode);
    });
  });

  const message = {
    loading: 'icons/spinner.svg',
    success: 'Дякую! Ми з Вами звяжемся незабаром!',
    failure: 'Оуу, сталася помилка. Будь-ласка спробуйте ще раз!',
    emptyName: 'Введіть будь-ласка ваше ім`я',
    emptyPhone: 'Введіть будь-ласка ваш номер телефону',
    mismatchPhone: 'Введіть будь-ласка ваш номер у форматі 380001234567',
    overflowName: 'Максимальне дозволене ім`я 100 символів',
  };

  function checkFormValidity(form) {
    const inputFields = form.querySelectorAll('input');
    inputFields.forEach((input) => {
      const validityState = input.validity;

      if (validityState.valueMissing && input.getAttribute('name') === 'name') {
        input.setCustomValidity(message.emptyName);
      } else if (
        validityState.valueMissing &&
        input.getAttribute('name') === 'phone'
      ) {
        input.setCustomValidity(message.emptyPhone);
      } else if (
        validityState.patternMismatch &&
        input.getAttribute('name') === 'phone'
      ) {
        input.setCustomValidity(message.mismatchPhone);
      } else if (
        validityState.rangeOverflow &&
        input.getAttribute('name') === 'name'
      ) {
        input.setCustomValidity(message.overflowName);
      } else {
        input.setCustomValidity('');
      }
      input.reportValidity();
    });
  }

  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.classList.add('loading-spinner');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 10px auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('https://api.jsonbin.io/v3/b/64d76407b89b1e2299cf891e', json)
        .then((data) => {
          if (data) {
            showThanksModal(message.success);
          } else {
            showThanksModal(message.failure);
          }
        })
        .catch((error) => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
          const spinner = document.querySelector('.loading-spinner');
          spinner.remove();
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
      <div class="modal__close" data-close>&times;</div>
      <div class="modal__title">${msg}</div>
    </div>
    `;

    document.querySelector('.modal').append(thankModal);

    function hideThankModal(prevModalHideClass, currentModal) {
      thankModal.remove();
      prevModalDialog.classList.remove(prevModalHideClass);
      closeModal(currentModal);
    }

    const timeoutId = setTimeout(() => {
      hideThankModal('sidepanel__hide', '.modal');
    }, 4000);

    const thankModalClose = document.querySelectorAll('[data-close]');
    thankModalClose.forEach((el) =>
      el.addEventListener('click', () => {
        hideThankModal('sidepanel__hide', '.modal');
        clearTimeout(timeoutId);
      })
    );
  }
}

export default forms;

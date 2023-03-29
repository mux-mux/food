//logic-submit-spinner-prepareData-response-showMessage
//messages{loading:spinner, success:, failure:}
//each form bindPost(request->append message)
///func bindPost ev submit newDiv.src.spinner.css=db.m0auto.insertAfterForm
///new formData(form) make json from formData
///imported postData(url, json).then(data)=>thanksModal.success .catch()=>Modal.failure .finally=>form.reset
//thanksModal(msg) prev.add.hide
//newDiv.add.dialog.innerHTML=.conten.close.title{msg}.appendToModal
//after 4s closeModal
//Make universal and export

import { closeModal, openModal } from './modal';
import { postData } from '../services/services';

function forms(formSelector) {
  // Forms
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: 'icons/spinner.svg',
    success: 'Thanks! We will call you soon!',
    failure: 'Error happened. Try once again!',
    remove: function () {
      console.log('a');
    },
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
      // form.insert(statusMessage);
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form); //form must have attr name

      //  Arrays                Object                              JSON
      //.entries [[], []] |  .fromEntries {key:val, key:val}  |  .stringify {'key': val, 'key': val}
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // const object = {};
      // formData.forEach(function (value, key) {
      //   object[key] = value;
      // });

      postData('http://localhost:3000/requests', json)
        .then((data) => {
          console.log(data);
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

  //SHOW THANKS

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

  //JSON DB   npx json-server db.json
  fetch('http://localhost:3000/menu')
    .then((data) => data.json())
    .then((res) => console.log(res));
}

export default forms;

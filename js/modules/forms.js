function forms() {
  // Forms
  const forms = document.querySelectorAll('form');

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

  //arrow function when context does not matter
  const postData = async (url, data) => {
    //fetch returns object -> fetch(url).then(succCallBackFn, failureCallBackFn);
    //await waits for result returned
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: data,
    });
    //If no awaits -> go further without waiting result
    //await bcs could be huge response body and it`ll take time to handel it
    return await res.json();
  };

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

      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });

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
    openModal();

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
      closeModal();
    }, 4000);
  }

  //JSON DB   npx json-server db.json
  fetch('http://localhost:3000/menu')
    .then((data) => data.json())
    .then((res) => console.log(res));
}

module.exports = forms;

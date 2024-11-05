function calc() {
  const result = document.querySelector('.calculating__result span');
  let sex = localStorage.getItem('id') || 'female',
    height,
    weight,
    age,
    ratio = localStorage.getItem('data-ratio') || '1.375';

  function initLocalSettings(selector, attribute, initial, activeClass) {
    const elements = document.querySelectorAll(`${selector} div`);

    elements.forEach((elem) => {
      setInitActiveClass(elem, attribute, initial, activeClass);
    });

    function setInitActiveClass(elem, attribute, initial, activeClass) {
      elem.classList.remove(activeClass);

      if (
        elem.getAttribute(attribute) &&
        elem.getAttribute(attribute) === localStorage.getItem(attribute)
      ) {
        elem.classList.add(activeClass);
      } else if (elem.getAttribute(attribute) === initial) {
        elem.classList.add(activeClass);
      }
    }
  }

  initLocalSettings('#gender', 'id', sex, 'calculating__choose-item_active');
  initLocalSettings(
    '.calculating__choose_big',
    'data-ratio',
    ratio,
    'calculating__choose-item_active'
  );

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '____';
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
      );
    } else {
      result.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
      );
    }
  }

  calcTotal();

  function getStaticInfo(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);

    elements.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('data-ratio', ratio);
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('id', sex);
        }

        elements.forEach((elem) => {
          elem.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  getStaticInfo('#gender', 'calculating__choose-item_active');
  getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');

  function getDynamicInfo(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {
        input.style.border = '1px solid red';
      } else {
        input.style.border = 'none';
      }

      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      }
      calcTotal();
    });
  }

  getDynamicInfo('#height');
  getDynamicInfo('#weight');
  getDynamicInfo('#age');
}

export default calc;

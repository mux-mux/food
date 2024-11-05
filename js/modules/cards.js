import { getResource } from '../services/services';

function cards() {
  class ItemCard {
    constructor(
      webp,
      src,
      alt,
      title,
      descr,
      price,
      parentSelector,
      ...classes
    ) {
      this.webp = webp;
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.classes = classes;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.course = 27;
      this.convertUSDUAH();
    }

    convertUSDUAH() {
      this.price = this.price * this.course;
    }

    render() {
      const div = document.createElement('div');
      if (this.classes.length === 0) {
        this.div = 'menu__item';
        div.classList.add(this.div);
      } else {
        this.classes.forEach((className) => div.classList.add(className));
      }
      div.innerHTML = `
        <picture>
          <source srcset=${this.webp} type="image/webp" />
          <img src="${this.src}" alt="${this.alt}" />
        </picture>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      `;
      this.parent.append(div);
    }
  }

  getResource('https://api.jsonbin.io/v3/b/64d74da7b89b1e2299cf7fe3').then(
    (data) => {
      data.record.forEach(({ webp, img, altimg, title, descr, price }) => {
        new ItemCard(
          webp,
          img,
          altimg,
          title,
          descr,
          price,
          '.menu .container'
        ).render();
      });
    }
  );
}

export default cards;

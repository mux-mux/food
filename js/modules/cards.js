function cards() {
  //Class for Cards

  /* -> #1*/
  class ItemCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.classes = classes;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.course = 27;
      //this points to current object
      //call method convertUSDUAH to trigger convertion
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
        <img src="${this.src}" alt="${this.alt}">
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

  //AsyncAwait
  // 1.postData = async(url,data)=> await res.json()
  // 2.call postData(url, json).then().catch().fianlly()
  // 3.json = JSON.stringify(Object.fromEntries(formData.entries()))
  // 4.getResource = async(url) => if(!res.ok) throw new Error('') else return await res.json()
  // 5.call getResource('url').then(data=>{data.forEach(({destruct})=>{new ItemCard(redestruct).render()})})

  const getResource = async (url) => {
    const res = await fetch(url);
    //fetch only OK when status 200-299
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getResource('http://localhost:3000/menu').then((data) => {
    //why response Array -> look at db.json -> menu
    //destructuring -> const img = obj.img, altimg = obj.altimg
    data.forEach(({ img, altimg, title, descr, price }) => {
      //new ItemCard points to -> #1
      //why new -> prototype of ItemCard. prototype inherits props & methods of Class ItemCard
      new ItemCard(img, altimg, title, descr, price, '.menu .container').render();
    });
  });
}

module.exports = cards;

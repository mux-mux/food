function slider() {
  //CAROUSEL
  //1. query slides, prev, next, total slides counter, current slide number, slidesWrapper-overflow, slidesInner-400%, set width as wrapper width, index = 1, offset = 0
  //2. set styles inner = 100 * 4 '%', disp=flex, transit=0.5s all
  //3. set wrapper overflow=hidden
  //4. set each slide width = wrapper width
  //5. next addEv if(offset == int(width)*sl.len-1) offset 0 else offset += int(width) transform translateX${offset}
  //6. prev addEv if(offset == 0) offset int(width)*sl.len-1 else offset -= int(width) transform translateX${offset}
  //7. numbers next if(slideIndex==length) 1 else ++ if(slides.length<10) 0slides.length else slides.length
  //8. numbers prev if(slideIndex==1) slides.length else -- if(slides.length<10) 0slides.length else slides.length

  const slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    width = window.getComputedStyle(slidesWrapper).width;
  let slideIndex = 1,
    offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  next.addEventListener('click', () => {
    if (offset == parseInt(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += parseInt(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
    dots.forEach((dot) => dot, (style.opacity = '.5'));
    dots[slideIndex - 1].style.opacity = 1;
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = parseInt(width) * (slides.length - 1);
    } else {
      offset -= parseInt(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
    dots.forEach((dot) => dot, (style.opacity = '.5'));
    dots[slideIndex - 1].style.opacity = 1;
  });

  //NAVS Carousel
  //1. query whole slider not only wrapper position relative, dots []
  //2. create indic = ol.carousel-indicators cssText abs,0,0,0,z15,df,jcc,mr15%,ml15%,lsn
  //3. add nav wrapper slider.append(indic)
  //4. loop make circles count of total slides craete li setAttr('data-slide-to', i+1)
  //5. cssText bx-sz cont-box fl 0 1 auto w30 h6 mr3 ml 3 curp bgc#fff bgclip padd-box bt 10 sol trans bb 10 sol trans op .5 transit op .6s ease indic.append(dot) dots.push(dot)
  //6. add active class if i == 0 op = 1
  //7. click left right move slide num prev, next dots.each op .5 dots[slideIndex - 1].style.opacity = 1
  //9. click dot move to slide num dot.each slideIndex = e get attr data-slide-to
  //8. ^ offset int(width)*slTo-1 transform translateX${offset}
  //9. ^ click dot move to slide num dot.each slideIndex = e get attr data-slide-to
  //10. ^ if(slides.length<10) 0slides.length else slides.length

  const slider = document.querySelector('.offer__slider');

  slider.style.position = 'relative';

  const indicators = document.createElement('ol'),
    dots = [];

  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `;
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = parseInt(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      dots.forEach((dot) => dot, (style.opacity = '.5'));
      dots[slideIndex - 1].style.opacity = 1;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }
    });
  });
}

module.exports = slider;

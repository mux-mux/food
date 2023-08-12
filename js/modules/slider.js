function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCount,
  currentCounter,
  wrapper,
  field,
}) {
  const slides = document.querySelectorAll(slide),
    sliderContainer = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCount),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
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
    slide.style.maxWidth = width;
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
    dots.forEach((dot) => (dot.style.opacity = '.5'));
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
    dots.forEach((dot) => (dot.style.opacity = '.5'));
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

  sliderContainer.style.position = 'relative';

  const indicators = document.createElement('ol'),
    dots = [];

  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 2%;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;
  sliderContainer.append(indicators);

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

      dots.forEach((dot) => (dot.style.opacity = '.5'));
      dots[slideIndex - 1].style.opacity = 1;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }
    });
  });
}

export default slider;

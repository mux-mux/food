var Promise = require('es6-promise-polyfill').Promise;
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  tabs(
    '.tabheader__item',
    '.tabcontent',
    '.tabheader__items',
    'tabheader__item_active'
  );
  tabs(
    '.tabheader__item-mobile',
    '.tabcontent',
    '.tabheader__items-mobile',
    'tabheader__item-mobile_active'
  );
  modal('[data-modal]', '.modal');
  timer('.timer', '2025-06-09');
  cards();
  calc();
  forms('form');
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCount: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
  });
});

'use strict';

const hamburger = document.querySelector('.hamburger');
const hamburgerLabel = document.querySelector('.hamburger-label');
const nav = document.querySelector('nav');
const mouseImg = document.querySelector('.sl__mouse img');

// Меню мобильной версии
hamburger.addEventListener('click', function (e) {
  e.preventDefault();
  hamburger.classList.toggle('is-active');
  nav.style.opacity = (nav.style.opacity === '1') ? '0' : '1';
  hamburgerLabel.style.opacity = (hamburgerLabel.style.opacity === '0') ? '1' : '0';
});

// Удаляет .wibro если был скролл
window.addEventListener('scroll', () => {
  if (mouseImg.classList.contains('wibro')) {
    mouseImg.classList.remove('wibro');
  }
});

// Init слайдер
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// SimpleParallax
var mobileWidth = '768';
var image = document.querySelector('.parallax-l');
var instanceL = new simpleParallax(image, {
  orientation: 'left',
  scale: 2.0,
  overflow: true,
  delay: 0,
});

var image = document.querySelectorAll('.parallax-r');
var instanceR = new simpleParallax(image, {
  orientation: 'right',
  scale: 2.0,
  overflow: true,
});

// document.addEventListener('DOMContentLoaded', () => {
//   if (document.documentElement.clientWidth < mobileWidth) {
//     instanceL.destroy();
//     instanceR.destroy();
//   }
// });


document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.work__item');

  items.forEach((item) => {
    item.addEventListener('mouseenter', () => {

      item.classList.remove('mousemove-unit--return');
      item.classList.add('mousemove-unit--entered');

      setTimeout(() => {
        item.classList.remove('mousemove-unit--entered');
      }, 200);
    });

    item.addEventListener('mousemove', (event) => {
      var parentHeight = item.clientHeight;
      var parentWidth = item.clientWidth;
      var relX = event.pageX - item.offsetLeft;
      var relY = event.pageY - item.offsetTop;
      var mousePercentsX = relX / parentWidth * 100 - 50;
      var mousePercentsY = relY / parentHeight * 100 - 50;
      var x1 = 1 - Math.abs(mousePercentsX) / 10000;
      var x2 = mousePercentsY / 10000;
      var x3 = 0;
      var x4 = mousePercentsX / 2000000;
      var x5 = -mousePercentsX / 1000000;
      var x6 = 1 - Math.abs(mousePercentsY) / 10000;
      var x7 = 0;
      var x8 = mousePercentsY / 2000000;
      var x9 = 0;
      var x10 = 0;
      var x11 = 1 - Math.abs(mousePercentsX) / 10000 - Math.abs(mousePercentsY) / 10000;
      var x12 = 0;
      var x13 = 20 * (mousePercentsX / 50);
      var x14 = 20 * (mousePercentsY / 50);
      var x15 = 0;
      var x16 = 1;

      var transformMatrix = x1 + ',' + 0 + ',' + x3 + ',' + x4 + ',' + x5 + ',' + x6 + ',' + x7 + ',' + x8 + ',' + x9 + ',' + x10 + ',' + x11 + ',' + x12 + ',' + x13 + ',' + x14 + ',' + x15 + ',' + x16;
      item.style.transform = `matrix3d(${transformMatrix})`;
    });

    item.addEventListener('mouseleave', () => {
      item.classList.add('mousemove-unit--return');
    });
  });
});


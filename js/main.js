'use strict'


const tradeButton = document.getElementById('trade');
const buttonText = document.querySelector('.project__details--trade');

tradeButton.addEventListener('click', function() {
  buttonText.style.display = 'block';
  tradeButton.style.display = 'none';
});

const commerceButton = document.getElementById('commerce');
const buttonText_2 = document.querySelector('.project__details--commerce');

commerceButton.addEventListener('click', function() {
  
  buttonText_2.style.display = 'block';
  commerceButton.style.display = 'none';
});



// чомусь цей код не не працює у файлі gallery.js
const getGalleryButton = document.querySelector('.gallery__btn');
const showMore = document.querySelectorAll('.gallery__item--hidden');

getGalleryButton.addEventListener('click', function() {

  showMore.forEach(function(item) {
    item.style.display = 'block';
});
  getGalleryButton.style.display = 'none';

});


const header = document.querySelector('.header__fixed');
const headerCentered = document.querySelector('.header__navigation');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.style.position = 'fixed';
    header.style.background = 'linear-gradient(243.43deg, #7e5affd0 16.9%, #55b8ffce 83.27%)';
    headerCentered.style.paddingBlock = '15px'; 
  } else {

  }
});


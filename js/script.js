var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
  document.querySelector('.menu-mob').style.left = '0';
})

const infoOverlay = document.querySelector('.info-overlay');
const nutriOverlay = document.querySelector('.nutri-overlay');
infoOverlay.addEventListener('mouseover', function() {
  nutriOverlay.style.opacity = '1';
})
infoOverlay.addEventListener('mouseout', function() {
  nutriOverlay.style.opacity = '0';
})
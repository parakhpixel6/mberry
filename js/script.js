var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


const hamburger = document.querySelector('.hamburger');
const close_nav = document.querySelector('.close_nav');
hamburger.addEventListener('click', function() {
  document.querySelector('.menu-mob').style.left = '0';
})
close_nav.addEventListener('click', function() {
  document.querySelector('.menu-mob').style.left = '100%';
})

const infoOverlays = document.querySelectorAll('.info-overlay');
const nutriOverlays = document.querySelectorAll('.nutri-overlay');

infoOverlays.forEach((infoOverlay, index) => {
  infoOverlay.addEventListener('mouseleave', () => {
    setTimeout(() => {
      nutriOverlays[index].style.opacity = 0; // Change back to 0 or your desired value
    }, 3000);
  });

  nutriOverlays[index].addEventListener('mouseleave', () => {
    nutriOverlays[index].style.opacity = 0;
  });

  infoOverlay.addEventListener('mouseenter', () => {
    nutriOverlays[index].style.opacity = 1;
  });

  if (nutriOverlays[index].style.opacity === 1) {
    nutriOverlays[index].addEventListener('mouseenter', () => {
      nutriOverlays[index].style.opacity = 1;
    });
  }

});
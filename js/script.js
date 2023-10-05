const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  allowTouchMove: false,
});


//NAVBAR
const hamburger = document.querySelector('.hamburger');
const close_nav = document.querySelector('.close_nav');
hamburger.addEventListener('click', function() {
  document.querySelector('.menu-mob').style.left = '0';
})
close_nav.addEventListener('click', function() {
  document.querySelector('.menu-mob').style.left = '100%';
})



//MYCART
const my_cart = document.querySelector('.my-cart');
const close_cart = document.querySelector('.close_cart');
my_cart.addEventListener('click', function() {
  document.querySelector('.mycart').style.right = '0';
})
close_cart.addEventListener('click', function() {
  document.querySelector('.mycart').style.right = '-100%';
})



//NUTRITION
const infoOverlays = document.querySelectorAll('.info-overlay');
const nutriOverlays = document.querySelectorAll('.nutri-overlay');

infoOverlays.forEach((infoOverlay, index) => {
  infoOverlay.addEventListener('mouseleave', () => {
      nutriOverlays[index].style.opacity = 0; // Change back to 0 or your desired value
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


// Function to handle the event listeners
function setupHoverEvents(target, show) {
  target.addEventListener('mouseenter', function () {
    show.style.height = '80%';
    show.querySelector('.highlight-wrapper').style.visibility = 'visible';
  });
  target.addEventListener('mouseenter', function () {
    show.style.height = '80%';
    show.querySelector('.highlight-wrapper').style.visibility = 'visible';
  });
  target.addEventListener('mouseleave', function () {
    show.style.height = '0%';
    show.querySelector('.highlight-wrapper').style.visibility = 'hidden';
  });
  show.addEventListener('mouseleave', function () {
    show.style.height = '0%';
    show.querySelector('.highlight-wrapper').style.visibility = 'hidden';
  });
}

// NEWS HOVER EFFECT
const hoffpost = document.getElementById('hoffpost');
const atlantic = document.getElementById('atlantic');
const smithsonian = document.getElementById('smithsonian');
const atlasObscura = document.getElementById('atlasObscura');

const hoffpostShow = document.querySelector('.hoffpost');
const atlanticShow = document.querySelector('.atlantic');
const smithsonianShow = document.querySelector('.smithsonian');
const atlasObscuraShow = document.querySelector('.atlasObscura');

const hoffpostClose = document.querySelector('.hoffpostClose');
const atlanticClose = document.querySelector('.atlanticClose');
const smithsonianClose = document.querySelector('.smithsonianClose');
const atlasObscuraClose = document.querySelector('.atlasObscuraClose');

// Setting up event listeners
setupHoverEvents(hoffpost, hoffpostShow);
setupHoverEvents(atlantic, atlanticShow);
setupHoverEvents(smithsonian, smithsonianShow);
setupHoverEvents(atlasObscura, atlasObscuraShow);
setupHoverEvents(hoffpostShow, hoffpostShow);
setupHoverEvents(atlanticShow, atlanticShow);
setupHoverEvents(smithsonianShow, smithsonianShow);
setupHoverEvents(atlasObscuraShow, atlasObscuraShow);

hoffpostClose.addEventListener('click', function () {
  hoffpostShow.style.height = '0%';
  hoffpostShow.querySelector('.highlight-wrapper').style.visibility = 'hidden';
});

atlanticClose.addEventListener('click', function () {
  atlanticShow.style.height = '0%';
  atlanticShow.querySelector('.highlight-wrapper').style.visibility = 'hidden';
});

smithsonianClose.addEventListener('click', function () {
  smithsonianShow.style.height = '0%';
  smithsonianShow.querySelector('.highlight-wrapper').style.visibility = 'hidden';
});

atlasObscuraClose.addEventListener('click', function () {
  atlasObscuraShow.style.height = '0%';
  atlasObscuraShow.querySelector('.highlight-wrapper').style.visibility = 'hidden';
});

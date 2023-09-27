//SWIPER
const swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
const myCart = document.querySelector('.myCart');
const close_cart = document.querySelector('.close_cart');
myCart.addEventListener('click', function() {
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


// Function to handle the event listeners
function setupHoverEvents(target, show) {
  target.addEventListener('mouseenter', function () {
    show.style.display = 'block';
  });
  target.addEventListener('mouseenter', function () {
    show.style.display = 'block';
  });
  target.addEventListener('mouseleave', function () {
    show.style.display = 'none';
  });
  show.addEventListener('mouseleave', function () {
    show.style.display = 'none';
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
  hoffpostShow.style.display = 'none';
});

atlanticClose.addEventListener('click', function () {
  atlanticShow.style.display = 'none';
});

smithsonianClose.addEventListener('click', function () {
  smithsonianShow.style.display = 'none';
});

atlasObscuraClose.addEventListener('click', function () {
  atlasObscuraShow.style.display = 'none';
});

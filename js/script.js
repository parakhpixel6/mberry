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


// NEWS COMMENTS

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


hoffpost.addEventListener('mouseenter', function() {
  hoffpostShow.style.display = 'block';
  hoffpostShow.style.scale = 1;
})
hoffpostShow.addEventListener('mouseenter', function() {
  hoffpostShow.style.scale = 1;
  hoffpostShow.style.display = 'block';
})
hoffpost.addEventListener('mouseleave', function() {
  hoffpostShow.style.display = 'none';
})
hoffpostShow.addEventListener('mouseleave', function() {
  hoffpostShow.style.display = 'none';
})
hoffpostClose.addEventListener('click', function() {
  hoffpostShow.style.display = 'none';
})



atlantic.addEventListener('mouseenter', function() {
  atlanticShow.style.display = 'block';
})
atlanticShow.addEventListener('mouseenter', function() {
  atlanticShow.style.display = 'block';
})
atlantic.addEventListener('mouseleave', function() {
  atlanticShow.style.display = 'none';
})
atlanticShow.addEventListener('mouseleave', function() {
  atlanticShow.style.display = 'none';
})
atlanticClose.addEventListener('click', function() {
  atlanticShow.style.display = 'none';
})


smithsonian.addEventListener('mouseenter', function() {
  smithsonianShow.style.display = 'block';
})
smithsonianShow.addEventListener('mouseenter', function() {
  smithsonianShow.style.display = 'block';
})
smithsonian.addEventListener('mouseleave', function() {
  smithsonianShow.style.display = 'none';
})
smithsonianShow.addEventListener('mouseleave', function() {
  smithsonianShow.style.display = 'none';
})
smithsonianClose.addEventListener('click', function() {
  smithsonianShow.style.display = 'none';
})



atlasObscura.addEventListener('mouseenter', function() {
  atlasObscuraShow.style.display = 'block';
})
atlasObscuraShow.addEventListener('mouseenter', function() {
  atlasObscuraShow.style.display = 'block';
})
atlasObscura.addEventListener('mouseleave', function() {
  atlasObscuraShow.style.display = 'none';
})
atlasObscuraShow.addEventListener('mouseleave', function() {
  atlasObscuraShow.style.display = 'none';
})
atlasObscuraClose.addEventListener('click', function() {
  atlasObscuraShow.style.display = 'none';
})

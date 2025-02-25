
// TOGGLE MENU
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-menu-button');
const toggleMenuLinks = document.querySelectorAll('.toggle-menu a');
toggleMenuButton.onclick = function() {
    if (toggleMenu.getAttribute('data-menustate') === 'closed') {
      // if closed, open it    
      toggleMenu.setAttribute('data-menustate','open');
    } else {
      // else, close it
      toggleMenu.setAttribute('data-menustate','closed');
    }
};
// CLOSE THE MENU WHEN A USER CLICKS ON ANY LINK
toggleMenuLinks.forEach((el) => {
  el.onclick = () => {
    toggleMenu.setAttribute('data-menustate','closed');
  }
});


// BACKGROUND COLOR CHANGE JS WITH NO SWIPER
const sections = document.querySelectorAll('.scroll-section');
const backgroundImage = document.querySelector('.background-image');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const slideNumber = entry.target.dataset.slide;
            backgroundImage.setAttribute('data-currentslide', slideNumber);
            entry.target.setAttribute('data-visible', 'visible');
        }
        else {
          entry.target.setAttribute('data-visible', 'hidden');
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
});

// BACKGROUND COLOR CHANGE JS WITH SWIPER

  
// const swiper = new Swiper('.swiper-container', {
//     direction: 'vertical',
//     spaceBetween: 100,
//     mousewheel: true,
//     keyboard: {
//         enabled: true,
//         onlyInViewport: false
//     },
//     effect: 'slides',
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
//     speed: 1000,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });

// const backgroundImage = document.querySelector(".background-image");

// swiper.on('slideChange', function () {
// console.log(swiper.activeIndex);
// backgroundImage.setAttribute("data-currentslide", swiper.activeIndex);
// });
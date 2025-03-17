
// TOGGLE MENU
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-menu-button');
const toggleMenuLinks = document.querySelectorAll('.toggle-menu a');
toggleMenuButton.onclick = function () {
  if (toggleMenu.getAttribute('data-menustate') === 'closed') {
    // if closed, open it    
    toggleMenu.setAttribute('data-menustate', 'open');
  } else {
    // else, close it
    toggleMenu.setAttribute('data-menustate', 'closed');
  }
};
// CLOSE THE MENU WHEN A USER CLICKS ON ANY LINK
toggleMenuLinks.forEach((el) => {
  el.onclick = () => {
    toggleMenu.setAttribute('data-menustate', 'closed');
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







document.addEventListener("DOMContentLoaded", function () {
  // Get all button elements with the class '.rotate-button'
  const buttons = document.querySelectorAll('.rotate-button');

  // Ensure there are buttons before adding event listeners
  if (buttons.length === 0) {
    console.error("No buttons with class '.rotate-button' found.");
    return;
  }

  // Set a scroll threshold where animation will trigger (%)
  const scrollThreshold = 5;

  // Add scroll event listener
  window.addEventListener('scroll', function () {
    // Calculate scroll percentage
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    // Debugging: Log the scroll percentage
    console.log(`Scroll Percentage: ${scrollPercentage.toFixed(2)}%`);

    // Loop through all buttons and apply/remove the class
    buttons.forEach(button => {
      if (scrollPercentage >= scrollThreshold) {
        button.classList.add('animate-rotation');
      } else {
        button.classList.remove('animate-rotation');
      }
    });
  });
});




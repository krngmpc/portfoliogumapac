'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

  document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar-link");
    
    navbarLinks.forEach(link => {
      link.addEventListener("click", function() {
        navbarLinks.forEach(link => {
          link.style.color = ""; // Reset all links to default color
        });
        this.style.color = "pink"; // Change color of clicked link
      });
    });
  });



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
/**
 * CONTACT
 * mo notify if all forms are fillef up or not
 */
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const inputs = form.querySelectorAll('.input-field');

  form.addEventListener('submit', function (event) {
      let isFormValid = true;

      inputs.forEach(function (input) {
          if (!input.value) {
              isFormValid = false;
              input.classList.add('invalid');
          } else {
              input.classList.remove('invalid');
          }
      });

      if (!isFormValid) {
          event.preventDefault();
          alert('Please fill in all the required fields.');
      } else {
          alert('Form submitted successfully!');
          // You can also submit the form via AJAX here if needed
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const inputs = form.querySelectorAll('.input-field');
  const successNotification = document.getElementById('success-notification');

  form.addEventListener('submit', function (event) {
      let isFormValid = true;

      inputs.forEach(function (input) {
          if (!input.value) {
              isFormValid = false;
              input.classList.add('invalid');
          } else {
              input.classList.remove('invalid');
          }
      });

      if (!isFormValid) {
          event.preventDefault();
          alert('Please fill in all the required fields.');
      } else {
          // Show success notification
          successNotification.style.display = 'block';
          setTimeout(function () {
              successNotification.style.display = 'none';
          }, 3000); // Hide notification after 3 seconds

          // You can also submit the form via AJAX here if needed
      }
  });
});
/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
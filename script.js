/*toggle icon navbar*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

document.addEventListener("DOMContentLoaded", function() {
    // Get the current page's filename
    const currentPage = window.location.pathname.split('/').pop();

    // Map page names to corresponding link IDs
    const pageLinkMap = {
      "index.html": "home-link",
      "about.html": "about-link",
      "services.html": "services-link",
      "contact.html": "contact-link",
      "portfolio.html": "portfolio-link"
    };

    // Get the ID of the link that matches the current page
    const activeLinkId = pageLinkMap[currentPage];

    // Remove active class from any previously active link
    document.querySelectorAll('.navbar a').forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to the current link
    if (activeLinkId) {
      const activeLink = document.getElementById(activeLinkId);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }


    
  });

  /*sticky navbar*/

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);


   /*remove toggle icon and navbar when click navbar link (scroll)*/


   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');


   ScrollReveal({
    // reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
 ScrollReveal().reveal('.image-container, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});

 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


 const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer' ,'Frontend Developer' , 'Machine Learning Developer', 'Data Analyst'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true

 }
);

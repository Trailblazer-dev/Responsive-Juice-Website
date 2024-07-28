// navigation

const navBar = document.getElementById('nav-bar');
const navMenu = document.getElementById('nav-menu');
const navClose= document.getElementById('nav-close');

navBar.addEventListener('click', () => {
  navBar.style.display='none';
  navMenu.classList.add('nav__show');
  navMenu.addEventListener('click', () => {
    navMenu.classList.remove('nav__show');
    navBar.style.display='block';
  });
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('nav__show');
});
// Header shadow
const shadowHeader =()=>{
    const header= document.getElementById('header');
    this.scrollY >= 50? header.classList.add('header-shadow'):
     header.classList.remove('header-shadow');
}

window.addEventListener('scroll', shadowHeader);

// SWIPER 

const swiperMenu = new Swiper('.menu__container', {
  // Optional parameters
  grabCursor: true,
  direction:'horizontal',
  spaceBetween:24,
  freeMode:'true',
  loop:true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints:{
    568: {
      slidesPerView:2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
  // Navigation arrows
  
});
// Navigation
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.add("active-link");
    } else {
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);


// HIDDEN SECTIONS

const contactLinks = document.querySelectorAll('.contact__link');
const contactsSections = document.querySelectorAll('.aboutus, .services, .blog');

contactLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    contactsSections[index].classList.add('show');
    setTimeout(() => {
      contactsSections[index].classList.remove('show');
    }, 8000);
  });
});

// REVEAL 

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay:400,
  reset: true,
})
sr.reveal('.home__containerr')
sr.reveal('.features__images', {origin: 'bottom',delay:600})
sr.reveal('.features__data', {delay:600,origin:'left'})
sr.reveal('.menu__container', {delay:800,origin:'left'})
sr.reveal('.menu__title',{origin:'bottom',delay:700})
sr.reveal('.contact__container',{delay:1000})
sr.reveal('.show',{delay:500,origin:'bottom'})
// sr.reveal('.aboutus__data',{delay:900,origin:'right'})
// sr.reveal('.aboutus__image,.services__image,.blog__image',{delay:900,origin:'left'})
sr.reveal('.footer',{delay:1200,origin:'bottom',distance:'10px'})
// navigation

const navBar = document.getElementById('nav-bar');
const navMenu = document.getElementById('nav-menu');
const navClose= document.getElementById('nav-close');


navBar.addEventListener('click', () => {
  navMenu.classList.add('nav__show');
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
  centeredSlides: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView:2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  }
  // Navigation arrows
  
});

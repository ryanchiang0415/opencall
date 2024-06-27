import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 評審輪播
var swiper = new Swiper(".jurySwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  // spaceBetween: 80,
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1340: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // mousewheel: true,
  keyboard: true,
});

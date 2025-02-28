
new Swiper('.swiper-container', {
  mousewheel: true,
  freemode:true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    485: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
});

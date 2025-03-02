
const swiper1 = new Swiper('#swiper-1', {
  freemode:true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    485: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    }
  },
});

const swiper2 = new Swiper('#swiper-2', {
  freemode:true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    485: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    }
  },
});

const swiper3 = new Swiper('#swiper-3', {
  freemode:true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: ".swiper-pagination-3",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    485: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    }
  },
});

document.querySelectorAll('.swiper-container').forEach(container => {
  container.addEventListener('focus', () => {
    container.swiper.keyboard.enable();
  });
  container.addEventListener('blur', () => {
    container.swiper.keyboard.disable();
  });
});
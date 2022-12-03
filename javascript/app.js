const swiper0 = new Swiper('.animals__swiper1', {

  navigation: {
    nextEl: '.animals-next__btn',
    prevEl: '.animals-prev__btn',
  },

  autoplay: {
    delay: 2000,
  },
  
  breakpoints: {

  320: {
    slidesPerView: 1,
    spaceBetween: 40
  },

  480: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  
  785: {
    slidesPerView: 3,
    spaceBetween: 30
  },

  }

});

const swiper1 = new Swiper('.animals__swiper2', {

  navigation: {
    nextEl: '.animals-next__btn',
    prevEl: '.animals-prev__btn',
  },

  autoplay: {
    delay: 2000,
  },
  
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    
    785: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    
    }

});

const swiper2 = new Swiper('.testimonials__swiper', {
  spaceBetween: 30,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  
  breakpoints: {

    320: {
      slidesPerView: 1,
    },

    480: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },
    
    1200: {
      slidesPerView: 4,
      
    },
    
    }

});

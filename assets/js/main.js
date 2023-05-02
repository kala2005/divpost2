const swiper = new Swiper('.hero-gallery', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});
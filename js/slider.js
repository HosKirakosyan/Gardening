new Swiper("#swiper-1", {
  lazyLoading: true,
  loop: true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false
  },
  
  pagination: {
      el: "#swiper-1 .swiper-pagination",
      clickable: true
  },
  navigation: {
      nextEl: "#nav-right",
      prevEl: "#nav-left"
  },
  keyboard: {
      enabled: true
  }
});

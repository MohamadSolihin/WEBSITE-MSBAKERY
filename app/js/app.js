document.querySelector(".mobile-toggle").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickabe: true,

  }
})
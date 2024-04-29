let searchBar = document.getElementById("search-bar");
searchBar.setAttribute("size", searchBar.getAttribute("placeholder").length);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 13,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});

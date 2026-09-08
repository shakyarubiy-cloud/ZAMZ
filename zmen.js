
const carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel => {
  const slideContainer = carousel.querySelector(".slide-container");
  const leftBtn = carousel.querySelector(".left1");
  const rightBtn = carousel.querySelector(".right1");
  
  const scrollAmount = 300; // pixels to scroll per click

  rightBtn.addEventListener("click", () => {
    slideContainer.scrollLeft += scrollAmount;
  });

  leftBtn.addEventListener("click", () => {
    slideContainer.scrollLeft -= scrollAmount;
  });
});


const shirts = document.querySelectorAll(".shirts");

shirts.forEach((shirt) => {
  shirt.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
});

const searchIcon = document.querySelector('.bi-search');
const searchWrap = document.querySelector('.search-wrap');

searchIcon.addEventListener('click', () => {
  searchWrap.classList.toggle('active');
  if (searchWrap.classList.contains('active')) {
    searchWrap.querySelector('.search').focus();
  }
});


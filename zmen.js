
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


const shirts= document.querySelector(".shirts");
shirts.addEventListener("click", ()=>{
  window.location="checkout.html";
});



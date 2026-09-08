const images = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
];

let banner = document.querySelector(".banner");
let index = 0;

function changeBanner() {
    banner.style.backgroundImage = `url("${images[index]}")`;
    banner.style.backgroundPosition = "center 30%";

    index = (index + 1) % images.length;
}

changeBanner();

setInterval(changeBanner, 2000);
// Select all images inside .men divs

//dots
const tracks = document.querySelectorAll('.carousel-track, .carousel-track1');
const dotsContainers = document.querySelectorAll('.carousel-dots');

tracks.forEach((track, trackIndex) => {
  const dotsContainer = dotsContainers[trackIndex];
  const items = track.children;

  Array.from(items).forEach((item, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      item.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.dot');

  track.addEventListener('scroll', () => {
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(items).forEach((item, i) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(itemCenter - trackCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    dots.forEach(d => d.classList.remove('active'));
    dots[closestIndex].classList.add('active');
  });
});
// Men hover
const menItems = document.querySelectorAll(".men img");

const menHoverImages = [
  "images/f1.1.png",
  "images/f2.2.png",
  "images/f3.3.jpg",
  "images/f4.4.jpg",
  "images/f5.5.png"
];

const menOriginalImages = [];

menItems.forEach(img => {
  menOriginalImages.push(img.src);
});

menItems.forEach((img, index) => {

  img.addEventListener("mouseover", () => {
    img.src = menHoverImages[index];
    img.style.opacity = "1";
    img.style.filter="brightness(60%)";
    img.style.objectFit="cover";
    img.style.objectPosition="center"
  });

  img.addEventListener("mouseout", () => {
    img.src = menOriginalImages[index];
    img.style.opacity = "1";
    img.style.filter="brightness(100%)";
  });

});

// Women hover
const womenItems = document.querySelectorAll(".women img");
const womenHoverImages = [
  "images/g1.1.png",
  "images/g5.5.jpg",
  "images/g3.3.jpg",
  "images/g4.4.jpg",
  "images/g2.2.png"
];
const womenOriginalImages = [];
womenItems.forEach(img => womenOriginalImages.push(img.src));

womenItems.forEach((img, index) => {
  img.addEventListener("mouseover", () => {
    img.src = womenHoverImages[index];
    img.style.opacity = "1";
   img.style.filter = "brightness(60%)";
  });
  img.addEventListener("mouseout", () => {
    img.src = womenOriginalImages[index];
    img.style.opacity = "1";
     img.style.filter = "brightness(100%)";
  });
});

const mendiv= document.querySelector(".mendiv");
mendiv.addEventListener("click", ()=>{
  window.location="zmenSection.html";
});

const carouseld = document.querySelectorAll(".carouseld");

carouseld.forEach(carousel => {
  const slideContainerd = carousel.querySelector(".slide-containerd");
  const leftBtnd = carousel.querySelector(".left1d");
  const rightBtnd = carousel.querySelector(".right1d");
  
  const scrollAmount = 620; // pixels to scroll per click

  rightBtnd.addEventListener("click", () => {
    slideContainerd.scrollLeft += scrollAmount;
  });

  leftBtnd.addEventListener("click", () => {
    slideContainerd.scrollLeft -= scrollAmount;
  });
});

// Typewriter effect
const textParts = ["This is", "ZamZ", "Top Picks."];
const typewriter = document.getElementById("typewriter");
let partIndex = 0;
let charIndex = 0;
let hasTyped = false;

function typeWriter() {
  if (partIndex < textParts.length) {
    const currentPart = textParts[partIndex];

    if (charIndex < currentPart.length) {
      // "ZamZ" styling — slightly left, red, and larger
      if (partIndex === 1) {
        typewriter.innerHTML += `<span style="color:red; font-size:1.4em; font-style:oblique; display:inline-block; transform:translateX(250px);">${currentPart.charAt(charIndex)}</span>`;
      } 
      // All others — regular oblique
      else {
        typewriter.innerHTML += `<span style="font-style:oblique;">${currentPart.charAt(charIndex)}</span>`;
      }

      charIndex++;
      setTimeout(typeWriter, 100);
    } else {
      typewriter.innerHTML += "<br>"; // move to next line
      partIndex++;
      charIndex = 0;
      setTimeout(typeWriter, 300);
    }
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

window.addEventListener("scroll", () => {
  if (!hasTyped && isInViewport(typewriter)) {
    hasTyped = true;
    typeWriter();
  }
});

//topdiv
const topDiv = document.querySelector('.topDiv');

topDiv.addEventListener('mouseenter', () => {
  topDiv.style.backgroundColor = 'white';
  topDiv.style.color = 'black';
});

topDiv.addEventListener('mouseleave', () => {
  topDiv.style.backgroundColor = 'transparent';
  topDiv.style.color = 'white';
});

const searchIcon = document.querySelector('.bi-search');
const searchWrap = document.querySelector('.search-wrap');

searchIcon.addEventListener('click', () => {
  searchWrap.classList.toggle('active');
  if (searchWrap.classList.contains('active')) {
    searchWrap.querySelector('.search').focus();
  }
});
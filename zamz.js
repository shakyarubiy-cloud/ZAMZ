
const images=[
"images/hoodie.jpg",
"https://i.pinimg.com/1200x/1d/26/4c/1d264c988391a6b743cfbd299b381170.jpg",
"https://i.pinimg.com/1200x/f7/d9/1b/f7d91bc473148a463a50b75408579aae.jpg"
];
let banner = document.querySelector(".banner");
let index = 0;

function changeBanner() {
  banner.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length; // loops back to first image
}
changeBanner();
// Change every 3 seconds
setInterval(changeBanner, 3000);

// Select all images inside .men divs

// Men hover
const menItems = document.querySelectorAll(".men img");
const menHoverImages = [
  "https://i.pinimg.com/736x/b4/98/c5/b498c515bb7761efa701f2107855db05.jpg",
  "https://i.pinimg.com/1200x/68/4f/52/684f520eab740f5a8f40e414803876bd.jpg",
  "images/windjacket.jpg",
  "images/polo1.jpg",
  "https://i.pinimg.com/1200x/2e/21/a1/2e21a1485d50c6282b79068182371c7b.jpg"
];
const menOriginalImages = [];
menItems.forEach(img => menOriginalImages.push(img.src));

menItems.forEach((img, index) => {
  img.addEventListener("mouseover", () => {
    img.src = menHoverImages[index];
    img.style.opacity = "0.7";
  });
  img.addEventListener("mouseout", () => {
    img.src = menOriginalImages[index];
    img.style.opacity = "1";
  });
});

// Women hover
const womenItems = document.querySelectorAll(".women img");
const womenHoverImages = [
  "https://i.pinimg.com/1200x/3b/4f/ca/3b4fcae34834d5d74a237e89d90faf0c.jpg",
  "https://i.pinimg.com/1200x/cf/a1/5c/cfa15cb67f27636443c1d78b8571740e.jpg",
  "https://i.pinimg.com/1200x/a3/0b/94/a30b94e49a90cc5549b1d04f9a8361b6.jpg",
  "https://i.pinimg.com/1200x/80/34/40/8034403f339e4b34d0e5d50bcbf53990.jpg",
  "https://i.pinimg.com/1200x/aa/de/6b/aade6b83380b53caa8598396669fb0e1.jpg"
];
const womenOriginalImages = [];
womenItems.forEach(img => womenOriginalImages.push(img.src));

womenItems.forEach((img, index) => {
  img.addEventListener("mouseover", () => {
    img.src = womenHoverImages[index];
    img.style.opacity = "0.7";
  });
  img.addEventListener("mouseout", () => {
    img.src = womenOriginalImages[index];
    img.style.opacity = "1";
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
  
  const scrollAmount = 750; // pixels to scroll per click

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


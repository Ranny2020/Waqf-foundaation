// Example JavaScript code for future interactivity
document.addEventListener("DOMContentLoaded", () => {
  console.log("Header loaded");
});
document.getElementById("mobile-menu").addEventListener("click", function () {
  const navbar = document.getElementById("nav-list");
  navbar.classList.toggle("active");
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}
//  JavaScript to simulate real-time updates
let supporters = 0;
let funds = 0;
let charities = 0;

// Function to update stats every second
setInterval(() => {
  supporters += Math.floor(Math.random() * 10); // Simulate new supporters
  funds += Math.floor(Math.random() * 1000); // Simulate funds raised
  charities += Math.floor(Math.random() * 5); // Simulate new charities funded

  document.getElementById("supporters-count").innerText = supporters;
  document.getElementById(
    "funds-raised"
  ).innerText = `$${funds.toLocaleString()}`;
  document.getElementById("charities-funded").innerText = charities;
}, 1000);
let currentIndex = 0; // Track the current index of the carousel items
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function scrollCarousel(direction) {
  currentIndex += direction;

  // Loop back to the start or end
  if (currentIndex < 0) {
    currentIndex = totalItems - 1; // Go to the last item
  } else if (currentIndex >= totalItems) {
    currentIndex = 0; // Go back to the first item
  }

  const carouselItems = document.getElementById("carousel-items");
  const offset = -currentIndex * 320; // Adjust this value based on item width
  carouselItems.style.transform = `translateX(${offset}px)`; // Move the items
}
// Function to handle scroll events
const policyBlocks = document.querySelectorAll(".policy-block");

const showBlocksOnScroll = () => {
  const triggerBottom = (window.innerHeight / 5) * 4; // Trigger when 80% of the viewport is reached

  policyBlocks.forEach((block) => {
    const blockTop = block.getBoundingClientRect().top;

    if (blockTop < triggerBottom) {
      block.classList.add("visible"); // Add 'visible' class to show the block
    } else {
      block.classList.remove("visible"); // Remove 'visible' class to hide the block
    }
  });
};

window.addEventListener("scroll", showBlocksOnScroll);
showBlocksOnScroll(); // Initial call to show blocks on page load

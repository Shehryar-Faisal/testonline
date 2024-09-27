// Slider1

const slides = document.querySelectorAll(".s2");
var counter = 0;
var maxClicks = 4; // Set the maximum number of clicks

slides.forEach((s2, index) => {
  s2.style.right = `${index * 100}%`;
});

const goPrev = () => {
  if (counter > 0) {
    counter--;
    slideImage();
  }
  updateButtonState();
};

const goNext = () => {
  if (counter < slides.length - 1) {
    counter++;
    slideImage();
  }
  updateButtonState();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const prevButton = document.getElementById("prevButton"); // Add id="prevButton" to your previous button element
const nextButton = document.getElementById("nextButton"); // Add id="nextButton" to your next button element

function updateButtonState() {
  if (counter === 0) {
    prevButton.disabled = true; // Disable the previous button when at the beginning
  } else {
    prevButton.disabled = false;
  }

  if (counter === slides.length - 1) {
    nextButton.disabled = true; // Disable the next button when at the end
  } else {
    nextButton.disabled = false;
  }

  // Check if the maximum number of clicks has been reached, and disable the buttons if necessary
  if (counter === 0 && maxClicks <= 0) {
    prevButton.disabled = true;
    nextButton.disabled = true;
  }

  if (counter === slides.length - 1 && maxClicks <= 0) {
    prevButton.disabled = true;
    nextButton.disabled = true;
  }

  // Decrement the maxClicks counter
  maxClicks--;
}

// Initial slide
// slideImage();
// updateButtonState();


// End of slider1









// Slider 2
const slideContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const firstCardWidth = slider.querySelector(".slider01").offsetWidth;
const leftButton = slideContainer.querySelector("#left"); // Left button
const rightButton = slideContainer.querySelector("#right"); // Right button



let isDragging = false;
let startX;
let startScrollLeft;



// Add event listener for the left button to scroll the carousel to the left
leftButton.addEventListener("click", () => {
  slider.scrollLeft -= firstCardWidth; // Scroll left
});

// Add event listener for the right button to scroll the carousel to the right
rightButton.addEventListener("click", () => {
  slider.scrollLeft += firstCardWidth; // Scroll right
});
const dragStart = (e) => {
  isDragging = true;
  slider.classList.add("dragging");
  // Record the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = slider.scrollLeft;
};
const dragging = (e) => {
  if (!isDragging) return;
  // Update the scroll position of the carousel based on the cursor movement
  slider.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
  isDragging = false;
  slider.classList.remove("dragging");
};




slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
// Slider 2 END 
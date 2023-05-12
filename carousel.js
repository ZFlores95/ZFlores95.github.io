let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

// Show initial slide
showSlide();

// Add click event listeners to buttons
prevButton.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
});

nextButton.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  showSlide();
});

// Show slide based on slideIndex
function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-slide");
  }
  slides[slideIndex].classList.add("active-slide");
}

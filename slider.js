let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(n) {
  slideIndex = (n + totalSlides) % totalSlides;
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[slideIndex].style.display = "block";
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

showSlide(slideIndex);

document.querySelector(".prev-slide").addEventListener("click", prevSlide);
document.querySelector(".next-slide").addEventListener("click", nextSlide);

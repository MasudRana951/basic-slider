const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slides = slider.querySelectorAll('.slide');
let currentSlide = 0;

const slideWidth = slides[0].offsetWidth;

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
});

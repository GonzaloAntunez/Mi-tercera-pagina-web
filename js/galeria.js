const carousel = document.getElementById('carousel');
const slides = carousel.querySelectorAll('.carousel-slide');
let currentSlide = 0;
const slideWidth = slides[0].clientWidth;
let intervalID;

function mostrarSlide(slideIndex) {
  carousel.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  currentSlide = slideIndex;
}

function cambiarFoto() {
  currentSlide = (currentSlide + 1) % slides.length;
  mostrarSlide(currentSlide);
}

intervalID = setInterval(cambiarFoto, 4000);

// Detener el intervalo cuando el mouse está sobre el carrusel
carousel.addEventListener('mouseenter', () => {
  clearInterval(intervalID);
});

// Reanudar el intervalo cuando el mouse sale del carrusel
carousel.addEventListener('mouseleave', () => {
  intervalID = setInterval(cambiarFoto, 3500);
});
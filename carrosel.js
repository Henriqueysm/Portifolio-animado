const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalItems = carousel.children.length;
const itemsPerView = 2; // Quantidade de itens visíveis

function updateCarousel() {
    const itemWidth = 100 / itemsPerView; // Cada item ocupa uma fração igual do carrossel
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % (totalItems - (itemsPerView - 1));
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1) % (totalItems - (itemsPerView - 1));
    updateCarousel();
});

// Iniciar com a posição correta
updateCarousel();
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const pauseBtn = document.querySelector('.pause-btn');

let currentIndex = 0;
let intervalId;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function startSlider() {
    intervalId = setInterval(nextSlide, 3000); // прокрутка каждые 3 секунды
}

function stopSlider() {
    clearInterval(intervalId);
}

function togglePause() {
    if (intervalId) {
        stopSlider();
        pauseBtn.textContent = 'Продолжить';
        intervalId = null;
    } else {
        startSlider();
        pauseBtn.textContent = 'Пауза';
    }
}

startSlider(); // начать автоматическую прокрутку при загрузке страницы
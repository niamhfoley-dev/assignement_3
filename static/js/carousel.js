// static/js/carousel.js

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    let currentIndex = 0;

    const updateSlidePosition = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSlidePosition();
    });

    // Auto-play functionality
    setInterval(() => {
        nextButton.click();
    }, 5000); // Change slide every 5 seconds
});

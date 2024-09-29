// static/js/about.js

document.addEventListener('DOMContentLoaded', () => {
    // Carousel Functionality
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    const showTestimonial = (index) => {
        testimonials.forEach((item, idx) => {
            item.classList.remove('active');
            if (idx === index) {
                item.classList.add('active');
            }
        });
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    // Auto-play Carousel (Optional)
    let carouselInterval = setInterval(() => {
        nextBtn.click();
    }, 5000); // Change slide every 5 seconds

    // Pause auto-play on hover
    const carousel = document.querySelector('.testimonial-carousel');
    carousel.addEventListener('mouseover', () => {
        clearInterval(carouselInterval);
    });
    carousel.addEventListener('mouseout', () => {
        carouselInterval = setInterval(() => {
            nextBtn.click();
        }, 5000);
    });
});

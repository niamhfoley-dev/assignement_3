// In main.js
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (window.pageYOffset > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

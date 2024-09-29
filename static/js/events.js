// static/js/events.js

document.addEventListener('DOMContentLoaded', () => {
    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const eventCards = document.querySelectorAll('.event-card');

    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();

        eventCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p:nth-of-type(3)').textContent.toLowerCase();
            if (title.includes(filter) || description.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Category Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            eventCards.forEach(card => {
                if (category === 'All' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Booking Modal
    const bookButtons = document.querySelectorAll('.book-btn');
    const modal = document.getElementById('bookingModal');
    const closeModal = document.querySelector('.modal .close');
    const modalEventTitle = document.getElementById('modalEventTitle');
    const eventTitleInput = document.getElementById('eventTitleInput');

    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            modalEventTitle.textContent = `Book: ${title}`;
            eventTitleInput.value = title;
            modal.style.display = 'block';
        });
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close Modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

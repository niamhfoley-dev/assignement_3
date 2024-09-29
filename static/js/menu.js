// static/js/menu.js

document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    const searchInput = document.getElementById('searchInput');

    const modal = document.getElementById('itemModal');
    const closeModal = document.querySelector('.modal .close');
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');

    // Category Filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to clicked button
            button.classList.add('active');
            const category = button.getAttribute('data-category');

            menuItems.forEach(item => {
                if (category === 'All' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Search Functionality
    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();

        menuItems.forEach(item => {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            if (itemName.includes(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Modal Functionality
    const detailsButtons = document.querySelectorAll('.details-btn');

    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const description = button.getAttribute('data-description');
            const imageSrc = button.getAttribute('data-image');

            modalName.textContent = name;
            modalPrice.textContent = price;
            modalDescription.textContent = description;
            modalImage.src = imageSrc;
            modalImage.alt = name;

            modal.style.display = 'block';
        });
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close Modal when clicking outside of modal-content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

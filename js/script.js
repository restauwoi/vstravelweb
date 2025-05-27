// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Carousel JavaScript
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    const totalImages = carouselImages.length;

    function updateCarousel() {
        if (carouselImages.length > 0) {
            const imageWidth = carouselImages[0].offsetWidth; // Use offsetWidth for actual rendered width
            carouselTrack.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        }
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    // Auto-slide every 3 seconds
    if (carouselTrack) {
        setInterval(nextImage, 3000);
    }


    // Adjust carousel on window resize
    window.addEventListener('resize', () => {
        // Recalculate and update immediately on resize to prevent visual glitches
        updateCarousel();
    });

    // Initial update to set correct position on load
    window.addEventListener('load', updateCarousel);


    // FAQ Section JavaScript
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling; // Get the answer element
            const icon = question.querySelector('.faq-toggle-icon');

            // Toggle active class on question
            question.classList.toggle('active');

            // Toggle the 'show' class on the answer for smooth transition
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                answer.style.maxHeight = null; // Reset max-height
                answer.classList.add('hidden'); // Add hidden to hide it completely
            } else {
                // First remove hidden, then add show for transition
                answer.classList.remove('hidden');
                answer.classList.add('show');
                // Set max-height to scrollHeight to allow smooth transition
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

});
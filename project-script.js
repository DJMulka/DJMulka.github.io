document.addEventListener('DOMContentLoaded', function () {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.dot');

    if (slides.length === 0 || dots.length === 0) {
        console.log('No carousel found on this page');
        return;
    }

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Show current slide
        if (slides[index] && dots[index]) {
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }
    }

    function changeSlide(direction) {
        currentSlideIndex += direction;

        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        } else if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }

        showSlide(currentSlideIndex);
    }

    function currentSlide(index) {
        currentSlideIndex = index - 1;
        showSlide(currentSlideIndex);
    }

    // Make functions globally accessible for onclick handlers
    window.changeSlide = changeSlide;
    window.currentSlide = currentSlide;

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') changeSlide(-1);
        if (e.key === 'ArrowRight') changeSlide(1);
    });

    // Initialize first slide
    showSlide(0);
});

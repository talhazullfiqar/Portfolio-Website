function fadeonScroll() {
    const faders = document.querySelectorAll('.fader');

    // Function to check if at least 1% of an element is in the viewport
    const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;
        const elementVisible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const visibilityPercentage = (elementVisible / elementHeight) * 100;

        return visibilityPercentage >= 1; // Check if at least 1% of the element is visible
    };

    // Function to handle scroll-triggered animations
    const handleScrollAnimations = () => {
        faders.forEach((fader) => {
            if (isElementInViewport(fader)) {
                // Add the fade effect based on the 'active-about-fade-*' class
                if (fader.classList.contains('active-about-fade-up')) {
                    fader.classList.add('about-fade-up');
                } else if (fader.classList.contains('active-about-fade-down')) {
                    fader.classList.add('about-fade-down');
                } else if (fader.classList.contains('active-about-fade-right')) {
                    fader.classList.add('about-fade-right');
                } else if (fader.classList.contains('active-about-fade-in')) {
                    fader.classList.add('about-fade-in');
                }
            }
        });
    };

    // Optimized scroll handling with requestAnimationFrame
    const throttleScrollHandler = () => {
        requestAnimationFrame(handleScrollAnimations);
    };

    // Listen to scroll and load events
    window.addEventListener('scroll', throttleScrollHandler);
    window.addEventListener('load', handleScrollAnimations);
}

export default fadeonScroll;

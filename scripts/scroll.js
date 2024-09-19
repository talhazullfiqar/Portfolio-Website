function scrollnavigation() {
    document.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navigation-header');

        if (window.scrollY > 200) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

export default scrollnavigation;
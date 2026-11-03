
// =================================
// 1. REVEAL ELEMENTS ON SCROLL
// =================================

const revealElements = document.querySelectorAll(
    '.section, .project-card, .skill-card, .education-card'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
});


// =================================
// 2. HERO ENTRANCE ANIMATION
// =================================

window.addEventListener('load', () => {
    document.querySelector('.hero-content').classList.add('hero-visible');
    document.querySelector('.hero-visual').classList.add('hero-visible');
});


// =================================
// 3. DYNAMIC FOOTER YEAR
// =================================

const footer = document.querySelector('footer p');

if (footer) {
    footer.textContent =
        `Designed & built by Aaida Ahmed · ${new Date().getFullYear()}`;
}


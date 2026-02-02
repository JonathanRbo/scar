/* ============================================
   SCAR RPG - JavaScript Principal
   ============================================ */

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize WOW animations (if available)
document.addEventListener('DOMContentLoaded', function() {
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }
});

// Toggle category accordion
function toggleCategory(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('open');
    }
}

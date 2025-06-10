// Main JavaScript file for the portfolio
console.log("main.js loaded successfully.");

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        // Check if it's a valid selector and not just '#'
        if (targetId && targetId.length > 1) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Basic interaction for navigation (e.g., active class handling if not already done by nav.css)
// This is a placeholder, actual implementation might depend on nav.css or specific needs
const navLinks = document.querySelectorAll('.main-nav ul li a');
const currentPath = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split("/").pop();
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
        // link.classList.add('active'); // Assuming 'active' class is styled in CSS
        // The existing HTML already has 'active' class on the home link, this might need refinement
        // to dynamically set based on current page if not already handled.
    }
});

// Placeholder for potential future enhancements:
// - Dynamic content loading
// - Carousel/slider initializations
// - Form validation for contact forms
// - Interactive elements for portfolio items

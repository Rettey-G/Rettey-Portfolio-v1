// Web Apps Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation on scroll
    const webappItems = document.querySelectorAll('.webapp-item');
    
    // Simple animation function
    function checkScroll() {
        webappItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                item.classList.add('visible');
            }
        });
    }
    
    // Add initial class to all items
    webappItems.forEach(item => {
        item.classList.add('webapp-fade');
    });
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Check on initial load
    checkScroll();
    
    // Add CSS for the animation
    const style = document.createElement('style');
    style.textContent = `
        .webapp-fade {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .webapp-fade.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});
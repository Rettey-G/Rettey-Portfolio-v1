// Content Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const caseStudies = document.querySelectorAll('.case-study');
  const testimonials = document.querySelectorAll('.testimonial');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      // Filter portfolio items
      portfolioItems.forEach(item => {
        if (filterValue === 'all') {
          item.style.display = 'block';
        } else {
          const itemType = item.getAttribute('data-type');
          item.style.display = itemType === filterValue ? 'block' : 'none';
        }
      });

      // Filter case studies
      caseStudies.forEach(study => {
        if (filterValue === 'all') {
          study.style.display = 'block';
        } else {
          const studyType = study.getAttribute('data-type');
          study.style.display = studyType === filterValue ? 'block' : 'none';
        }
      });

      // Filter testimonials
      testimonials.forEach(testimonial => {
        if (filterValue === 'all') {
          testimonial.style.display = 'block';
        } else {
          const testimonialType = testimonial.getAttribute('data-type');
          testimonial.style.display = testimonialType === filterValue ? 'block' : 'none';
        }
      });
    });
  });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}); 
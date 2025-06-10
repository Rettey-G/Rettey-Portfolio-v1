// Content Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const videoCards = document.querySelectorAll('.video-card');
  const softwareCards = document.querySelectorAll('.software-card');
  const expertiseCards = document.querySelectorAll('.expertise-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      // Filter video cards
      videoCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'block';
        } else {
          const cardType = card.getAttribute('data-type');
          card.style.display = cardType === filterValue ? 'block' : 'none';
        }
      });

      // Filter software cards
      softwareCards.forEach(card => {
        if (filterValue === 'all' || filterValue === 'software') {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      // Filter expertise cards
      expertiseCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'block';
        } else {
          const cardType = card.getAttribute('data-type');
          card.style.display = cardType === filterValue ? 'block' : 'none';
        }
      });
    });
  });
}); 
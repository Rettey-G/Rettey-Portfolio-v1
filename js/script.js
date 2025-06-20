document.addEventListener('DOMContentLoaded', function() {
    // Set active nav item
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Initialize skill levels if they exist
    const skillLevels = document.querySelectorAll('.skill-level');
    if (skillLevels.length > 0) {
        skillLevels.forEach(skill => {
            const level = skill.getAttribute('data-level');
            skill.style.width = level + '%';
        });
    }

    // Certificate Cards Animation
    const cards = document.querySelectorAll('.certificate-card');
    if (cards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 0.5s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => {
            observer.observe(card);
        });
    }
});

// Experience Section Toggle
function toggleExperience(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// PDF Download Function
function downloadPDF() {
    const element = document.getElementById('cv-content');
    const opt = {
        margin: 10,
        filename: 'Abdul_Rahman_Gasim_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

// Word Download Function
function downloadWord() {
    alert('Word download functionality coming soon');
}
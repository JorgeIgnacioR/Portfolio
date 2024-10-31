

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });



document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.skill-item, .tool-item').forEach((item) => {
        observer.observe(item);
    });
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    // URL del archivo de tu resume
    const fileUrl = '/Users/jorgeignacioridella/Desktop/PROGRAMACION/Python/Proyectos Github/My portfolio/Jorge Ignacio Ridella(CV).pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Jorge Ignacio Ridella(CV).pdf'; // Nombre del archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


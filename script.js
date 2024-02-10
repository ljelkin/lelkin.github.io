document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('nav a'); // Adjusted selector

    navLinks.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('active'); // Use your specific class name
        }
    });
});


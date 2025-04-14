document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) { // Check if elements exist
        hamburger.addEventListener('click', () => {
            // Toggle 'active' class on hamburger icon for animation
            hamburger.classList.toggle('active');
            // Toggle 'active' class on nav menu to show/hide
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked (optional but good UX)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    } else {
        console.error("Hamburger or Nav Menu element not found!");
    }

    // --- Update Copyright Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) { // Check if element exists
        yearSpan.textContent = new Date().getFullYear();
    } else {
        console.error("Element with ID 'current-year' not found!");
    }

    // --- Active Nav Link Highlighting (Simple version based on URL) ---
    // This is basic. For more complex sites, server-side or more JS logic might be needed.
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('.nav-link');
    const homeLink = document.querySelector('.nav-link[href="index.html"]'); // Specific handle for homepage

    navLinks.forEach(link => {
        // Remove existing active class first
        link.classList.remove('active');

        // Check if the link's href is part of the current URL
        // Be careful with simple includes, 'about.html' might be inside 'about-more.html'
        // Exact match is better if possible, or match end of string
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

     // Special case for index.html - if no other link is active and URL ends with '/' or '/index.html'
     let isActiveSet = false;
     navLinks.forEach(link => {
         if(link.classList.contains('active')) isActiveSet = true;
     });

     if (!isActiveSet && (currentLocation.endsWith('/') || currentLocation.endsWith('/index.html')) && homeLink) {
        homeLink.classList.add('active');
     }


    // Add more JS features here as needed (e.g., form validation, image sliders)

}); // End DOMContentLoaded

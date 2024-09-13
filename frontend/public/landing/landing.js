// landing.js

// Load the Home page when the site is first opened
window.onload = function() {
    loadHomePage();
    setActiveNav('home-link');
    setHireBtnListeners(); // Add the function call to set event listeners for hire buttons
};

// Event listeners for main navigation links
document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault();
    loadHomePage();
    setActiveNav('home-link');
    setHireBtnListeners(); // Reapply event listener after loading the page
});

document.getElementById('portfolio-link').addEventListener('click', function(e) {
    e.preventDefault();
    loadPortfolio();
    setActiveNav('portfolio-link');
});

document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    loadAboutMe();
    setActiveNav('about-link');
});

document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();
    loadTestimonials();
    setActiveNav('contact-link');
});

// Event listeners for side menu navigation links
document.getElementById('home-link-side').addEventListener('click', function(e) {
    e.preventDefault();
    loadHomePage();
    setActiveNav('home-link');
    closeSideMenu(); // Close the side menu
});

document.getElementById('portfolio-link-side').addEventListener('click', function(e) {
    e.preventDefault();
    loadPortfolio();
    setActiveNav('portfolio-link');
    closeSideMenu(); // Close the side menu
});

document.getElementById('about-link-side').addEventListener('click', function(e) {
    e.preventDefault();
    loadAboutMe();
    setActiveNav('about-link');
    closeSideMenu(); // Close the side menu
});

document.getElementById('contact-link-side').addEventListener('click', function(e) {
    e.preventDefault();
    loadTestimonials();
    setActiveNav('contact-link');
    closeSideMenu(); // Close the side menu
});

// Function to close the side menu
function closeSideMenu() {
    document.querySelector('.side-menu').classList.remove('active');
}

// Function to handle "Hire me" buttons
function setHireBtnListeners() {
    const hireButtons = document.querySelectorAll('.hire-btn, .hire-btn-main'); // Select both buttons
    hireButtons.forEach(button => {
        button.addEventListener('click', function() {
            const phoneNumber = '+2349167843179';
            const whatsappURL = `https://wa.me/${phoneNumber}`;
            window.open(whatsappURL, '_blank');
        });
    });
}

// Initial call to set event listeners
setHireBtnListeners();

// Event listener for hamburger menu click
document.querySelector('.hamburger').addEventListener('click', function(e) {
    console.log("Hamburger clicked"); // For debugging
    document.querySelector('.side-menu').classList.toggle('active'); // Toggle side menu visibility
    e.stopPropagation(); // Prevent this event from triggering the document click listener
});

// Close side menu when a link inside is clicked
document.querySelectorAll('.side-menu a, .side-menu button').forEach(item => {
    item.addEventListener('click', () => {
        closeSideMenu(); // Close the side menu when any link is clicked
    });
});

// Close side menu when clicking outside of it
document.addEventListener('click', function(e) {
    const sideMenu = document.querySelector('.side-menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Check if the click is outside the side menu and hamburger icon
    if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeSideMenu(); // Close the menu
    }
});

// Prevent side menu click from closing the menu
document.querySelector('.side-menu').addEventListener('click', function(e) {
    e.stopPropagation(); // Stop the click inside the menu from bubbling up to the document
});

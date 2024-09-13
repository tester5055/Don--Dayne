// Function to load the home page content dynamically
function loadHomePage() {
    const main = document.getElementById('main-content');
    
    main.innerHTML = `
        <section class="intro">
            <div class="intro-text">
                <div class="hi">
                    <h2>Hi there <i class="fi fi-rr-hand-wave"></i></h2>
                </div>
                <h1> I'm <span>Oladoyin</span>,</h1>
                <h1> a <span>Digital Product Designer</span></h1>
                <p>I specialize in designing digital products that prioritize user needs and drive business success.</p>
                <button class="hire-btn-main"id="hire-btn">
                    <i class="fas fa-phone-alt"></i> Hire me!
                </button>
            </div>
            <div class="intro-image">
                <img src="../image/main.webp" alt="Oladoyin's photo">
            </div>
        </section>

        <!-- Availability section dynamically loaded -->
        <div class="availability">
            <span>Available for work</span>
            <span>•</span>
            <span>Available for work</span>
            <span>•</span>
            <span>Available for work</span>
            <span>•</span>
            <span>Available for work</span>
        </div>

        <!-- Tools section -->
        <section class="tools-section">
            <h3>My Tools</h3>
            <div class="tools-carousel">
                <img src="../image/figma.webp" alt="Figma" class="tool-icon">
                <img src="../image/photoshop.webp" alt="Photoshop" class="tool-icon">
                <img src="../image/wordpress.webp" alt="WordPress" class="tool-icon">
                <img src="../image/trello.webp" alt="Trello" class="tool-icon">
                <img src="../image/miro.webp" alt="Miro" class="tool-icon">
                <!-- Add more tool icons as needed -->
            </div>
        </section>
    `;
}

// Function to highlight the active navigation link
function setActiveNav(linkId) {
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        if (link.id === linkId) {
            link.style.color = 'blue';  // Highlight active link
        } else {
            link.style.color = ''; // Reset other links
        }
    });
}

// Add a call to load the home page when the document is ready
document.addEventListener("DOMContentLoaded", loadHomePage);

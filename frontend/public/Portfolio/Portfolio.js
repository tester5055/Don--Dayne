// frontend\public\Portfolio\Portfolio.js

function loadPortfolio() {
    const main = document.getElementById('main-content');

    main.innerHTML = `
        <section class="portfolio-section">
           
            <div class="portfolio-grid">
                <div class="portfolio-sidebar">
                    <ul>
                        <li class="active" onclick="handleNavigationClick(this, 'live')">Live (4)</li>
                        <li onclick="handleNavigationClick(this, 'comingSoon')">Coming Soon (2)</li>
                        <li onclick="handleNavigationClick(this, 'caseStudies')">Case Studies (3)</li>
                        <li onclick="handleNavigationClick(this, 'exploration')">UI/UX Exploration (5)</li>
                    </ul>
                </div>
                <div id="portfolio-content" class="portfolio-content">
                    <!-- Project cards will be loaded here -->
                </div>
            </div>
        </section>
    `;

    // Load the live projects by default
    showProjects('live');
}

function handleNavigationClick(element, category) {
    // Remove 'active' class from all navigation items
    const navItems = document.querySelectorAll('.portfolio-sidebar ul li');
    navItems.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked item
    element.classList.add('active');

    // Show the projects for the selected category
    showProjects(category);
}

function showProjects(category) {
    const contentDiv = document.getElementById('portfolio-content');

    if (category === 'comingSoon') {
        contentDiv.innerHTML = getComingSoonProjects('Quiz-Down');
    } else if (category === 'caseStudies') {
        loadProject(currentIndex); // Load from Portfolio4.js
    } else if (category === 'exploration') {
        loadUIUXProject(uiuxIndex); // Load from Portfolio5.js
    } else {
        contentDiv.innerHTML = getProjectCards(category);
    }
}




// Ensure the portfolio is loaded when the page loads
document.addEventListener('DOMContentLoaded', loadPortfolio);

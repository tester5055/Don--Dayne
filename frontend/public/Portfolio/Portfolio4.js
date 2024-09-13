// Define an array to store your projects
const projects = [
    {
        title: 'BudgetPro',
        description: 'BudgetPro is a fintech app dedicated to simplifying personal finance management.',
        date: '2 Months',
        tags: ['Finance', 'Mobile app Design', 'Prototyping', 'Case Study', 'Banking', 'Fintech'],
        image: '/image/BudgetPro-bg.webp',  // Replace with the correct path to the image file
        link: 'View More'
    }
    ,
    {
        title: 'Docket',
        description: 'Dive into the world of Docket, a versatile productivity app with educative features.',
        date: '2 Weeks',
        tags: ['Productivity', 'Students', 'Integrability', 'Prototyping'],
        image: '/image/Docket-bg.webp',  // Replace with the correct path to the image file
        link: 'View More'
    }
    ,
    {
        "title": "Coinsack",
        "description": "Coinsack is a crypto app designed to enhance the mobile and web experience for both novice and experienced cryptocurrency traders.",
        "date": "2 Weeks",
        "tags": ["Cryptocurrency", "Blockchain", "UI/UX Design", "UX Research", "Web 3", "Wallets", "Education"],
        "image": '/image/coinsack-bg.webp',  // Adjust this path to match the actual image path you're using
        "link": "View More"  // Update this link to point to the appropriate URL or page reference
    }
    
];

// Keep track of the current project index
let currentIndex = 0;

// Function to load a project based on the current index
function loadProject(index) {
    const project = projects[index];
    const contentDiv = document.getElementById('portfolio-content');

    contentDiv.innerHTML = `
        <div class="portfolio-card">
            <div class="card-header">
                <img src="${project.image}" alt="${project.title}" />
                <h3>${project.title}</h3>
            </div>
            <p class="project-description">${project.description}</p>
            <p class="project-date">${project.date}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <button class="visit-btn">${project.link}</button>
            <div class="nav-buttons">
                <button class="prev-btn" onclick="prevProject()"><i class="fa fa-chevron-left"></i></button>
                <button class="next-btn" onclick="nextProject()"><i class="fa fa-chevron-right"></i></button>
            </div>
        </div>
    `;
}

// Function to show the next project
function nextProject() {
    if (currentIndex < projects.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Go back to the first project if at the last one
    }
    loadProject(currentIndex);
}

// Function to show the previous project
function prevProject() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = projects.length - 1; // Go to the last project if at the first one
    }
    loadProject(currentIndex);
}



// Load the first project when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadProject(currentIndex);
});

function getComingSoonProjects(category) {
    let projectHTML = '';
    let projects = ['Quiz-Down', 'FFQ']; // Define your project categories in an array
    let currentIndex = projects.indexOf(category); // Get the current index of the category

    switch (category) {
        case 'Quiz-Down':
            projectHTML = `
                <div class="portfolio-card">
                    <div class="card-header">
                        <img src="/image/Quiz-Down-bg.webp" alt="Quiz-Down" />
                        <h3>Quiz-Down</h3>
                    </div>
                    <p class="project-description">Quiz-Down is a web app that helps individuals test their knowledge across various topics.</p>
                    <p class="project-date">07-06-2024 - Present</p>
                    <div class="tags Quiz-Down">
                        <span>Product Design</span>
                        <span>UI/UX Design</span>
                        <span>Prototyping</span>
                        <span>Web App</span>
                        <span>Quizzes</span>
                    </div>
                    <button class="visit-btn Quiz-Down-btn" onclick="openModal('Quiz-Down')">View More</button>
                    <div class="nav-buttons">
                        <button class="prev-btn" onclick="showProjectsByIndex(${(currentIndex - 1 + projects.length) % projects.length})">
                            <i class="fa fa-chevron-left"></i>
                        </button>
                        <button class="next-btn" onclick="showProjectsByIndex(${(currentIndex + 1) % projects.length})">
                            <i class="fa fa-chevron-right"></i>
                        </button>
                    </div>
                </div>`;
            break;
        case 'FFQ':
            projectHTML = `
                <div class="portfolio-card">
                    <div class="card-header">
                        <img src="/image/ffq-bg.webp" alt="FFQ" />
                        <h3>FFQ</h3>
                    </div>
                    <p class="project-description">Designed an onboarding experience for FFQ, a web app that helps users bring their physical businesses online.</p>
                    <p class="project-date">22-06-2024 - 25-06-2024</p>
                    <div class="tags FFQ">
                        <span>E-commerce</span>
                        <span>Onboarding</span>
                        <span>Product Design</span>
                        <span>Web App</span>
                        <span>Digital Transformation</span>
                        <span>Business</span>
                    </div>
                    <button class="visit-btn FFQ-btn" onclick="openModal('FFQ')">View More</button>
                    <div class="nav-buttons">
                        <button class="prev-btn" onclick="showProjectsByIndex(${(currentIndex - 1 + projects.length) % projects.length})">
                            <i class="fa fa-chevron-left"></i>
                        </button>
                        <button class="next-btn" onclick="showProjectsByIndex(${(currentIndex + 1) % projects.length})">
                            <i class="fa fa-chevron-right"></i>
                        </button>
                    </div>
                </div>`;
            break;
        default:
            projectHTML = `<p>No projects available in this category yet.</p>`;
            break;
    }

    return projectHTML;
}


// New function to handle project display by index
function showProjectsByIndex(index) {
    const projects = ['Quiz-Down', 'FFQ']; // List of your categories
    showProjects('comingSoon'); // Load "coming soon" projects
    document.getElementById('portfolio-content').innerHTML = getComingSoonProjects(projects[index]);
}

// Function to open the modal with images dynamically
function openModal(project) {
    let modalHTML = '';
    switch (project) {
        case 'Quiz-Down':
            modalHTML = `
                <div class="modal-content">
                    <span class="close-btn" onclick="closeModal()">&times;</span>
                    <h3>Quiz-Down</h3>
                    <div class="modal-images">
                        <img src="/image/Quiz-Down-1.webp" alt="Quiz-Down Image 1" />
                        <img src="/image/Quiz-Down-2.webp" alt="Quiz-Down Image 2" />
                        <img src="/image/Quiz-Down-3.webp" alt="Quiz-Down Image 3" />
                        <img src="/image/Quiz-Down-4.webp" alt="Quiz-Down Image 4" />
                    </div>
                </div>`;
            break;
        case 'FFQ':
            modalHTML = `
                <div class="modal-content">
                    <span class="close-btn" onclick="closeModal()">&times;</span>
                    <h3>FFQ</h3>
                    <div class="modal-images">
                        <img src="/image/FFQ-1.webp" alt="FFQ Image 1" />
                        <img src="/image/FFQ-2.webp" alt="FFQ Image 2" />
                        <img src="/image/FFQ-3.webp" alt="FFQ Image 3" />
                        <img src="/image/FFQ-4.webp" alt="FFQ Image 4" />
                    </div>
                </div>`;
            break;
    }
    
    // Create the modal container if it doesn't exist
    let modal = document.getElementById('modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal';
        modal.classList.add('modal');
        document.body.appendChild(modal);
    }

    modal.innerHTML = modalHTML;
    modal.style.display = 'block'; // Show the modal
    
    // Add event listener for clicks outside the modal content
    modal.addEventListener('click', function(event) {
        if (event.target === modal) { // Check if click is outside the modal content
            closeModal(); // Close the modal
        }
    });
}

// Function to close the modal and remove it from the DOM
function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none'; // Hide the modal
        modal.innerHTML = ''; // Clear the modal content
    }
}

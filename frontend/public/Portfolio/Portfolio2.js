// frontend\public\Portfolio\portfolio-cards.js

function getProjectCards(category) {
    let projectHTML = '';

    switch (category) {
        case 'live':
            projectHTML = `
                <div class="portfolio-card">
                    <div class="card-header">
                        <img src="/image/briefcraft-bg.webp" alt="BriefCraft" />
                        <h3>BriefCraft</h3>
                    </div>
                    <p class="project-description">BriefCraft is a versatile tool for generating detailed and structured project briefs tailored to various roles, industries, difficulty levels, and durations.</p>
                    <p class="project-date">24-05-2024 - Present</p>
                    <div class="tags BriefCraft">
                        <span>Product Design</span>
                        <span>User Research</span>
                        <span>User Testing</span>
                        <span>Teamwork</span>
                        <span>Sprints</span>
                        <span>Task Generator</span>
                        <span>Brain Storming</span>
                        <span>User Personas</span>
                    </div>
                    <button class="visit-btn BriefCraft-btn">Visit BriefCraft</button>
                    <div class="nav-buttons">
                        <button class="prev-btn" onclick="showProjects('webstarta')"> <i class="fa fa-chevron-left"></i></button>
                        <button class="next-btn" onclick="showProjects('cde')"> <i class="fa fa-chevron-right"></i></button>
                    </div>
                </div>
            `;
            break;
        case 'cde':
            projectHTML = `
                <div class="portfolio-card">
                    <div class="card-header">
                        <img src="/image/cde-bg.webp" alt="CDE" />
                        <h3>CDE</h3>
                    </div>
                    <p>CDE is a data engineering bootcamp focused on training individuals and equipping them with industry skills.</p>
                    <p class="project-date">27-03-2024 - Present</p>
                    <div class="tags cde">
                        <span>UI/UX Design</span>
                        <span>Prototyping</span>
                        <span>Wireframing</span>
                        <span>Data Engineering</span>
                        <span>Bootcamp</span>
                        <span>EdTech</span>
                    </div>
                    <button class="visit-btn cde-btn">Visit CDE</button>
                    <div class="nav-buttons">
                        <button class="prev-btn" onclick="showProjects('live')"> <i class="fa fa-chevron-left"></i></button>
                        <button class="next-btn" onclick="showProjects('handworka')"> <i class="fa fa-chevron-right"></i></button>
                    </div>
                </div>
            `;
            break;
        case 'handworka':
            projectHTML = `
                <div class="portfolio-card">
                    <div class="card-header">
                        <img src="/image/handworka-bg.webp" alt="HandWorka" />
                        <h3>HandWorka</h3>
                    </div>
                    <p>HandWorka is a Nigerian startup empowering individuals with skill development and employment opportunities.</p>
                    <p class="project-date">Feb 2023 - Present</p>
                    <div class="tags handworka">
                        <span>Product Design</span>
                        <span>Sprints</span>
                        <span>User Interviews</span>
                        <span>User Research</span>
                        <span>EdTech</span>
                        <span>Wordpress</span>
                        <span>Vocational Training</span>
                        <span>Project Management</span>
                    </div>
                    <button class="visit-btn handworka handworka-btn">Visit HandWorka</button>
                    <div class="nav-buttons">
                        <button class="prev-btn" onclick="showProjects('cde')"> <i class="fa fa-chevron-left"></i></button>
                        <button class="next-btn" onclick="showProjects('webstarta')"> <i class="fa fa-chevron-right"></i></button>
                    </div>
                </div>
            `;
            break;
        case 'webstarta':
            projectHTML = `
                <div class="portfolio-card">
                    <div class="card-header">
                        <img src="/image/webstarta-bg.webp" alt="WebStarta" />
                        <h3>WebStarta</h3>
                    </div>
                    <p>Webstarta is a global SaaS web design agency that operates remotely, providing innovative and efficient web design solutions to clients worldwide.</p>
                    <p class="project-date">April 2022 - Present</p>
                    <div class="tags">
                        <span>UI/UX Design</span>
                        <span>Product Design</span>
                        <span>Market Research</span>
                        <span>Sprints</span>
                        <span>Freelancing</span>
                        <span>Agency</span>
                        <span>SaaS</span>
                    </div>
                    <button class="visit-btn WebStarta-btn">Visit WebStarta </button>
                    <div class="nav-buttons">
                        <button class="prev-btn" onclick="showProjects('handworka')"> <i class="fa fa-chevron-left"></i></button>
                        <button class="next-btn" onclick="showProjects('live')"> <i class="fa fa-chevron-right"></i></button>
                    </div>
                </div>
            `;
            break;
        default:
            projectHTML = `<p>No projects available in this category yet.</p>`;
            break;
    }

    return projectHTML;
}
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('BriefCraft-btn')) {
        window.location.href = 'https://x.com/briefcraftteam?lang=zh-Hant';
    }
});
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('cde-btn')) {
        window.location.href = 'https://coredataengineers.com/';
    }
});
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('handworka-btn')) {
        window.location.href = 'https://handworka.com/';
    }
});
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('WebStarta-btn')) {
        window.location.href = 'https://webstarta.com.ng/';
    }
});
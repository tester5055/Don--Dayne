// Define an array to store your UI/UX exploration projects
const uiuxProjects = [
    {
        title: 'Rapid Bank',
        description: 'Rapid Bank is an attempt to improve traditional bank apps’ designs as compared to newer fintech.',
        date: '02-06-2024 - Present',
        tags: ['Finance', 'Mobile App Design', 'Dashboard', 'Banking App', 'Fintech', 'Data Analysis'],
        image: '/image/rapidbank-bg.webp',  // Ensure the correct path to the image is placed here
        link: 'View More'
        ,
        images: [
            '/image/pop-up/RapidBank-1.webp',
           '/image/pop-up/RapidBank-2.webp',
           '/image/pop-up/RapidBank-3.webp',
           '/image/pop-up/RapidBank-4.webp',
           '/image/pop-up/RapidBank-5.webp',
           '/image/pop-up/RapidBank-6.webp',
           '/image/pop-up/RapidBank-7.webp',
         
           
        ]
    },
    {
        title: 'CoinHub',
        description: 'CoinHub is a web 3 app that helps its users carry out transactions on the blockchain and manage their wallets.',
        date: '1 day',
        tags: ['Web 3', 'Blockchain', 'Wallets', 'Crypto', 'Dexapp', 'Analysis', 'Product Design', 'UI/UX Design'],
        image: '/image/CoinHub-bg.webp',  // Updated with the correct path to the image
        link: 'View More',
        images: [
            '/image/pop-up/CoinHub-1.webp',
           '/image/pop-up/CoinHub-2.webp',
           '/image/pop-up/CoinHub-3.webp',
           '/image/pop-up/CoinHub-4.webp',
        ]
    },
    {
        title: 'Abba',
description: 'Abba is a Christian social media app that connects believers together and serves as an alternative to other casual apps.',
date: '2 days',
tags: ['Religion', 'Christianity', 'Social Media', 'Messaging', 'Preaching Christ', 'Alternatives', 'UI/UX Design'],
image: '/image/Abba-bg.webp',  // Updated with the correct path to the image
link: 'View More',
        images: [
            '/image/pop-up/Abba-1.webp',
            '/image/pop-up/Abba-2.webp',
            '/image/pop-up/Abba-3.webp',
            '/image/pop-up/Abba-4.webp',
            '/image/pop-up/Abba-5.webp',
            '/image/pop-up/Abba-6.webp',
            '/image/pop-up/Abba-7.webp',
            '/image/pop-up/Abba-8.webp',
            '/image/pop-up/Abba-9.webp',
            '/image/pop-up/Abba-10.webp',
           
        ]
    },
    {
        title: 'SaaSi',
        description: 'SaaSi is a powerful platform designed to unlock the full potential of your SaaS applications.',
        date: '2 days',
        tags: ['SaaS', 'Scalability', 'Data Management', 'Data Analysis', 'Dashboard', 'Pricing', 'User Acquisition'],
        image: '/image/SaaSi-bg.webp',  // Updated with the correct path to the image
        link: 'View More',
        images: [
            '/image/pop-up/SaaSi-1.webp',
            '/image/pop-up/SaaSi-2.webp',
            '/image/pop-up/SaaSi-3.webp',
            '/image/pop-up/SaaSi-4.webp',
            '/image/pop-up/SaaSi-5.webp',
            '/image/pop-up/SaaSi-6.webp',
        ]
    },
    {
        
            title: 'TableLux',
            description: 'TableLux revolutionizes the dining experience by allowing users to discover top restaurants, make reservations effortlessly, and unlock exclusive perks.',
            date: '2 days',
            tags: ['Restaurant', 'Reservations', 'Booking', 'Food', 'Discovery', 'Mapping'],
            image: '/image/TableLux-bg.webp',  // Replace with the correct path to the image
            link: 'View More' ,
        images: [
            '/image/pop-up/TableLux-1.webp',
            '/image/pop-up/TableLux-2.webp',
            '/image/pop-up/TableLux-3.webp',
            '/image/pop-up/TableLux-4.webp',
            '/image/pop-up/TableLux-5.webp',
            '/image/pop-up/TableLux-6.webp',
            '/image/pop-up/TableLux-7.webp',
            '/image/pop-up/TableLux-8.webp',
            '/image/pop-up/TableLux-9.webp',
            '/image/pop-up/TableLux-10.webp',
            '/image/pop-up/TableLux-11.webp',
            '/image/pop-up/TableLux-12.webp',
            '/image/pop-up/TableLux-13.webp',
            '/image/pop-up/TableLux-14.webp',
            '/image/pop-up/TableLux-15.webp',
        ]
    }
];

// Keep track of the current project index for UI/UX Exploration
let uiuxIndex = 0;

function loadUIUXProject(index) {
    const project = uiuxProjects[index];
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
            <button class="visit-btn" onclick="openUIUXModal(${index})">${project.link}</button>
            <div class="nav-buttons">
                <button class="prev-btn" onclick="prevUIUXProject()"><i class="fa fa-chevron-left"></i></button>
                <button class="next-btn" onclick="nextUIUXProject()"><i class="fa fa-chevron-right"></i></button>
            </div>
        </div>
    `;
}

// Function to show the next UI/UX project
function nextUIUXProject() {
    if (uiuxIndex < uiuxProjects.length - 1) {
        uiuxIndex++;
    } else {
        uiuxIndex = 0; // Loop back to the first project
    }
    loadUIUXProject(uiuxIndex);
}

// Function to show the previous UI/UX project
function prevUIUXProject() {
    if (uiuxIndex > 0) {
        uiuxIndex--;
    } else {
        uiuxIndex = uiuxProjects.length - 1; // Go to the last project
    }
    loadUIUXProject(uiuxIndex);
}

// Load the first UI/UX exploration project when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadUIUXProject(uiuxIndex);
});
function openUIUXModal(index) {
    const project = uiuxProjects[index];
    let modalHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <h3>${project.title}</h3>
            <div class="modal-images">
                ${project.images.map(image => `<img src="${image}" alt="${project.title} Image" />`).join('')}
            </div>
        </div>`;

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
        if (event.target === modal) {
            closeModal(); // Close the modal
        }
    });
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        modal.innerHTML = ''; // Clear the modal content
    }
}

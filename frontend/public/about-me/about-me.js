function loadAboutMe() {
    const phoneNumber = '+2349167843179'; // Your WhatsApp number
    const main = document.getElementById('main-content');

    main.innerHTML = `
        <section class="about-me-section">
            <!-- New About Me Section -->
            <div class="about-me-info">
                <!-- Shortened About Me Text -->
                <p class="about-me-text" id="short-text">
                    Hello, I'm Oluwatosin Oladoyin, also known as Don Wayne in the dynamic world of design. My journey began just over two years ago, and from day one, my passion for continuous improvement and self-growth has been unwavering. In this time, I've collaborated with start-ups and explored various creative ventures...
                </p>
                
                <!-- Full About Me Text (hidden by default) -->
                <p class="about-me-text" id="full-text" style="display: none;">
                    Hello, I'm Oluwatosin Oladoyin, also known as Don Wayne in the dynamic world of design. My journey began just over two years ago, and from day one, my passion for continuous improvement and self-growth has been unwavering. In this time, I've had the privilege of collaborating with 3 start-ups, contributing to their business growth through my design expertise. When I’m not designing, I find inspiration in the pages of books, the thrill of games, and the warmth of connecting with family and friends. Data analysis is another realm I'm keenly interested in, reflecting my commitment to continuous learning. <br>As a Product Designer, I am dedicated to crafting digital products that prioritize the needs and experiences of users. I believe in harmonizing user-centric design principles with the strategic objectives of businesses. My goal is to deliver designs that not only resonate with users but also propel businesses towards success. I am a firm believer in the power of hard work, patience, and consistency. Simplicity is at the core of my design ethos, guided by data-driven insights.
                </p>

                <!-- See More Button -->
                <button id="see-more-btn" class="see-more-btn">See More</button>
                
                <!-- Three Images Side by Side -->
                <div class="about-me-images">
                    <img src="../image/main.webp" alt="Image 1" class="about-me-image">
                    <img src="../image/main-2.webp" alt="Image 2" class="about-me-image">
                    <img src="../image/main-3.webp" alt="Image 3" class="about-me-image">
                </div>
            </div>
            
            <!-- Contact Section -->
            <h2>Contact me</h2>
            <p>Let’s Get Started on Your Next Project <span class="emoji">🚀</span></p>
            
            <!-- Contact Button -->
            <div id="Contact-btn" class="contact-button-wrapper">
                <button class="contact-btn">
                    <i class="fas fa-phone-alt"></i> Let’s Talk
                </button>
            </div>
            
            <!-- Social Media Links -->
            <div class="social-links">
                <a href="https://wa.me/${phoneNumber}" target="_blank">
                    <img src="../image/whatsapp.webp" alt="WhatsApp" class="social-icon">
                </a>
                <a href="mailto:your.email@example.com" target="_blank">
                    <img src="../image/gmail.webp" alt="Email" class="social-icon">
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank">
                    <img src="../image/linkedin.webp" alt="LinkedIn" class="social-icon">
                </a>
                <a href="https://twitter.com/yourProfile" target="_blank">
                    <img src="../image/twitter.webp" alt="X (Twitter)" class="social-icon">
                </a>
                <a href="https://behance.net/yourProfile" target="_blank">
                    <img src="../image/Behance.webp" alt="Behance" class="social-icon">
                </a>
                <a href="https://drive.google.com/your-resume-link" target="_blank">
                    <img src="../image/google-docs.webp" alt="Resume" class="social-icon">
                </a>
            </div>
        </section>
    `;

    // Adding event listener for the "See More" button
    const seeMoreBtn = document.getElementById('see-more-btn');
    const fullText = document.getElementById('full-text');
    const shortText = document.getElementById('short-text');

    seeMoreBtn.addEventListener('click', function() {
        if (fullText.style.display === 'none') {
            fullText.style.display = 'block';
            shortText.style.display = 'none';
            seeMoreBtn.textContent = 'See Less';
        } else {
            fullText.style.display = 'none';
            shortText.style.display = 'block';
            seeMoreBtn.textContent = 'See More';
        }
    });

    // Adding event listener for the contact button
    const contactBtn = document.querySelector('#Contact-btn .contact-btn');
    contactBtn.addEventListener('click', function() {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    });
}

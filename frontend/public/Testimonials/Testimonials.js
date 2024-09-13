// Function to load the testimonials page content dynamically
function loadTestimonials() {
    const testimonials = [
        {
            text: "Oladoyin is a reliable, trustworthy and diligent individual with a great work ethic and commitment to excellence. His ability to be empathetic and think innovatively is setting him on a high pedestal as a promising professional in the field of User Experience Design. These qualities have been exhibited in several digital projects and products he has worked on with us at both Webstarta and Handworka, which largely contributed to their successes. I proudly recommend him for his professionalism, integrity, and commitment to excellence.",
            name: "Saheed Badru",
            position: "Co-founder, Handworka",
            image: "../image/Saheed-Badru.webp"
        },
        {
            text: "Absolutely impressed with his resourcefulness and reliability! His unwavering passion for learning and personal development truly sets him apart. As a UI/UX designer, he brings immense value to any team. His creativity and dedication make him a standout asset. Highly recommended",
            name: "Yinka Akinbobola",
            position: "Design Lead, Handworka",
            image: "../image/Yinka.webp"
        },
        {
            text: "Working with Don on the Coinsack project and developing his portfolio site has been a seamless and enjoyable experience. His design skills are impressive, but what truly stands out is his excellent communication. Ensuring the design aligns with our vision has been effortless, thanks to Don’s collaborative and communicative approach. It's a pleasure to work with such a talented and easygoing professional.            ",
            name: "Daniel Famuyiwa",
            position: "Frontend Developer",
            image: "../image/Daniel.webp"
        },
        {
            text: "Oladoyin is a highly dedicated and exceptionally talented designer known for transforming abstract ideas into visually stunning designs. His creative approach, attention to detail, and professionalism contribute to project success, consistently exceeding expectations. His ability to think outside the box inspires creativity. I highly recommend him for any design project, and I anticipate his continued success.",
            name: "Magdalene Uzoechi",
            position: "Co - founder, Handworka",
            image: "../image/Magdalene.webp"
        }

    ];

    let currentTestimonialIndex = 0;

    function renderTestimonial(index) {
        const main = document.getElementById('main-content');
        const testimonial = testimonials[index];

        main.innerHTML = `
            <section class="testimonials-section">
                <h2>See what my clients say about me <span>🤗</span></h2>
                <div class="testimonial-container">
                    <div class="testimonial-card">
                        <p class="testimonial-text">
                            "${testimonial.text}"
                        </p>
                        <div class="client-info">
                            <img src="${testimonial.image}" alt="Client Photo" class="client-photo">
                            <div>
                                <h4>${testimonial.name}</h4>
                                <p>${testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-navigation">
                        <button class="nav-prev"><i class="fas fa-chevron-left"></i></button>
                        <button class="nav-next"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </section>
        `;

        // Add navigation event listeners
        document.querySelector('.nav-prev').addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex === 0) ? testimonials.length - 1 : currentTestimonialIndex - 1;
            renderTestimonial(currentTestimonialIndex);
        });

        document.querySelector('.nav-next').addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex === testimonials.length - 1) ? 0 : currentTestimonialIndex + 1;
            renderTestimonial(currentTestimonialIndex);
        });
    }

    renderTestimonial(currentTestimonialIndex);
}

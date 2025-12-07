// Configuration - Easy to customize
const config = {
    companyName: 'GreenScape',
    phone: '(555) 123-4567',
    email: 'hello@greenscape.com',
    address: '123 Green Valley Lane, Portland, OR 97204'
};

// Services Data
const services = [
    {
        id: 1,
        title: 'Landscape Design',
        description: 'Comprehensive 3D rendering and planning to visualize your dream outdoor space before we break ground.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>'
    },
    {
        id: 2,
        title: 'Lawn Maintenance',
        description: 'Weekly mowing, edging, and seasonal cleanup to keep your turf lush, green, and healthy year-round.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'
    },
    {
        id: 3,
        title: 'Hardscaping',
        description: 'Custom patios, walkways, retaining walls, and outdoor kitchens built with premium stone and pavers.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 22v-5l5-5 5 5-5 5z"/><path d="M9.5 14.5 16 8"/><path d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2z"/></svg>'
    },
    {
        id: 4,
        title: 'Irrigation Systems',
        description: 'Smart sprinkler installation and maintenance to ensure efficient water usage and plant health.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.8-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>'
    },
    {
        id: 5,
        title: 'Tree & Shrub Care',
        description: 'Expert pruning, planting, and disease management for your property\'s most valuable natural assets.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19v3"/><path d="M12 19c-9 0-6-17 0-17s9 17 0 17Z"/><path d="M12 19c-9 0-6-12 0-12s9 12 0 12Z"/><path d="M12 19c-3 0-2-7 0-7s3 7 0 7Z"/></svg>'
    },
    {
        id: 6,
        title: 'Sustainable Gardens',
        description: 'Native plant installation and eco-friendly solutions that support local pollinators and reduce maintenance.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>'
    }
];

// Gallery Data with optimized image URLs
const projects = [
    { 
        id: 1, 
        title: 'Modern Backyard Oasis', 
        category: 'Hardscaping', 
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=70',
        mobileUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&q=60'
    },
    { 
        id: 2, 
        title: 'English Garden Renovation', 
        category: 'Garden', 
        imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=800&fit=crop&q=70',
        mobileUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=500&fit=crop&q=60'
    },
    { 
        id: 3, 
        title: 'Commercial Entryway', 
        category: 'Commercial', 
        imageUrl: 'https://images.unsplash.com/photo-1605908502724-9093a79a2e3e?w=600&h=400&fit=crop&q=70',
        mobileUrl: 'https://images.unsplash.com/photo-1605908502724-9093a79a2e3e?w=400&h=300&fit=crop&q=60'
    },
    { 
        id: 4, 
        title: 'Poolside Retreat', 
        category: 'Hardscaping', 
        imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=600&fit=crop&q=70',
        mobileUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=400&fit=crop&q=60'
    },
    { 
        id: 5, 
        title: 'Native Plant Xeriscape', 
        category: 'Sustainable', 
        imageUrl: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop&q=70',
        mobileUrl: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop&q=60'
    },
    { 
        id: 6, 
        title: 'Luxury Front Estate', 
        category: 'Garden', 
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=500&fit=crop&q=70',
        mobileUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=350&fit=crop&q=60'
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'Homeowner',
        content: 'GreenScape completely transformed our backyard. The team was professional, punctual, and the design exceeded our wildest expectations. Highly recommended!',
        rating: 5
    },
    {
        id: 2,
        name: 'Michael Ross',
        role: 'Property Manager',
        content: 'We\'ve used GreenScape for our commercial properties for 3 years. Their attention to detail and reliability makes my job so much easier.',
        rating: 5
    },
    {
        id: 3,
        name: 'Emily Chen',
        role: 'Homeowner',
        content: 'I appreciate their eco-friendly approach. They helped me install a rain garden that solved our drainage issues and looks beautiful.',
        rating: 5
    }
];

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Render Services
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card">
            <div class="service-icon">
                ${service.icon}
            </div>
            <h4 class="service-title">${service.title}</h4>
            <p class="service-description">${service.description}</p>
        </div>
    `).join('');
}

// Render Gallery with lazy loading
let currentFilter = 'All';

function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const isMobile = window.innerWidth < 768;
    
    const filteredProjects = currentFilter === 'All' 
        ? projects 
        : projects.filter(p => p.category === currentFilter);
    
    galleryGrid.innerHTML = filteredProjects.map(project => {
        const imgUrl = isMobile ? project.mobileUrl : project.imageUrl;
        return `
            <div class="gallery-item show" data-category="${project.category}">
                <img src="${imgUrl}" alt="${project.title}" loading="lazy" width="600" height="400">
                <div class="gallery-overlay">
                    <h4 class="gallery-title">${project.title}</h4>
                    <p class="gallery-category">${project.category}</p>
                </div>
            </div>
        `;
    }).join('');
}

function renderGalleryFilters() {
    const galleryFilters = document.getElementById('galleryFilters');
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    
    galleryFilters.innerHTML = categories.map(category => `
        <button class="filter-btn ${category === currentFilter ? 'active' : ''}" data-category="${category}">
            ${category}
        </button>
    `).join('');
    
    // Add event listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentFilter = e.target.dataset.category;
            renderGalleryFilters();
            renderGallery();
        });
    });
}

// Render Testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    testimonialsGrid.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-stars">
                ${Array(5).fill(0).map((_, i) => `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${i < t.rating ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                `).join('')}
            </div>
            <p class="testimonial-content">"${t.content}"</p>
            <div>
                <h4 class="testimonial-author">${t.name}</h4>
                <span class="testimonial-role">${t.role}</span>
            </div>
        </div>
    `).join('');
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const resetFormBtn = document.getElementById('resetFormBtn');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Check honeypot
    if (contactForm.website.value) {
        return; // Spam bot detected
    }
    
    const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        phone: contactForm.phone.value,
        service: contactForm.service.value,
        message: contactForm.message.value,
        preferredContact: contactForm.preferredContact.value
    };
    
    // Update button state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    errorMessage.classList.add('hidden');
    
    try {
        // Submit to Cloudflare Worker
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok || response.status === 404) {
            // Show success message
            contactForm.style.display = 'none';
            successMessage.classList.remove('hidden');
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Submission error:', error);
        errorMessage.textContent = 'There was an issue sending your message. Please try again later or call us directly at ' + config.phone;
        errorMessage.classList.remove('hidden');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});

resetFormBtn.addEventListener('click', () => {
    contactForm.reset();
    contactForm.style.display = 'block';
    successMessage.classList.add('hidden');
});

// Intersection Observer for lazy loading animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderGalleryFilters();
    renderGallery();
    renderTestimonials();
    
    // Observe service cards for animation
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optimize images on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        renderGallery();
    }, 250);
});

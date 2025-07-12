// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const typingText = document.getElementById('typing-text');
const downloadCVBtn = document.getElementById('downloadCV');

// Typing Animation
const text = "Hola, soy Jalal Kaddoura";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to about section when clicking hero CTA
document.querySelector('.hero-cta .btn-primary').addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#conoceme');
    const offsetTop = aboutSection.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Scroll to contact section when clicking second hero CTA
document.querySelector('.hero-cta .btn-secondary').addEventListener('click', (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contacto');
    const offsetTop = contactSection.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Scroll indicator functionality
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    const aboutSection = document.querySelector('#conoceme');
    const offsetTop = aboutSection.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Active navigation highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.skill-item, .project-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// Particle animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Navbar background on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
}

// CV Download functionality
downloadCVBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Since we don't have an actual CV file, we'll show an alert
    // In a real implementation, this would trigger a download
    alert('CV descargado exitosamente! (Funcionalidad simulada)');
});

// Parallax effect for background
function handleParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const waves = document.querySelectorAll('.wave');
    
    waves.forEach((wave, index) => {
        const speed = 0.1 + (index * 0.05);
        wave.style.transform = `translateY(${rate * speed}px)`;
    });
}

// Smooth hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth hover effects for skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'visible');
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-item, .project-card, .about-text p');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Event listeners
window.addEventListener('scroll', () => {
    updateActiveNav();
    handleScrollAnimations();
    handleNavbarScroll();
    handleParallax();
});

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Resize handler
window.addEventListener('resize', () => {
    // Close mobile menu if window is resized to desktop
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Contact form interactions (for future implementation)
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add click animation
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
            link.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNav();
    handleScrollAnimations();
    handleNavbarScroll();
    handleParallax();
}, 16)); // ~60fps

// Smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };
    smoothScrollPolyfill();
}

// Custom Cursor Effect
let mouseTrails = [];
const maxTrails = 10;

function createMouseTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    document.body.appendChild(trail);
    
    mouseTrails.push(trail);
    
    if (mouseTrails.length > maxTrails) {
        const oldTrail = mouseTrails.shift();
        oldTrail.remove();
    }
    
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            if (trail.parentNode) {
                trail.remove();
            }
        }, 300);
    }, 100);
}

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = (e.clientX - 5) + 'px';
        cursor.style.top = (e.clientY - 5) + 'px';
    }
    
    // Create mouse trail effect
    if (Math.random() > 0.8) { // Reduce frequency for better performance
        createMouseTrail(e.clientX - 1.5, e.clientY - 1.5);
    }
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-item, .nav-link, .hamburger');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.classList.add('hover');
        }
    });
    
    element.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.classList.remove('hover');
        }
    });
});

// Project Category Tabs
function initializeProjectTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const categoryContents = document.querySelectorAll('.project-category-content');
    
    console.log('Found tab buttons:', tabButtons.length);
    console.log('Found category contents:', categoryContents.length);
    
    if (tabButtons.length === 0) {
        console.error('No tab buttons found!');
        return;
    }
    
    tabButtons.forEach((button, index) => {
        console.log(`Tab button ${index}:`, button.dataset.category);
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const category = button.dataset.category;
            console.log('Clicked tab:', category);
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                console.log('Removed active from button:', btn.dataset.category);
            });
            categoryContents.forEach(content => {
                content.classList.remove('active');
                console.log('Removed active from content:', content.id);
            });
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.getElementById(category + '-content');
            if (targetContent) {
                targetContent.classList.add('active');
                console.log('Activated content:', category + '-content');
            } else {
                console.error('Content not found:', category + '-content');
            }
        });
    });
}

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', () => {
    // Add initial fade-in class to animated elements
    const elements = document.querySelectorAll('.skill-item, .project-card');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Initialize project tabs with delay to ensure DOM is ready
    setTimeout(() => {
        initializeProjectTabs();
    }, 100);
    
    // Initialize scroll position
    updateActiveNav();
    handleNavbarScroll();
    
    console.log('Portfolio initialized successfully!');
});

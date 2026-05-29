// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.12)';
    }
    
    lastScroll = currentScroll;
});

// Open Now Status Indicator
function updateOpenStatus() {
    const statusIndicator = document.getElementById('hours-status');
    const statusText = document.getElementById('status-text');
    
    if (!statusIndicator || !statusText) return;
    
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Store hours: Monday-Saturday: 10:30 AM - 8:30 PM, Sunday: Closed
    const openHour = 10;
    const openMinute = 30;
    const closeHour = 20;
    const closeMinute = 30;
    
    const currentTime = hours * 60 + minutes;
    const openTime = openHour * 60 + openMinute;
    const closeTime = closeHour * 60 + closeMinute;
    
    let isOpen = false;
    
    if (day === 0) {
        // Sunday - Closed
        isOpen = false;
    } else {
        // Monday-Saturday
        isOpen = currentTime >= openTime && currentTime < closeTime;
    }
    
    if (isOpen) {
        statusIndicator.classList.remove('closed');
        statusIndicator.classList.add('open');
        statusText.textContent = 'Open Now';
    } else {
        statusIndicator.classList.remove('open');
        statusIndicator.classList.add('closed');
        statusText.textContent = 'Closed Now';
    }
}

// Update status on page load and every minute
updateOpenStatus();
setInterval(updateOpenStatus, 60000);

// Lightbox Gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        lightboxImg.setAttribute('src', src);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Star Rating System
const starRating = document.getElementById('starRating');
const ratingValue = document.getElementById('reviewRatingValue');
const stars = starRating.querySelectorAll('i');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        ratingValue.value = rating;
        
        stars.forEach((s, index) => {
            if (index < rating) {
                s.classList.remove('far', 'inactive');
                s.classList.add('fas', 'active');
            } else {
                s.classList.remove('fas', 'active');
                s.classList.add('far', 'inactive');
            }
        });
    });
    
    star.addEventListener('mouseenter', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        
        stars.forEach((s, index) => {
            if (index < rating) {
                s.classList.remove('far', 'inactive');
                s.classList.add('fas');
            } else {
                s.classList.remove('fas');
                s.classList.add('far', 'inactive');
            }
        });
    });
});

starRating.addEventListener('mouseleave', () => {
    const currentRating = parseInt(ratingValue.value);
    
    stars.forEach((s, index) => {
        if (index < currentRating) {
            s.classList.remove('far', 'inactive');
            s.classList.add('fas', 'active');
        } else {
            s.classList.remove('fas', 'active');
            s.classList.add('far', 'inactive');
        }
    });
});

// Review Form Submission
const reviewForm = document.getElementById('reviewForm');

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('reviewName').value;
    const rating = document.getElementById('reviewRatingValue').value;
    const comment = document.getElementById('reviewComment').value;
    
    if (rating === '0') {
        alert('Please select a rating');
        return;
    }
    
    // In a real application, you would send this data to a server
    console.log('Review submitted:', { name, rating, comment });
    
    // Show success message
    alert('Thank you for your review! It will be published after moderation.');
    
    // Reset form
    reviewForm.reset();
    ratingValue.value = '0';
    stars.forEach(s => {
        s.classList.remove('fas', 'active');
        s.classList.add('far', 'inactive');
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const phone = document.getElementById('contactPhone').value;
    const message = document.getElementById('contactMessage').value;
    
    // In a real application, you would send this data to a server
    console.log('Contact form submitted:', { name, phone, message });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Product Card Hover Effect Enhancement
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Gallery Item Hover Effect Enhancement
const galleryItemsHover = document.querySelectorAll('.gallery-item');

galleryItemsHover.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Amenity Card Hover Effect
const amenityCards = document.querySelectorAll('.amenity-card');

amenityCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Add active class styling for navigation
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Phone number formatting (for future use)
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/);
    if (match) {
        return '+91 ' + match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return phoneNumber;
}

// Lazy loading for images (if browser supports it)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Console welcome message
console.log('%c Welcome to Alaya The Women Store! ', 'background: #E91E63; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Curated Kurtis & Ethnic Wear for Khammam Ladies ', 'color: #9C27B0; font-size: 14px;');

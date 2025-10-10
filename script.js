// ===== POTULKY WEBSITE JAVASCRIPT =====
// Interactive features for smooth scrolling, mobile navigation, and enhanced UX

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MOBILE NAVIGATION TOGGLE =====
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const hrefValue = this.getAttribute('href');
            // Only intercept internal hash links
            if (hrefValue && hrefValue.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(hrefValue);
                if (targetSection) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===== NAVBAR BACKGROUND ON SCROLL =====
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // ===== ACTIVE NAVIGATION LINK HIGHLIGHTING =====
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current nav link
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    // Call on scroll
    window.addEventListener('scroll', highlightActiveNavLink);
    
    // Call on page load
    highlightActiveNavLink();

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.step, .game-card, .highlight, .testimonial, .team-member, .partner-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // ===== GAME CARDS INTERACTIVE EFFECTS =====
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== CTA BUTTON ENHANCED INTERACTION =====
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'translateY(-3px) scale(0.98)';
            
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1)';
            }, 150);
            
            // Scroll to games section
            const gamesSection = document.querySelector('#games');
            if (gamesSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = gamesSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ===== GAME BUTTONS INTERACTION =====
    const gameButtons = document.querySelectorAll('.game-button');
    
    gameButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // For demo purposes, show alert
            alert('Game details coming soon! This would navigate to a detailed game page.');
        });
    });

    // ===== TESTIMONIALS CAROUSEL EFFECT (Optional Enhancement) =====
    const testimonials = document.querySelectorAll('.testimonial');
    
    testimonials.forEach((testimonial, index) => {
        testimonial.addEventListener('click', function() {
            // Add a subtle highlight effect when clicked
            this.style.border = '2px solid #d2691e';
            this.style.transform = 'translateY(-5px) scale(1.02)';
            
            setTimeout(() => {
                this.style.border = 'none';
                this.style.transform = 'translateY(-5px) scale(1)';
            }, 2000);
        });
    });

    // ===== LAZY LOADING SIMULATION =====
    // This simulates lazy loading for better performance
    const lazyElements = document.querySelectorAll('.hero-placeholder, .game-placeholder');
    
    lazyElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.opacity = '0.9';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    
    // Keyboard navigation for mobile menu
    navToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });

    // Focus management for mobile menu
    navMenu.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && this.classList.contains('active')) {
            this.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.focus();
            document.body.style.overflow = 'auto';
        }
    });

    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Throttle scroll events for better performance
    let scrollTimeout;
    function throttleScroll() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                highlightActiveNavLink();
                scrollTimeout = null;
            }, 10);
        }
    }

    window.addEventListener('scroll', throttleScroll);

    // ===== ERROR HANDLING =====
    window.addEventListener('error', function(e) {
        console.warn('Potulky: A minor error occurred:', e.message);
    });

    // ===== INITIALIZATION COMPLETE =====
    console.log('🎮 Potulky website initialized successfully!');
    
    // Add a subtle entrance animation to the hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ===== ADDITIONAL CSS FOR JAVASCRIPT EFFECTS =====
// These styles are added dynamically for enhanced interactions

const additionalStyles = `
    /* Ripple effect for buttons */
    .game-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Active nav link styling */
    .nav-link.active {
        color: #6b46c1 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    /* Animation classes */
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Enhanced focus styles */
    .nav-link:focus,
    .cta-button:focus,
    .game-button:focus {
        outline: 3px solid #f59e0b;
        outline-offset: 2px;
    }
    
    /* Smooth transitions for all interactive elements */
    .step,
    .game-card,
    .highlight,
    .testimonial,
    .team-member,
    .partner-card,
    .cta-button,
    .game-button {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

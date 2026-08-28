/* ============================================================
   SCROLL PROGRESS BAR
============================================================ */

const scrollProgress = document.querySelector('.scroll-progress');

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });

/* ============================================================
   SECTION ACTIVE STATE & INDEX NAVIGATION
============================================================ */

const sections = document.querySelectorAll('.section');
const indexLinks = document.querySelectorAll('.index-links a');

function updateActiveSection() {
    const activationPoint = window.innerHeight * 0.30;
    let currentSection = sections[0];

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= activationPoint) {
            currentSection = section;
        }
    });

    indexLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === currentSection.id) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('load', updateActiveSection);
window.addEventListener('resize', updateActiveSection);

/* ============================================================
   SMOOTH SCROLL NAVIGATION
============================================================ */

indexLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerOffset = 90;
            const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ============================================================
   BACK TO TOP BUTTON
============================================================ */

const backToTopBtn = document.querySelector('.back-to-top');

function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

window.addEventListener('scroll', toggleBackToTop, { passive: true });

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ============================================================
   SECTION REVEAL ANIMATIONS
============================================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

/* ============================================================
   KEYBOARD SHORTCUTS
============================================================ */

const keyboardShortcuts = {
    'j': () => scrollToNextProject(),
    'k': () => scrollToPreviousProject(),
    '/': () => searchMode(),
};

function scrollToNextProject() {
    const currentProject = document.querySelector('.project:in-viewport');
    const nextProject = currentProject?.nextElementSibling;
    
    if (nextProject && nextProject.classList.contains('project')) {
        nextProject.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function scrollToPreviousProject() {
    const currentProject = document.querySelector('.project:in-viewport');
    const prevProject = currentProject?.previousElementSibling;
    
    if (prevProject && prevProject.classList.contains('project')) {
        prevProject.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function searchMode() {
    console.log('Search mode activated (feature: type to filter skills)');
}

document.addEventListener('keydown', (e) => {
    // Only trigger if not typing in an input
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        if (keyboardShortcuts[e.key]) {
            e.preventDefault();
            keyboardShortcuts[e.key]();
        }
    }
});

/* ============================================================
   SKILL TAG HOVER FEEDBACK
============================================================ */

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.textShadow = '0 0 12px rgba(102, 126, 234, 0.4)';
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.textShadow = 'none';
    });
});

/* ============================================================
   CONTACT LINK HOVER EFFECTS
============================================================ */

const contactLinks = document.querySelectorAll('.contact-links a, .hero-contact a');

contactLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.letterSpacing = '0.05em';
    });

    link.addEventListener('mouseleave', () => {
        link.style.letterSpacing = 'normal';
    });
});

/* ============================================================
   INITIALIZE ON LOAD
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    updateActiveSection();
    toggleBackToTop();

    // Stagger project animations
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        project.style.animation = `fadeInSection 0.6s ease-out ${0.1 + index * 0.1}s forwards`;
        project.style.opacity = '0';
    });
});

/* ============================================================
   PERFORMANCE OPTIMIZATIONS
============================================================ */

// Debounce scroll events for better performance
let scrollTimeout;
const debouncedScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveSection, 100);
};

// Use requestAnimationFrame for smooth animations
let animationFrameId;
const smoothScroll = () => {
    updateScrollProgress();
    animationFrameId = requestAnimationFrame(smoothScroll);
};

window.addEventListener('scroll', smoothScroll, { passive: true });

console.log('Portfolio loaded. Keyboard shortcuts: j (next project), k (prev project), / (search)');

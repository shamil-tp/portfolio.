document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    const red_button = document.getElementById('red_button');
    const yellow_button = document.getElementById('yellow_button');
    const green_button = document.getElementById('green_button');
    const code = document.getElementById('code');

    red_button.addEventListener('click', () => {
        code.style.display = 'none';
    });

    yellow_button.addEventListener('click', () => {
        code.style.display = 'block';
    });

    green_button.addEventListener('click', () => {
        code.style.display = 'block';
    });

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('toggle');
        
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Sticky Navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(245, 242, 235, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(245, 242, 235, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Scroll Reveal Animations using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Project Cards Accordion Logic
    const toggleButtons = document.querySelectorAll('.details-toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const contributionsDiv = button.nextElementSibling;
            
            if (contributionsDiv && contributionsDiv.classList.contains('contributions')) {
                contributionsDiv.classList.toggle('collapsed');
            }
        });
    });

    // Typing Effect
    const textElement = document.querySelector('.typing-text');
    const texts = ["Full Stack Backend Engineer", "Performance Specialist", "System Architect"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        
        textElement.textContent = letter;

        if (letter.length === currentText.length) {
             if (count === 0) {
                textElement.innerHTML = `Full Stack <span class="highlight">Backend</span> Engineer`;
            }
            
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    }
    
    // Start typing after initial delay
    setTimeout(type, 2000);

    // Fun Brutalist Cursor System
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);

    const cursorOutline = document.createElement('div');
    cursorOutline.classList.add('cursor-outline');
    document.body.appendChild(cursorOutline);

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Exact snapping for inner dot
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animateCursor() {
        let distX = mouseX - outlineX;
        let distY = mouseY - outlineY;
        
        // Spring physics trailing
        outlineX = outlineX + distX * 0.18;
        outlineY = outlineY + distY * 0.18;
        
        // Calculate velocity for subtle rotation
        let velX = Math.abs(distX);
        let velY = Math.abs(distY);
        let rotation = (velX + velY) * 0.6; // subtle spin
        
        // Use modulus or continuous accumulation if desired, here just mapped to outline position x for an endless rotation feel as you move
        cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) rotate(${outlineX * 0.3}deg)`;
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const clickables = document.querySelectorAll('a, button, .details-toggle-btn, .project-card, .skill-category, .edu-card, .timeline-content, .skill-tags span');
    
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hovering');
            cursorDot.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hovering');
            cursorDot.classList.remove('hovering');
        });
    });

    // Particle explosion on click
    window.addEventListener('click', (e) => {
        for (let i = 0; i < 6; i++) {
            const p = document.createElement('div');
            p.classList.add('cursor-particle');
            document.body.appendChild(p);
            
            p.style.left = e.clientX + 'px';
            p.style.top = e.clientY + 'px';
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = 30 + Math.random() * 45; // Explosion distance
            
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            p.style.setProperty('--tx', `${tx}px`);
            p.style.setProperty('--ty', `${ty}px`);
            
            // Clean up particle
            setTimeout(() => p.remove(), 600);
        }
    });
});

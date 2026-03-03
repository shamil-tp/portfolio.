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

    // Project Cards Accordion Logic & Data Decryption
    const toggleButtons = document.querySelectorAll('.details-toggle-btn');
    const lettersPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*";
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const contributionsDiv = button.nextElementSibling;
            
            if (contributionsDiv && contributionsDiv.classList.contains('contributions')) {
                const isOpening = contributionsDiv.classList.toggle('collapsed') === false;
                
                // Trigger Data Payload Decryption on Open
                if (isOpening) {
                    const listItems = contributionsDiv.querySelectorAll('li');
                    listItems.forEach(li => {
                        // Store original text if not already saved
                        if (!li.dataset.originalText) {
                            li.dataset.originalText = li.innerText;
                        }
                        
                        const targetText = li.dataset.originalText;
                        let iteration = 0;
                        clearInterval(li.dataset.intervalId);
                        
                        const newInterval = setInterval(() => {
                            li.innerText = targetText
                                .split("")
                                .map((letter, index) => {
                                    if (index < iteration) {
                                        return targetText[index];
                                    }
                                    return lettersPool[Math.floor(Math.random() * lettersPool.length)];
                                })
                                .join("");
                                
                            if (iteration >= targetText.length) { 
                                clearInterval(newInterval);
                            }
                            iteration += 1 / 2; // Decrypt speed
                        }, 25);
                        
                        li.dataset.intervalId = newInterval;
                    });
                }
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

    // Matrix Scramble Logo & Contact Links
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*";
    const scrambleElements = document.querySelectorAll('.logo-text, .scramble-text');
    
    scrambleElements.forEach(el => {
        el.addEventListener('mouseover', event => {
            let iteration = 0;
            let interval = null;
            clearInterval(el.dataset.intervalId); // Clear previous if any
            
            // For contact links, we want to scramble text but preserve the icon child if it exists.
            // A simple way to handle this without losing the icon is to scramble a text node wrapper, 
            // but since we keep it brutalist and simple, we'll just rewrite the innerText and prepend the icon HTML back if needed.
            // To be safe, we'll just scramble the innerText completely.
            const iconHTML = event.target.querySelector('i') ? event.target.querySelector('i').outerHTML + " " : "";
            const targetText = event.target.dataset.value;
            
            const newInterval = setInterval(() => {
                const scrambled = targetText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return targetText[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");
                
                event.target.innerHTML = iconHTML + scrambled;
                    
                if (iteration >= targetText.length) { 
                    clearInterval(newInterval);
                }
                iteration += 1 / 3;
            }, 30);
            
            el.dataset.intervalId = newInterval;
        });
    });

    // Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left) - rect.width / 2;
            const y = (e.clientY - rect.top) - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });

    // 3D Perspective Tilt Cards
    const tiltElements = document.querySelectorAll('.project-card, .edu-card');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg
            const rotateY = ((x - centerX) / centerX) * 8;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // Parallax Code Block
    const parallaxBlock = document.querySelector('.code-block');
    window.addEventListener('mousemove', (e) => {
        if (!parallaxBlock) return;
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;
        parallaxBlock.style.transform = `translate(${x}px, ${y}px)`;
    });


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

    // Global Coordinate HUD Tracker
    const trackerHUD = document.createElement('div');
    trackerHUD.classList.add('global-hud-tracker');
    trackerHUD.innerText = '[ TRGT // X: 000 | Y: 000 ]';
    document.body.appendChild(trackerHUD);

    window.addEventListener('mousemove', (e) => {
        // Update Coordinate Tracker
        const x = String(e.clientX).padStart(3, '0');
        const y = String(e.clientY).padStart(3, '0');
        trackerHUD.innerText = `[ TRGT // X: ${x} | Y: ${y} ]`;

        // Update Interactive Glow Grid
        if (window.gridOverlay) {
            window.gridOverlay.style.setProperty('--mouse-x', `${e.clientX}px`);
            window.gridOverlay.style.setProperty('--mouse-y', `${e.clientY}px`);
        }
    });

    // Project Card Focus Lock
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Check if mouse is near perfect center (within a 60px bounding box)
            const diffX = Math.abs(e.clientX - centerX);
            const diffY = Math.abs(e.clientY - centerY);
            
            if (diffX < 30 && diffY < 30) {
                card.classList.add('focus-locked');
            } else {
                card.classList.remove('focus-locked');
            }
        });
        card.addEventListener('mouseleave', () => card.classList.remove('focus-locked'));
    });
});

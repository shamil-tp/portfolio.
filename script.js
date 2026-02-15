document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Custom Cursor Glow
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            left: e.clientX,
            top: e.clientY,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

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
            gsap.to(navbar, {
                backgroundColor: 'rgba(5, 5, 5, 0.95)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                duration: 0.3
            });
        } else {
            gsap.to(navbar, {
                backgroundColor: 'rgba(5, 5, 5, 0.8)',
                boxShadow: 'none',
                duration: 0.3
            });
        }
    });

    // Hero Animation Sequence
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-content .greeting", { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
      .from(".hero-content h1", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".hero-content h2", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".tagline", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".hero-btns .btn", { y: 20, opacity: 0, duration: 0.6, stagger: 0.2 }, "-=0.4")
      .from(".social-links a", { y: 20, opacity: 0, duration: 0.6, stagger: 0.2 }, "-=0.4");
      
    // Simplified animation for code block on mobile to prevent layout issues
    const codeBlock = document.querySelector(".code-block");
    if (codeBlock) {
        if (window.innerWidth > 768) {
            tl.from(".code-block", { x: 50, opacity: 0, duration: 1 }, "-=1");
        } else {
            tl.from(".code-block", { opacity: 0, duration: 1, y: 20 }, "-=0.5");
        }
    }

    // Scroll Reveal Animations
    const sections = gsap.utils.toArray('.section, .project-card, .skill-category, .timeline-item, .edu-card');
    
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Typing Effect (Kept as is)
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
            // Apply highlight effect logic can be added here if needed
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
    
    // Start typing after initial animations
    setTimeout(type, 2000);
});

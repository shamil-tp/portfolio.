document.addEventListener('DOMContentLoaded', () => {

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
});

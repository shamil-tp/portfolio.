gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
});

// Hero Animations
const tl = gsap.timeline();
tl.from(".reveal", { y: 50, opacity: 0, duration: 1, stagger: 0.3 })
  .from(".reveal-sub", { x: -20, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".reveal-text", { opacity: 0, duration: 1 });

// Scroll Reveals for sections
const sections = gsap.utils.toArray('.section');
sections.forEach(sec => {
    gsap.from(sec.querySelectorAll('.skill-cat, .exp-card, .project-card'), {
        scrollTrigger: {
            trigger: sec,
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });
});

// Logic for a "typing" effect on the hero text
const text = document.querySelector('.reveal-sub');
const originalText = text.innerText;
text.innerText = '';
let i = 0;
function type() {
    if (i < originalText.length) {
        text.innerText += originalText.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}
setTimeout(type, 1500);
/**
 * mobile.js
 * Dedicated scripts for the Mobile Terminal HUD.
 * Replaces mouse-hover logic with scroll-intersection and touch logic.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Terminal Boot Preloader
    const preloader = document.getElementById('terminal-preloader');
    const bootText = document.getElementById('boot-text');
    const bootSequence = [
        "INITIALIZING M-VIEW PROTOCOLS...",
        "MOUNTING TOUCH DRIVE...",
        "DECRYPTING ASSETS...",
        "ESTABLISHING UPLINK... OK",
        "[ READY ]"
    ];
    let bootLine = 0;

    function runBootSequence() {
        if (!preloader || !bootText) return;
        if (bootLine < bootSequence.length) {
            bootText.innerText += bootSequence[bootLine] + "\n";
            bootLine++;
            setTimeout(runBootSequence, 150 + Math.random() * 150);
        } else {
            setTimeout(() => {
                preloader.style.opacity = "0";
                setTimeout(() => preloader.remove(), 500);
            }, 300);
        }
    }
    runBootSequence();

    // 2. Data Stream Scroll Tracker
    const sysFill = document.getElementById('sys-fill');
    const sysPercentText = document.getElementById('sys-percent');
    window.addEventListener('scroll', () => {
        if (!sysFill || !sysPercentText) return;
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        sysFill.style.height = `${scrollPercent}%`;
        sysPercentText.innerText = `SYS.MEM.[${Math.min(100, Math.round(scrollPercent)).toString().padStart(3, '0')}%]`;
    }, { passive: true });

    // 3. Touch Scanline on Profile Image
    const profileImg = document.querySelector('.profile-container');
    const imgEl = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('click', () => {
            profileImg.classList.add('scanning');
            setTimeout(() => {
                profileImg.classList.remove('scanning');
                imgEl.classList.add('scanned');
                // Revert color after a few seconds
                setTimeout(() => imgEl.classList.remove('scanned'), 3000);
            }, 800);
        });
    }

    // 4. Matrix Text Scrambler on Touch
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*";
    const scrambleElements = document.querySelectorAll('.scramble-text, .logo-text');
    
    scrambleElements.forEach(el => {
        let isScrambling = false;
        el.addEventListener('click', event => {
            if (isScrambling) return;
            isScrambling = true;
            let iteration = 0;
            const targetText = event.target.dataset.value;
            
            const newInterval = setInterval(() => {
                event.target.innerText = targetText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) return targetText[index];
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");
                    
                if (iteration >= targetText.length) { 
                    clearInterval(newInterval);
                    isScrambling = false;
                }
                iteration += 1 / 3;
            }, 30);
        });
    });

    // 5. Scroll Intersection Observer for Project Card Focus Lock
    const projectCards = document.querySelectorAll('.project-card');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8 // Trigger when card is 80% visible inside the viewport
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                if (navigator.vibrate) navigator.vibrate(20); // tiny physical haptic on lock
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    projectCards.forEach(card => cardObserver.observe(card));

    // 6. Global Subtle Theme Shift (Haptics)
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx = null;

    function playTinyBlip() {
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (!audioCtx) return;
        try {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);
            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.15);
        } catch(e) {}
    }

    const themes = [
        { color: '#1a365d', bg: '#e1f5fe' },
        { color: '#1b5e20', bg: '#e8f5e9' },
        { color: '#4a148c', bg: '#f3e5f5' },
        { color: '#004d40', bg: '#e0f2f1' },
        { color: '#880e4f', bg: '#fce4ec' },
        { color: '#0d47a1', bg: '#e3f2fd' },
        { color: '#263238', bg: '#eceff1' },
        { color: '#111111', bg: '#e5e5e5' }
    ];

    const interactiveSelectors = 'a, button, img, .project-card, .scramble-text';

    document.documentElement.addEventListener('touchstart', (e) => {
        const isInteractive = e.target.closest(interactiveSelectors);

        if (!isInteractive) {
            playTinyBlip();
            if (navigator.vibrate) navigator.vibrate(30);

            document.body.classList.add('theme-shifting');

            const randomIndex = Math.floor(Math.random() * themes.length);
            const theme = themes[randomIndex];

            document.documentElement.style.setProperty('--bg-color', theme.bg);
            document.documentElement.style.setProperty('--card-bg', theme.bg);
            document.documentElement.style.setProperty('--nav-bg', `${theme.bg}ee`);
            document.documentElement.style.setProperty('--text-primary', theme.color);
            document.documentElement.style.setProperty('--text-secondary', theme.color);
            document.documentElement.style.setProperty('--border-color', theme.color);
            document.documentElement.style.setProperty('--accent', theme.color);

            document.body.style.transform = 'scale(0.995)';
            setTimeout(() => document.body.style.transform = 'scale(1)', 100);

            setTimeout(() => document.body.classList.remove('theme-shifting'), 1500); 
        }
    }, { passive: true });
});

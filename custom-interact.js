/**
 * custom-interact.js
 * Dedicated script for subtle, advanced global theme reactivity and haptic audio feedback.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Subtle Audio Feedback Setup
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx = null;

    function initAudio() {
        if (!audioCtx && AudioContext) {
            audioCtx = new AudioContext();
        }
    }

    function playTinyBlip() {
        initAudio(); // initialize on first click to bypass autoplay restrictions
        if (!audioCtx) return;
        try {
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            // A slightly more audible frequency
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);
            
            // Subtle, perceptible click
            gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.15);
        } catch(e) {
            console.error(e);
        }
    }

    // 2. Global Subtle Theme Shift
    // Uses the user's requested subtle, calm theme shifts overlaid on the brutalist structure.
    const themes = [
        { color: '#1a365d', bg: '#e1f5fe' }, // Light Blue
        { color: '#1b5e20', bg: '#e8f5e9' }, // Light Green
        { color: '#4a148c', bg: '#f3e5f5' }, // Light Purple
        { color: '#004d40', bg: '#e0f2f1' }, // Light Teal
        { color: '#880e4f', bg: '#fce4ec' }, // Light Pink
        { color: '#0d47a1', bg: '#e3f2fd' }, // Medium Blue
        { color: '#263238', bg: '#eceff1' }, // Blue Grey
        { color: '#111111', bg: '#e5e5e5' }  // Original Brutalist Grey
    ];

    const interactiveSelectors = 'a, button, input, textarea, select, .project-card, .skill-category, .edu-card, .details-toggle-btn, .skill-tags span, nav, .navbar';

    // Attach to documentElement to ensure it captures clicks absolutely everywhere
    document.documentElement.addEventListener('click', (e) => {
        const isInteractive = e.target.closest(interactiveSelectors);

        if (!isInteractive) {
            // Play the subtle audio blip
            playTinyBlip();

            // Trigger smooth transition CSS class across the whole DOM
            document.body.classList.add('theme-shifting');

            // Select random theme from user's requested palette
            const randomIndex = Math.floor(Math.random() * themes.length);
            const theme = themes[randomIndex];

            // Reassign global root variables so the entire layout seamlessly shifts color
            document.documentElement.style.setProperty('--bg-color', theme.bg);
            document.documentElement.style.setProperty('--card-bg', theme.bg);
            document.documentElement.style.setProperty('--nav-bg', `${theme.bg}ee`); // Add transparency mimic
            document.documentElement.style.setProperty('--text-primary', theme.color);
            document.documentElement.style.setProperty('--text-secondary', theme.color);
            document.documentElement.style.setProperty('--border-color', theme.color);
            document.documentElement.style.setProperty('--accent', theme.color);

            // Give a tiny physical scale pop to fulfill "feeling the change"
            document.body.style.transform = 'scale(0.995)';
            setTimeout(() => {
                document.body.style.transform = 'scale(1)';
            }, 100);

            // Remove transition override after 1.5s so normal CSS hover effects return properly
            setTimeout(() => {
                document.body.classList.remove('theme-shifting');
            }, 1500); 
        }
    });
});

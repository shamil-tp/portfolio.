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
    const interactiveSelectors = 'a, button, input, textarea, select, .project-card, .skill-category, .edu-card, .details-toggle-btn, .skill-tags span, nav, .navbar';

    // Attach to documentElement to ensure it captures clicks absolutely everywhere
    document.documentElement.addEventListener('click', (e) => {
        const isInteractive = e.target.closest(interactiveSelectors);

        if (!isInteractive) {
            // Play the subtle audio blip
            playTinyBlip();

            // Trigger the CSS theme shift on the body (now includes scale pop)
            document.body.setAttribute('data-theme-shift', 'active');

            // Remove it quickly so the CSS ease-out starts immediately
            setTimeout(() => {
                document.body.removeAttribute('data-theme-shift');
            }, 100); 
        }
    });
});

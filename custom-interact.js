/**
 * custom-interact.js
 * Dedicated script for subtle, advanced global theme reactivity and haptic audio feedback.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Subtle Audio Feedback Setup
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = AudioContext ? new AudioContext() : null;

    function playTinyBlip() {
        if (!audioCtx) return;
        try {
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            // A very low, subtle sine wave
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);
            
            // Extremely low volume, barely perceptible
            gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.06);
        } catch(e) {
            // Silently fail if audio contexts are blocked
        }
    }

    // 2. Global Subtle Theme Shift
    // We only trigger this if the user clicks empty space, NOT a link, button, or interactive card element.
    const interactiveSelectors = 'a, button, input, textarea, select, .project-card, .skill-category, .edu-card, .details-toggle-btn, .skill-tags span';

    document.body.addEventListener('click', (e) => {
        // Find if the click hit an interactive element or one of its children
        const isInteractive = e.target.closest(interactiveSelectors);

        if (!isInteractive) {
            // Play the subtle audio blip
            playTinyBlip();

            // Trigger the CSS theme shift on the body
            document.body.setAttribute('data-theme-shift', 'active');

            // Remove it after a very short delay to let the CSS transition smoothly resettle it
            setTimeout(() => {
                document.body.removeAttribute('data-theme-shift');
            }, 100); 
            // The 100ms JS timeout simply removes the attribute. 
            // The actual CSS will have a long `transition` property (e.g., 2s) attached to the base body tag, 
            // so removing the attribute initiates a 2-second ease-out back to normal.
        }
    });
});

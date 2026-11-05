/**
 * contact-card.js — 3D flippable contact cards for Shamil TP's portfolio.
 *
 * Implements:
 *   - 3D flippable card with realistic perspective and spring physics
 *   - Cards included: Bento Grid (front & back) and Boarding Pass (front & back),
 *     plus authentic Bento Grid color variations
 *   - Front uses files with "front" in the filename; back uses files with "back"
 *   - Built-in random shift method: randomly chooses a card on every page refresh
 *     (using sessionStorage to ensure fresh variety on reload)
 *   - Every flip gives a new card randomly
 *   - Interactive 3D tilt tracking cursor on fine-pointer devices
 *   - Accessible keyboard controls (Enter/Space), screen-reader markup,
 *     and quick contact action links
 */

export const CARDS = [
    {
        id: 'bento-ruby',
        name: 'Bento Grid',
        variant: 'Ruby & Slate',
        front: 'assets/cards/shamil-t-p-bento-grid-front.svg',
        back: 'assets/cards/shamil-t-p-bento-grid-back(2).svg',
        accent: '#93032E',
        badge: 'Architect',
        altFront: 'Shamil TP Bento Grid Contact Card (Front) — "hey!! Full-Stack Architect"',
        altBack: 'Shamil TP Bento Grid Contact Card (Back) — "Shamil T P, Crafting scalable web systems"'
    },
    {
        id: 'boarding-pass',
        name: 'Boarding Pass',
        variant: 'Dev Flight Manifest',
        front: 'assets/cards/t-p-shamil-boarding-pass-front.svg',
        back: 'assets/cards/t-p-shamil-boarding-pass-back.svg',
        accent: '#DF0139',
        badge: 'Boarding Pass',
        altFront: 'Shamil TP Boarding Pass Developer Pass (Front) — "DEV // T P SHAMIL // IND"',
        altBack: 'Shamil TP Boarding Pass Passenger Manifest (Back) — Electronic Mail, Web, Socials'
    },
    {
        id: 'bento-citron',
        name: 'Bento Grid',
        variant: 'Citron & Lilac',
        front: 'assets/cards/shamil-t-p-bento-grid-front(2).svg',
        back: 'assets/cards/shamil-t-p-bento-grid-back.svg',
        accent: '#DCE775',
        badge: 'Minimal',
        altFront: 'Shamil TP Bento Grid Citron/Lilac Card (Front)',
        altBack: 'Shamil TP Bento Grid Citron/Lilac Card (Back)'
    },
    {
        id: 'bento-forest',
        name: 'Bento Grid',
        variant: 'Ice & Emerald',
        front: 'assets/cards/shamil-t-p-bento-grid-front(1).svg',
        back: 'assets/cards/shamil-t-p-bento-grid-back(1).svg',
        accent: '#0A3628',
        badge: 'Systems',
        altFront: 'Shamil TP Bento Grid Ice/Emerald Card (Front)',
        altBack: 'Shamil TP Bento Grid Ice/Emerald Card (Back)'
    }
];

const STORAGE_KEY = 'portfolio:lastCardId';

/**
 * Pick a card randomly using the built-in random selection method.
 * Excludes `excludeId` if possible so consecutive refreshes / flips feel varied.
 */
export function pickRandomCard(excludeId) {
    const pool = CARDS.filter((c) => c.id !== excludeId);
    const candidates = pool.length > 0 ? pool : CARDS;
    const index = Math.floor(Math.random() * candidates.length);
    return candidates[index];
}

/**
 * Read the last shown card ID from sessionStorage (built-in persistence).
 */
export function readLastCardId() {
    try {
        return window.sessionStorage.getItem(STORAGE_KEY);
    } catch (e) {
        return null;
    }
}

/**
 * Store the current card ID in sessionStorage.
 */
export function rememberCardId(id) {
    try {
        window.sessionStorage.setItem(STORAGE_KEY, id);
    } catch (e) {
        /* storage blocked: fall back gracefully */
    }
}

/**
 * Get the initial card index for this page visit.
 * Respects page refreshes by picking a card different from the previous visit.
 */
export function getInitialCard() {
    const last = readLastCardId();
    const card = pickRandomCard(last);
    rememberCardId(card.id);
    return card;
}

/**
 * Render the HTML for the 3D flippable card component.
 */
export function renderContactCard(c, helpers, { design = 'minimal', staticOnly = false } = {}) {
    const h = helpers;
    const { contact, socials, person } = c;
    const initialCard = getInitialCard();

    return `
    <div class="card-3d-section" data-card-section data-card-id="${h.esc(initialCard.id)}">
        <div class="card-3d-scene" aria-label="Interactive 3D contact card for ${h.esc(person.name)}">
            <div class="card-3d"
                 tabindex="0"
                 role="button"
                 aria-label="3D Contact Card: ${h.esc(initialCard.name)} (${h.esc(initialCard.variant)}). Press Space or Enter to flip."
                 aria-pressed="false"
                 data-current-id="${h.esc(initialCard.id)}"
                 data-side="front">

                <!-- Front Face (Files with 'front' in name) -->
                <div class="card-3d__face card-3d__face--front">
                    <img class="card-3d__img card-3d__img--front"
                         src="${h.esc(initialCard.front)}"
                         alt="${h.esc(initialCard.altFront)}"
                         width="700"
                         height="420"
                         loading="eager"
                         decoding="async"
                         draggable="false">
                    <div class="card-3d__glare" aria-hidden="true"></div>
                </div>

                <!-- Back Face (Files with 'back' in name) -->
                <div class="card-3d__face card-3d__face--back">
                    <img class="card-3d__img card-3d__img--back"
                         src="${h.esc(initialCard.back)}"
                         alt="${h.esc(initialCard.altBack)}"
                         width="700"
                         height="420"
                         loading="lazy"
                         decoding="async"
                         draggable="false">
                    <div class="card-3d__glare" aria-hidden="true"></div>
                </div>
            </div>
        </div>

        <!-- Controls Toolbar: Flip button, Surprise button, and Card Info Badge -->
        <div class="card-3d-toolbar" aria-label="Card controls">
            <button type="button" class="card-3d-btn card-3d-btn--flip" data-action="flip" aria-label="Flip card to other side">
                <svg class="icon" aria-hidden="true" focusable="false"><use href="#i-arrow-right"></use></svg>
                <span>Flip Card</span>
                <span class="card-3d-kbd" aria-hidden="true">Space</span>
            </button>

            <div class="card-3d-indicator" aria-live="polite">
                <span class="card-3d-indicator__name">${h.esc(initialCard.name)}</span>
                <span class="card-3d-indicator__sep">·</span>
                <span class="card-3d-indicator__side">Front</span>
            </div>

            <button type="button" class="card-3d-btn card-3d-btn--shuffle" data-action="shuffle" aria-label="Switch to another random card">
                <svg class="icon" aria-hidden="true" focusable="false"><use href="#i-shuffle"></use></svg>
                <span>Random Card</span>
            </button>
        </div>

        <p class="card-3d-hint">
            <span class="card-3d-hint__action">Click card or press <kbd>Space</kbd> to flip in 3D</span>
            <span class="card-3d-hint__dot">·</span>
            <span class="card-3d-hint__note">Every flip randomly reveals a card</span>
        </p>

        <!-- Direct Contact Quick Actions -->
        <div class="card-3d-actions">
            <a class="card-3d-chip card-3d-chip--primary" href="${h.esc(h.mailto(contact.email))}">
                <svg class="icon" aria-hidden="true"><use href="#i-envelope-fill"></use></svg>
                <span>${h.esc(contact.email)}</span>
            </a>
            <a class="card-3d-chip" href="${h.esc(contact.phone.href)}">
                <svg class="icon" aria-hidden="true"><use href="#i-telephone"></use></svg>
                <span>${h.esc(contact.phone.label)}</span>
            </a>
            ${socials.map((s) => `
                <a class="card-3d-chip" href="${h.esc(s.href)}" target="_blank" rel="noopener noreferrer">
                    <svg class="icon" aria-hidden="true"><use href="#i-${h.esc(s.id)}"></use></svg>
                    <span>${h.esc(s.label)}</span>
                </a>
            `).join('')}
        </div>

        <!-- Accessible text for search engines and assistive technology -->
        <div class="visually-hidden">
            <p>${h.esc(contact.message)}</p>
            <p>Email: ${h.esc(contact.email)}</p>
            <p>Phone: ${h.esc(contact.phone.label)}</p>
            <p>Location: ${h.esc(contact.location)}</p>
        </div>
    </div>`;
}

/**
 * Initialize 3D interaction, tilt, flipping, and random shift mechanics on mounted card element.
 */
export function initContactCard(root, ctx) {
    const section = root.querySelector('[data-card-section]');
    if (!section) return;

    const card = section.querySelector('.card-3d');
    const frontImg = section.querySelector('.card-3d__img--front');
    const backImg = section.querySelector('.card-3d__img--back');
    const btnFlip = section.querySelector('[data-action="flip"]');
    const btnShuffle = section.querySelector('[data-action="shuffle"]');
    const indicatorName = section.querySelector('.card-3d-indicator__name');
    const indicatorSide = section.querySelector('.card-3d-indicator__side');
    const glares = section.querySelectorAll('.card-3d__glare');

    if (!card) return;

    // Current state
    const currentId = card.getAttribute('data-current-id') || CARDS[0].id;
    let currentCard = CARDS.find((c) => c.id === currentId) || CARDS[0];
    let isFlipped = false;
    let isAnimating = false;
    let currentRotation = 0; // in degrees around Y

    // Helper to update ARIA & Indicator labels
    function updateLabels(sideName) {
        if (indicatorName) indicatorName.textContent = currentCard.name;
        if (indicatorSide) indicatorSide.textContent = sideName;
        card.setAttribute(
            'aria-label',
            `3D Contact Card: ${currentCard.name} (${currentCard.variant}), showing ${sideName}. Press Space or Enter to flip.`
        );
        card.setAttribute('aria-pressed', String(isFlipped));
        card.setAttribute('data-side', isFlipped ? 'back' : 'front');
        card.setAttribute('data-current-id', currentCard.id);
        section.setAttribute('data-card-id', currentCard.id);
    }

    /**
     * Perform the 3D flip.
     * Every flip rotates 180° and updates the hidden face to a new random card,
     * so that every single flip yields a fresh card view!
     */
    function flip() {
        if (isAnimating) return;
        isAnimating = true;

        const nextFlipped = !isFlipped;
        currentRotation += 180;
        isFlipped = nextFlipped;

        // Apply 3D rotation
        card.classList.toggle('is-flipped', isFlipped);
        card.style.transform = `rotateY(${currentRotation}deg)`;

        // At midpoint of the 180-deg flip (when face is orthogonal to camera),
        // update the face that is rotating away to a new random card.
        window.setTimeout(() => {
            if (isFlipped) {
                // Back is now visible (showing currentCard.back).
                // Front is hidden on the reverse: pick the NEXT random card for front!
                const nextCard = pickRandomCard(currentCard.id);
                currentCard = nextCard;
                rememberCardId(nextCard.id);

                if (frontImg) {
                    frontImg.src = nextCard.front;
                    frontImg.alt = nextCard.altFront;
                }
                updateLabels('Back');
            } else {
                // Front is now visible (showing currentCard.front).
                // Back is hidden on the reverse: update back to match the new card!
                if (backImg) {
                    backImg.src = currentCard.back;
                    backImg.alt = currentCard.altBack;
                }
                updateLabels('Front');
            }
        }, 280);

        window.setTimeout(() => {
            isAnimating = false;
        }, 650);
    }

    /**
     * Surprise / Shuffle button:
     * Immediately chooses a completely new random card and spins to it.
     */
    function shuffle() {
        if (isAnimating) return;
        const nextCard = pickRandomCard(currentCard.id);
        currentCard = nextCard;
        rememberCardId(nextCard.id);

        isAnimating = true;
        currentRotation += 360;

        // Briefly fade or spin with new card assets
        card.style.transform = `rotateY(${currentRotation}deg)`;

        window.setTimeout(() => {
            if (frontImg) {
                frontImg.src = currentCard.front;
                frontImg.alt = currentCard.altFront;
            }
            if (backImg) {
                backImg.src = currentCard.back;
                backImg.alt = currentCard.altBack;
            }
            updateLabels(isFlipped ? 'Back' : 'Front');
        }, 280);

        window.setTimeout(() => {
            isAnimating = false;
        }, 650);
    }

    // 3D Pointer Tilt
    function onPointerMove(e) {
        if (isAnimating) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

        const rect = card.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const px = (e.clientX - rect.left) / rect.width; // 0 to 1
        const py = (e.clientY - rect.top) / rect.height; // 0 to 1
        const tiltX = (py - 0.5) * -14; // degrees
        const tiltY = (px - 0.5) * 16;  // degrees

        const baseRotY = currentRotation;
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${baseRotY + tiltY}deg)`;

        // Move glare reflection
        glares.forEach((g) => {
            g.style.setProperty('--glare-x', `${px * 100}%`);
            g.style.setProperty('--glare-y', `${py * 100}%`);
        });
    }

    function onPointerLeave() {
        if (isAnimating) return;
        card.style.transform = `rotateY(${currentRotation}deg)`;
    }

    // Event listeners
    const opts = ctx?.signal ? { signal: ctx.signal } : {};

    card.addEventListener('click', (e) => {
        // Prevent click if user clicked a nested interactive element
        if (e.target.closest('a, button')) return;
        flip();
    }, opts);

    card.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            flip();
        }
    }, opts);

    if (btnFlip) {
        btnFlip.addEventListener('click', flip, opts);
    }

    if (btnShuffle) {
        btnShuffle.addEventListener('click', shuffle, opts);
    }

    card.addEventListener('pointermove', onPointerMove, opts);
    card.addEventListener('pointerleave', onPointerLeave, opts);

    // Initial label setup
    updateLabels('Front');

    // Register cleanup if ctx is present
    ctx?.onCleanup?.(() => {
        card.style.transform = '';
    });
}

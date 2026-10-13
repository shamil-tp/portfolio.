/**
 * script.js — homepage progressive enhancements.
 * All content and links work without this file; it only adds the mobile
 * menu, header state, scroll reveals and small pointer effects.
 */
(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    // ---- Mobile navigation ----
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');

    if (toggle && nav) {
        const setOpen = (open) => {
            toggle.setAttribute('aria-expanded', String(open));
            nav.classList.toggle('is-open', open);
            document.body.style.overflow = open ? 'hidden' : '';
        };

        toggle.addEventListener('click', () => {
            setOpen(toggle.getAttribute('aria-expanded') !== 'true');
        });

        // Close after choosing a link (event delegation)
        nav.addEventListener('click', (e) => {
            if (e.target.closest('a')) setOpen(false);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
                setOpen(false);
                toggle.focus();
            }
        });

        // Reset if the viewport grows past the mobile breakpoint
        window.matchMedia('(min-width: 861px)').addEventListener('change', (e) => {
            if (e.matches) setOpen(false);
        });
    }

    // ---- Header shadow once the page scrolls (no scroll listener) ----
    const header = document.querySelector('.site-header');
    const hero = document.querySelector('.hero');
    if (header && hero && 'IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
            header.classList.toggle('is-scrolled', !entry.isIntersecting);
        }, { rootMargin: '-80px 0px 0px 0px' }).observe(hero.querySelector('h1') || hero);
    }

    // ---- Scroll reveal (one-shot) ----
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !reduceMotion.matches) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            }
        }, { threshold: 0.1 });
        revealEls.forEach((el) => revealObserver.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('active'));
    }

    // ---- Footer year ----
    const year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());

    // Everything below is decorative and pointer-only.
    if (!finePointer.matches || reduceMotion.matches) return;

    // ---- Logo text scramble on hover ----
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*';
    document.querySelectorAll('.logo-text[data-value]').forEach((el) => {
        let timer = null;
        el.closest('a').addEventListener('mouseenter', () => {
            const target = el.dataset.value;
            let iteration = 0;
            clearInterval(timer);
            timer = setInterval(() => {
                el.textContent = target
                    .split('')
                    .map((ch, i) => (i < iteration ? target[i] : letters[Math.floor(Math.random() * letters.length)]))
                    .join('');
                if (iteration >= target.length) {
                    clearInterval(timer);
                    el.textContent = target;
                }
                iteration += 1 / 3;
            }, 30);
        });
    });

    // ---- Magnetic buttons ----
    document.querySelectorAll('.btn').forEach((btn) => {
        let frame = 0;
        btn.addEventListener('mousemove', (e) => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const rect = btn.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
                const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
                btn.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
        btn.addEventListener('mouseleave', () => {
            cancelAnimationFrame(frame);
            btn.style.transform = '';
        });
    });
})();

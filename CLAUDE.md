# MASTER PROMPT: AUTHENTIC DESIGN REFINEMENT — ALL SIX PORTFOLIO EXPERIENCES

## ROLE

Act as a world-class creative director, senior web designer, frontend architect, typography specialist, interaction designer, motion designer, and web performance engineer.

I already have a randomized developer portfolio with six design systems:

1. Minimal Swiss
2. Experimental Brutalist
3. Immersive 3D
4. Retro Operating System
5. Editorial / Magazine
6. Experimental Generative

Your mission is to transform all six into **authentic, deeply art-directed, production-quality design experiences**.

Do not merely polish the existing CSS. Critically evaluate each design, identify generic or artificial-looking elements, rethink weak compositions, and rebuild the necessary parts.

Each design must feel as though it was independently conceived by a specialist designer who understands its visual tradition, typography, interaction patterns, composition, and motion language.

The result must be visually distinctive, coherent, memorable, responsive, accessible, and functional.

**Primary objective: authenticity, not quantity of effects.**

---

## PHASE 1 — DISCOVER AND USE ALL RELEVANT INSTALLED SKILLS

Before changing code, inspect the environment and discover every installed skill relevant to this task.

### 1.1 Perform a complete skills audit

Use the available Claude Code skill discovery mechanisms to identify installed skills.

Inspect:
- Global skills.
- Project-level skills.
- Repository-specific instructions.
- Available skill directories.
- Relevant plugin-provided skills.
- MCP integrations and their documented capabilities.

Pay particular attention to skills involving:

- Creative web design and design engineering.
- Frontend development.
- Typography and visual hierarchy.
- Layout, grids, and spacing.
- Animation and motion design.
- Smooth scrolling and interaction design.
- Microinteractions and transitions.
- Responsive design.
- Accessibility.
- Performance optimization.
- Visual critique.
- Browser testing.
- Figma workflows.

Specifically check whether the `emilkowalski/skills` collection and its relevant skills, such as `emil-design-eng` and `animate`, are installed.

These are discovery targets, not assumptions. Use only skills that actually exist and inspect their instructions before relying on them.

### 1.2 Apply the skills, not just read them

For every relevant skill:

1. Read its instructions.
2. Extract its applicable design and implementation principles.
3. Apply those principles to the relevant portfolio variants.
4. Validate the result.
5. Revisit the skill guidance when the implementation requires it.

Do not claim that all skills were used simply because they were discovered.

Create a concise internal checklist mapping relevant skills to the work they influence. Report which skills were actually applied in the final summary.

Do not install duplicate skills or modify global configuration unnecessarily.

### 1.3 Use Figma and Playwright

Inspect the available Figma and Playwright integrations.

**Figma**
- Inspect existing frames, design references, components, typography, variables, and assets when available.
- If supported, create or refine reference designs for the six variants.
- Establish coherent design tokens for each experience.
- Use design references to identify visual inconsistencies during implementation.
- Do not claim to have created or inspected a Figma design without actually doing so.

**Playwright**
- Inspect the real rendered website.
- Test every design at desktop, tablet, and mobile sizes.
- Capture screenshots of each variant.
- Inspect the actual visual output rather than trusting the source code alone.
- Identify layout defects, awkward typography, broken interactions, and inconsistent spacing.
- Repeat the test-and-refine cycle after fixing issues.

If a plugin is unavailable, continue using the available tools and explain the limitation.

---

## PHASE 2 — AUDIT THE EXISTING IMPLEMENTATION

Before editing files, understand the current architecture.

Inspect:
- `index.html`
- Shared CSS.
- All six design stylesheets.
- Design registry.
- Randomization engine.
- Shared portfolio content.
- Design initialization and cleanup.
- Navigation and interaction scripts.
- Asset directories.
- GitHub Pages configuration.
- Existing README and deployment instructions.

Identify:

- Layouts that look like generic templates.
- Variants that differ only in color and typography.
- Inconsistent spacing and weak visual hierarchy.
- Generic card grids.
- Excessive rounded corners.
- Unnecessary gradients, shadows, and glass effects.
- Overused pill badges.
- Weak font pairings.
- Poorly balanced whitespace.
- Repetitive animations.
- Decorative elements without a design purpose.
- Missing interaction feedback.
- Inconsistent project presentations.
- Mobile layouts that simply shrink desktop designs.
- Heavy or unnecessary assets.
- CSS conflicts between variants.
- Accessibility and performance problems.

Do not replace working architecture without a clear reason.

Preserve the existing randomization engine, consecutive-design avoidance, shared content source, and GitHub Pages compatibility unless a verified defect requires changes.

Produce a short audit before beginning substantial modifications.

---

## PHASE 3 — ESTABLISH A DISTINCT ART DIRECTION FOR EACH DESIGN

Treat each portfolio variant as a separate creative direction.

Do not impose one shared visual style across all six. Share content and infrastructure, but let each design make its own visual decisions.

### DESIGN 01 — MINIMAL SWISS

**Creative direction:** Swiss International Typographic Style, modernist editorial grids, precise typography, and disciplined composition.

The result must feel deliberate, restrained, and confident.

#### Visual language
- A disciplined grid with consistent alignment.
- Intentional asymmetry.
- Strong typographic hierarchy.
- Restrained colors with a clear reason for each accent.
- Generous but purposeful whitespace.
- Crisp lines and precise spacing.
- Strong use of scale and negative space.
- Carefully controlled content width.
- Editorial treatment of project metadata.

#### Typography
- Select typefaces suited to a modernist, typography-led composition.
- Establish a clear type scale and consistent baseline rhythm where appropriate.
- Use large typography selectively.
- Carefully control line lengths, line height, tracking, and heading wraps.
- Avoid decorative typography that undermines clarity.

#### Interactions and motion
- Subtle transitions.
- Precise hover and focus states.
- Minimal entrance motion.
- Elegant section navigation.
- Motion should reinforce alignment, hierarchy, and orientation.

#### Avoid
- Generic SaaS cards.
- Random floating decorations.
- Excessive gradients.
- Unnecessary shadows.
- Oversized typography without compositional purpose.
- Artificial minimalism that leaves the page empty without intention.

**Acceptance test:** The design must feel carefully typeset and art-directed even when animations are disabled.

### DESIGN 02 — EXPERIMENTAL BRUTALIST

**Creative direction:** Contemporary web brutalism, anti-design experimentation, expressive typography, raw structure, and deliberate visual tension.

This must feel rebellious and intentionally composed, not unfinished.

#### Visual language
- Bold typography and distinctive scale changes.
- High-contrast color combinations.
- Hard edges and visible boundaries.
- Asymmetric composition.
- Dense and sparse areas used intentionally.
- Unexpected alignment.
- Strong graphic blocks.
- Unconventional project layouts.
- Distinctive navigation.

#### Typography
- Experiment with bold display type and contrasting text styles.
- Treat typography as a visual object.
- Use wrapping, cropping, and scale strategically.
- Keep body text readable.
- Ensure experimental type does not obscure important content.

#### Interactions and motion
- Confident, immediate transitions.
- Graphic hover treatments.
- Unexpected but understandable interaction feedback.
- Cursor treatments only when they improve the experience.
- Strong active and focus states.

#### Avoid
- Merely making everything black and white.
- Random neon accents.
- Excessive glitch effects.
- Constant shaking.
- Fake terminal aesthetics.
- Unreadable overlapping text.
- Visual chaos without hierarchy.

**Acceptance test:** The design should have a recognizable personality from its composition alone, not merely its colors.

### DESIGN 03 — IMMERSIVE 3D

**Creative direction:** Spatial web design, dimensional typography, layered environments, depth, and cinematic transitions.

Build an immersive experience without sacrificing navigation, readability, or performance.

#### Visual language
- Clear foreground, middle ground, and background relationships.
- Layered composition and intentional depth.
- Spatially arranged project presentations.
- Perspective and scale used consistently.
- Thoughtful lighting, shadows, and materials where appropriate.
- A clear focal point.
- A deliberate visual relationship between the 3D elements and portfolio content.

#### Interactions and motion
- Controlled parallax.
- Subtle pointer-responsive depth where appropriate.
- Smooth transitions between spatial states.
- Natural easing.
- Camera-like movement only when it has a clear purpose.
- Avoid uncontrolled motion and unnecessary animation loops.

#### Technical constraints
- Preserve the HTML/CSS/vanilla JavaScript architecture.
- Use CSS perspective and transforms where they are sufficient.
- Use Three.js only when it meaningfully improves the experience.
- Load optional 3D assets lazily.
- Provide a graceful fallback when WebGL is unavailable.
- Support reduced-motion preferences.
- Ensure essential content remains accessible without 3D effects.

#### Avoid
- Generic neon cyberpunk visuals.
- Random floating cubes without meaning.
- Excessive bloom and glow.
- Unnecessary particle systems.
- Slow interactions.
- A 3D scene that hides the portfolio.
- Heavy effects that make mobile devices struggle.

**Acceptance test:** Depth must contribute to the experience rather than simply decorate a conventional page.

### DESIGN 04 — RETRO OPERATING SYSTEM

**Creative direction:** A coherent desktop computing environment inspired by a specific historical computing era or operating-system design language.

Choose a clear reference direction before implementing the details. Do not mix unrelated operating systems, decades, and interface conventions without a reason.

#### Visual language
- A recognizable desktop environment.
- Consistent window borders and title bars.
- Carefully designed window controls.
- A coherent icon style.
- A taskbar, dock, or launcher appropriate to the selected direction.
- Consistent window layering and focus states.
- Authentic interface density and spacing.
- A believable desktop wallpaper or background.
- Project windows that feel like real applications.

#### Interactions
- Functional window opening and closing.
- Minimize and restore behavior where implemented.
- Correct z-index and active-window handling.
- Dragging where appropriate.
- Keyboard alternatives for mouse-dependent actions.
- Touch-friendly controls on mobile.
- A usable fallback layout for narrow screens.

#### Avoid
- Generic rounded cards disguised as operating-system windows.
- Mixing Mac, Windows, and Linux visual conventions arbitrarily.
- Decorative controls that do nothing.
- Fake desktop elements that obscure real content.
- Unusable mobile simulations.
- Drag interactions that prevent keyboard access.

**Acceptance test:** The interface must behave like a coherent environment, not just look like a screenshot of a desktop.

### DESIGN 05 — EDITORIAL / MAGAZINE

**Creative direction:** Contemporary independent magazines, art direction, editorial typography, and sophisticated long-form composition.

The page should read like a carefully designed publication about a developer's work.

#### Visual language
- Intentional column systems.
- Strong editorial hierarchy.
- Thoughtful image-to-text relationships.
- Varied project compositions.
- Distinctive headlines and supporting metadata.
- Generous margins.
- Carefully controlled text width.
- Purposeful whitespace and visual pacing.
- Elegant section transitions.

#### Typography
- Use a considered display/body pairing.
- Choose typefaces that work together in contrast and tone.
- Control paragraph rhythm and line lengths.
- Make project descriptions readable.
- Use italics, uppercase labels, or small metadata sparingly and intentionally.

#### Interactions and motion
- Restrained image reveals.
- Elegant hover treatments.
- Smooth transitions between sections.
- Subtle image movement where appropriate.
- Functional article-like project links.
- Avoid overanimating text that should be read.

#### Avoid
- Generic agency templates.
- Excessive tiny uppercase labels.
- Identical project cards.
- Decorative serif fonts used without typographic purpose.
- Dense text without breathing room.
- Magazine styling that makes technical information difficult to scan.

**Acceptance test:** The design must feel like an editorial composition, not a standard portfolio with a serif font.

### DESIGN 06 — EXPERIMENTAL GENERATIVE

**Creative direction:** Procedural graphic design, creative coding, algorithmic composition, and controlled visual unpredictability.

The experience should feel like an interactive design experiment with a coherent system behind it.

#### Visual language
- Generative geometry.
- Procedural patterns.
- Carefully varied composition.
- Distinctive typographic treatments.
- Intentional use of negative space.
- Dynamic relationships between content and graphics.
- Rule-based visual variation.
- A clear visual hierarchy despite the experimental structure.

#### Technical approach
- Use CSS, SVG, and vanilla JavaScript for procedural graphics.
- Generate variations using explicit design rules.
- Keep decorative generation separate from portfolio content.
- Avoid unnecessary dependencies.
- Ensure generated elements do not obscure navigation or text.
- Make generated compositions responsive.
- Keep output deterministic within a particular page session where that improves visual stability.

#### Interactions and motion
- Controlled generative movement.
- Responsive reactions to user interaction.
- Subtle transitions between generated states.
- Animation loops only when they provide meaningful value.
- Clear fallbacks when animation or graphics are unavailable.

#### Avoid
- Random shapes scattered without composition.
- Unreadable text.
- Unbounded particle creation.
- Random changes that cause layout shifts.
- Constant motion.
- The same design as the brutalist variant with added SVG shapes.

**Acceptance test:** The generative system must follow a visible visual logic that a designer could explain.

---

## PHASE 4 — BUILD A PROFESSIONAL DESIGN SYSTEM FOR EACH VARIANT

Each design must have its own clearly defined visual tokens.

Create or refine:
- Color palette.
- Background and surface colors.
- Primary and secondary text colors.
- Accent colors.
- Typography families.
- Display and body type scales.
- Font weights.
- Line heights.
- Letter-spacing rules.
- Spacing scale.
- Content-width rules.
- Grid definitions.
- Border treatments.
- Radius rules.
- Shadow and depth rules.
- Animation durations.
- Easing curves.
- Focus and hover states.
- Responsive breakpoints.

Do not blindly force the same tokens on all designs.

Shared infrastructure may define a common baseline, but design-specific tokens must be allowed to diverge substantially.

Audit the CSS for conflicting selectors, excessive specificity, duplicated overrides, and accidental cross-design leakage.

Prefer CSS custom properties scoped to each design identity.

Ensure the active variant controls its own styling cleanly and predictably.

---

## PHASE 5 — TYPOGRAPHY AND FONT PAIRING

Treat typography as a central part of art direction.

For every variant:

1. Choose a typography strategy suited to the concept.
2. Explain internally why the selected typefaces work together.
3. Establish a responsive type scale.
4. Define heading, body, label, and metadata styles.
5. Control line length and wrapping.
6. Check spacing around text blocks.
7. Test real portfolio content rather than placeholder text.
8. Validate the design at mobile and desktop sizes.

Use appropriately licensed fonts and provide fallback stacks.

Prefer local or system fonts when external font requests would compromise reliability.

Use `clamp()` for fluid sizing where appropriate.

Avoid excessive letter spacing on body text.

Do not choose fonts simply because they are trendy.

Every font choice should strengthen the intended identity.

---

## PHASE 6 — MOTION DESIGN, SMOOTH SCROLLING, AND MICROINTERACTIONS

Apply the relevant installed animation skills to all six variants.

Do not give every design the same animation preset.

### Motion direction
- Swiss: precise, restrained, and almost invisible.
- Brutalist: bold, immediate, and expressive.
- 3D: spatial, layered, and natural.
- OS: tactile, mechanical, and interface-oriented.
- Editorial: elegant, paced, and subtle.
- Generative: organic, procedural, and controlled.

### Implement and refine
- Initial page entrances.
- Section reveals.
- Project interactions.
- Navigation transitions.
- Hover and focus feedback.
- Scroll-triggered effects.
- Design-switch transitions.
- Loading and error states.
- Optional pointer interactions.
- Responsive motion behavior.

### Motion quality rules
- Choose appropriate easing curves.
- Avoid excessive delays.
- Avoid animating everything.
- Use opacity and transforms when appropriate.
- Keep the site responsive during animations.
- Avoid scroll hijacking.
- Preserve native browser scrolling.
- Use `prefers-reduced-motion`.
- Ensure essential functionality works when motion is disabled.
- Clean up observers, animation frames, and event listeners.

Smooth scrolling should improve orientation, not make navigation feel slower.

Use native CSS scrolling behavior where appropriate. Do not introduce a heavyweight smooth-scrolling dependency merely to satisfy a visual preference.

---

## PHASE 7 — MAKE EACH EXPERIENCE VISUALLY AUTHENTIC

Inspect each variant using actual browser screenshots.

For each design, evaluate:

### Composition
- Is the focal point immediately clear?
- Does the layout have a recognizable design philosophy?
- Are the margins and spacing intentional?
- Is the visual hierarchy clear?
- Does the page have a distinctive silhouette?
- Is the design too symmetrical, too sparse, or too crowded for its concept?

### Typography
- Are typefaces appropriate for the art direction?
- Are headings and body text balanced?
- Do line breaks look deliberate?
- Is text readable at every viewport?
- Does typography contribute to the identity?

### Color
- Is the palette cohesive?
- Are contrast and hierarchy strong?
- Are accents used purposefully?
- Does the palette reinforce the design rather than merely decorate it?

### Interaction
- Are controls functional?
- Is interaction feedback clear?
- Do hover, focus, and active states feel intentional?
- Does the interface work with keyboard and touch input?

### Motion
- Is the timing appropriate?
- Does the motion reinforce the design?
- Are animations smooth?
- Is the page readable while effects run?
- Does reduced-motion mode work?

### Authenticity
Ask explicitly:

- Could this design be mistaken for a generic AI-generated portfolio template?
- Does it rely on fashionable effects instead of a coherent visual idea?
- Could its identity be recognized without looking at the color palette?
- Does every major design decision support its concept?
- Is the result strong enough to stand as an independent portfolio design?

If the answer exposes a weakness, redesign the affected parts.

---

## PHASE 8 — FIGMA REVIEW AND VISUAL VALIDATION

Use the available Figma integration according to its actual capabilities.

If reference designs exist:
- Compare the browser implementation against them.
- Check layout proportions, font scale, spacing, colors, and composition.
- Record meaningful deviations.
- Correct mismatches that undermine the design.

If design creation is supported and no references exist:
- Establish a reference board or design specification for the six art directions.
- Define each variant's design tokens and composition.
- Use the references to guide implementation.

If the integration only supports inspection, do not pretend it can create or edit designs.

If Figma is unavailable, document the limitation and proceed with browser-based visual critique.

---

## PHASE 9 — PLAYWRIGHT TESTING

Test every design independently.

At minimum, inspect:
- 320px.
- 375px.
- 768px.
- 1024px.
- 1440px.

For each design:
- Capture screenshots.
- Check horizontal overflow.
- Check typography and text wrapping.
- Verify section navigation.
- Test interactive controls.
- Test keyboard navigation.
- Check color contrast where supported.
- Inspect console errors.
- Inspect failed network requests.
- Test reduced-motion settings.
- Check image dimensions and loading.
- Check touch interaction behavior.

Also test the randomization engine:
- Full page refresh selects a new design under normal conditions.
- Consecutive-design avoidance works when storage is available.
- The Surprise Me control works.
- The selected design loads correctly.
- Failed initialization falls back safely.
- Content remains consistent across variants.
- Design-specific event listeners and animation loops do not accumulate.

Provide a deterministic development or testing mechanism for selecting each variant without exposing debugging controls in the production interface.

Do not assume all designs work simply because one design works.

Inspect the screenshots, fix defects, and retest.

---

## PHASE 10 — ACCESSIBILITY AND PERFORMANCE

Preserve the existing HTML, CSS, and vanilla JavaScript architecture and GitHub Pages deployment model.

Verify:
- Semantic HTML.
- Heading hierarchy.
- Keyboard access.
- Visible focus states.
- Accessible navigation.
- Meaningful link labels.
- Reduced-motion support.
- Responsive touch targets.
- Image alternatives.
- Color contrast.
- Graceful handling of missing assets.
- WebGL fallback.
- No unnecessary layout shifts.
- No expensive animation loops.
- No duplicated listeners.
- No unnecessary libraries.
- No broken relative paths.

Use real browser measurements when available.

Do not claim Lighthouse scores, accessibility compliance, or successful tests without evidence.

---

## PHASE 11 — PRESERVE THE RANDOMIZED PORTFOLIO ARCHITECTURE

Do not lose the original defining feature.

The portfolio must continue to:
- Select a design on every full page load.
- Avoid consecutive repeats when browser storage is available and multiple designs exist.
- Share one central portfolio content source.
- Provide the Surprise Me control.
- Support the existing design registry.
- Work on GitHub Pages.
- Use no backend.
- Remain functional if optional effects fail.

The six variants must remain independent visual experiences.

Do not simplify them into one generic layout with six themes.

Do not let design-specific CSS leak into other variants.

Do not break project links, social links, or navigation while refining visuals.

---

## PHASE 12 — EXECUTION STRATEGY

Work systematically.

### Step 1: Audit
Inspect the repository, installed skills, available integrations, and current implementations.

### Step 2: Critique
Evaluate all six variants and identify the most important weaknesses in each.

### Step 3: Establish art direction
Define the visual principles, typography, palette, spacing, composition, and motion language for every variant.

### Step 4: Refine architecture
Make only the architectural changes required to support better design quality, isolation, maintainability, and performance.

### Step 5: Refine each variant
Complete one design at a time. Do not move on after merely changing its colors.

### Step 6: Browser review
Run the site and inspect actual screenshots at multiple viewport sizes.

### Step 7: Iterate
Fix the most visually significant defects first. Repeat until each variant has a coherent identity.

### Step 8: Regression testing
Verify all six designs, randomization, content consistency, accessibility, and GitHub Pages compatibility.

### Step 9: Report
Summarize completed changes, actual tests, relevant skills applied, available integrations used, remaining limitations, and anything that still requires attention.

---

## FINAL ACCEPTANCE CRITERIA

The task is complete only when:

- All six variants have recognizable, independent art directions.
- Each design feels intentionally composed rather than generated from a generic template.
- Typography and spacing are carefully tuned.
- Motion is distinct, purposeful, and smooth.
- The operating-system variant behaves like a coherent interface.
- The 3D variant uses depth meaningfully.
- The editorial variant has convincing typographic and compositional rhythm.
- The brutalist variant has deliberate visual tension.
- The Swiss variant demonstrates disciplined precision.
- The generative variant follows a coherent procedural visual system.
- All six remain responsive and accessible.
- Randomization continues working.
- Shared content remains consistent.
- Playwright testing has been executed where available.
- Visual defects identified during screenshot review have been addressed.
- The static GitHub Pages deployment remains functional.

Do not stop at a code review. Inspect the rendered result.

Do not stop when the website works. Refine the art direction until the designs feel authentic.

**Begin with the skill and integration audit, inspect the existing implementation, and then execute the complete refinement workflow.**
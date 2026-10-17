# shamiltp.me

Shamil TP's portfolio. A visit picks one of ten complete design identities (same content, different website), and the case studies in `myProjectDetails/` render in the same identity. Nine of the designs also generate a fresh, art-directed variation of themselves on every refresh (palette, layout, type and motion); Depth always looks the same and tells its story through scrolling instead.

| ID | Name | Character |
| --- | --- | --- |
| `minimal` | Swiss | Twelve-column grid, sticky section labels, one red accent |
| `brutalist` | Brutalist | Colour blocks, 3px borders, offset shadows, skills ticker |
| `depth` | Depth | A clay model of the portfolio (Three.js): buildings are projects, floors = technologies; turn it, select buildings, read panels |
| `os` | Desktop OS | Draggable windows, taskbar, Start menu; stacked windows on phones |
| `editorial` | Editorial | Magazine masthead, lead story, ruled columns, drop cap |
| `generative` | Generative | Seeded palette, Truchet tile field and per-project glyphs |
| `terminal` | Terminal | A portfolio shell with real commands (`help`, `projects`, `open <name>`…), history and tab completion |
| `blueprint` | Blueprint | A drawing set: project schematic wired to shared technologies, schedules, notes, title block |
| `studio` | Studio | A playful studio: colour blocks, scalloped section edges, tactile cards with a "View" badge |
| `garden` | Garden | Botanical: each project grows a plant from its name, one stem per technology |

Plain HTML, CSS and JavaScript modules. No framework, no build step, no backend.

## Run locally

ES modules don't load from `file://`, so serve the folder:

```sh
python -m http.server 8000
# open http://localhost:8000/
```

Force a design with `?design=<id>`, e.g. `http://localhost:8000/?design=os#projects`, and a variation with `?variation=<seed>` (any whole number), e.g. `?design=studio&variation=42`. Automated tests use these hooks; they are not shown anywhere in the UI. The design dock's tooltip names the current variation.

## How it works

```
index.html               SEO head, SVG icon sprite, static fallback content in #app, design dock
css/tokens.css           shared motion tokens (easing, durations)
css/base.css             reset, a11y utilities, loading state, dock, static fallback styles
css/design-*.css         homepage stylesheet per design; only the active one is loaded
css/case-base.css        case-study structure, drawn from --cs-* tokens (also the no-JS look)
css/case-*.css           case-study stylesheet per design (tokens + its own composition)
js/design-registry.js    the list of designs (classic script, loaded in <head>)
js/boot.js               picks the design before the body renders and starts its stylesheet
js/main.js               homepage entry module
js/design-engine.js      homepage: mounts, switches ("Surprise me") and tears down designs; fallbacks
js/case-main.js          case studies: applies/swaps the case stylesheet, optional enhanceCase()
js/content.js            ALL portfolio content (single source of truth)
js/render-helpers.js     escaping, links, portrait, project links, hashing/PRNG
js/interactions.js       shared behaviour: reveal-on-scroll, menu toggle, frame loop, active nav
js/designs/*.js          one module per design: render(content, helpers), init(root, ctx)
js/designs/depth-scene.js  the Three.js maquette (only loaded by the depth design)
js/generative-ui.js      per-visit variation: seed, build, apply/clear on <html>, repeat avoidance
js/variation-presets.js  what each of the nine designs may vary: palettes, contrast pairs, layout/type/motion presets
js/palette-generator.js  OKLCH colour maths, gamut mapping and WCAG contrast repair
js/layout-generator.js   picks compatible layout presets and validates the rendered page
js/baseline.js           generates the crawlable no-JS homepage and the projects JSON-LD from content.js
tools/baseline.html      opens that generator in a browser (noindex; not linked from the site)
```

- **Selection:** `boot.js` runs synchronously in `<head>`:
  - A **refresh**, or arriving from another site, picks a random design with `crypto.getRandomValues`. It skips the one shown last in this tab (`sessionStorage`).
  - **Following a link within the site**, or Back/Forward, keeps the current design, so the homepage and its case studies feel like one place.
  - `?design=<id>` always wins.

  It then sets `<html data-design>`, starts that design's stylesheet (homepage or case-study variant) and fonts, and hides the page until it's ready, so no other design flashes. If storage is blocked, selection still works, but a design can then repeat on consecutive refreshes.
- **Lazy loading:** only the chosen design's stylesheet, fonts and module are fetched. The engine loads the others with `import()` only when "Surprise me" picks them.
- **Switching:** "Surprise me" downloads the next stylesheet with `media="print"`, so it can't restyle the current page early. It then fades `#app` out, disposes the current design (its `AbortController` removes listeners, and observers, timers and frames are cleaned up), swaps the stylesheet, renders, and fades back in. Focus stays on the button.
- **Fallbacks:** if a design's stylesheet or module fails, the engine mounts `minimal`. If that fails too, it restores the static HTML that shipped in `#app`. If the engine never loads (blocked script, very old browser), a 4s failsafe in `boot.js` reveals that static HTML. With JavaScript off, the static HTML shows straight away.
- **Case studies:** the pages in `myProjectDetails/` keep their content as static HTML, which is good for SEO and readable without JavaScript. They share one class vocabulary (`.content-section`, `.info-table`, `.flow-step`, `.sidebar-widget`, …) with no inline styles or page-level CSS. Each design restyles that vocabulary from `css/case-<design>.css`, and a design module may export `enhanceCase(ctx, helpers)` for extras; the generative design uses it for its seeded tile band and the project's glyph.
- **The 3D maquette (`depth`):** Three.js r160 is imported from jsDelivr only when this design is chosen. The other nine designs never download it. Every object in the scene has a real HTML button positioned over it, and the project panel is ordinary HTML with real links. So keyboard (Tab and arrow keys, Enter, Esc), screen readers and touch all work, and without WebGL the same buttons become a list. The scene renders only while something changes (camera easing, hover, resize); when idle it issues no draw calls. The shadow map is drawn once, the floors are one instanced mesh, the pixel ratio is capped at 1.75, and GPU resources are released when the design is swapped out.
- **Generative variations:** designs with `supportsGenerativeUI: true` in the registry (all but `depth`) get a variation per visit. The engine imports `js/generative-ui.js` only for those designs, so Depth never loads it.
  - **Seed:** a fresh 32-bit seed on every refresh, re-rolled if it would repeat this tab's previous combination for that design (`sessionStorage`). Following a link inside the site keeps the visit's seed, so case studies match the homepage. "Surprise me" always draws a new one.
  - **Palette:** either one of the design's curated palettes or one generated in OKLCH from a design-specific recipe (Swiss: neutral paper and one signal colour; Brutalist: a loud block colour with split-complementary partners; Terminal: dark only; Blueprint: real drafting media such as vellum, cyanotype, sepia and graphite; Garden: seasons; Desktop OS: only period desktop schemes, never generated). Every text/background pair listed in the preset is checked against WCAG (4.5:1 text, 3:1 large text and UI); a generated palette is repaired by moving lightness, and if it still fails a verified curated palette is used.
  - **Layout:** each design lists named options per dimension (e.g. Swiss hero `index | stacked | split`, Terminal `frame`, `prompt`, `intro`, `listing`), implemented in its stylesheet under `[data-v-<dimension>='<option>']` or read by its module from the variation. Options never reorder the DOM. Incompatible pairs are excluded. After render, the engine checks that every section and all 12 project links exist, nothing overflows horizontally and the main heading doesn't collide with text; a failure remounts the same palette with the design's original layout (the first option of every dimension).
  - **Type and motion:** small preset sets per design (e.g. display weight, condensed width, reveal duration, ticker speed) written as custom properties.
  - **Isolation:** the variation only sets the active design's own custom properties and `data-v-*` attributes on `<html>`, and removes exactly those on every switch, so nothing leaks into the next design. Case studies take the palette, type and motion but not the homepage layout.
- **Depth scroll story:** the model stays pinned while seven chapters scroll past (overview, three featured projects, skills, about, contact). An `IntersectionObserver` moves the camera to each chapter's fixed viewpoint, taking the shortest turn. Dragging the model or opening a panel gives the visitor control until the next chapter starts; "Reset view" returns to the current chapter's view. The chapter dots jump between chapters. Native scrolling throughout, with no scroll listeners. Reduced motion jumps between viewpoints instead of easing, and without WebGL the chapters read as a plain introduction.
- **Paths:** registry paths are resolved from the site root, which `boot.js` derives from its own URL. So the site works at `https://shamiltp.me/`, under a project path like `https://USERNAME.github.io/REPO/`, and from the `myProjectDetails/` sub-folder.

## Editing a case study

Write content in the existing classes. See any page in `myProjectDetails/`, and use `rewind.html` as a template. Don't add `style=""` attributes or a `<style>` block, because the ten designs can't restyle those. The one exception is data, such as `style="width:57%"` on a score or language bar. If a page needs a new component, add it to `css/case-base.css` using the `--cs-*` tokens, and give it a look in each `css/case-*.css` where the default doesn't fit.

## Editing content

Edit `js/content.js`. Every design renders from it.

The static content inside `<div id="app">` in `index.html` (between `<!-- BASELINE:START -->` and `<!-- BASELINE:END -->`) is what crawlers, link previews and no-JS visitors see: every project with its summary, stack and links, plus skills, experience and contact. It's generated from `content.js`. After editing content:

1. Serve the site and open `/tools/baseline.html`.
2. Paste the markup between the BASELINE markers in `index.html`.
3. Replace the `ItemList` node in the homepage JSON-LD with the second block.

To add a whole project, see the "Adding a new project" checklist in [SEO-MAINTENANCE.md](SEO-MAINTENANCE.md).

## Adding a design

1. Add an entry to `js/design-registry.js` (id, name, description, stylesheet, fonts, module, supportsGenerativeUI, themeColor). With `supportsGenerativeUI: true`, also add a preset to `js/variation-presets.js` (the first option of every layout dimension must be the design's original composition) and style each option.
2. Create `css/design-<id>.css`. Put tokens on `:root`, prefix classes with a short namespace, set the `--dock-*` variables to theme the dock, and end the footer padding with `var(--dock-clearance)`.
3. Create `js/designs/<id>.js` exporting `render(content, h)` and `init(root, ctx)`. Render a `<main id="main">` containing an `<h1 id="hero-title">` and sections with the ids `about`, `projects`, `skills`, `experience` and `contact`, so skip links and `#hash` URLs work in every design. Register all listeners with `{ signal: ctx.signal }` and everything else with `ctx.onCleanup()`.
4. Add `data-reveal` (with an optional `style="--i:n"` stagger) to wrappers that should fade in, never to the interactive element itself.

## SEO and Search Console

The site is a GitHub Pages **user/custom-domain** site: `CNAME` is `shamiltp.me`, so pages live at the domain root, and canonicals, the sitemap and the `404.html` links use `https://shamiltp.me/`. If you ever serve it from `USERNAME.github.io/REPO/` instead, the site still works (all paths are relative), but update `CNAME`, the canonicals, `sitemap.xml` and `robots.txt` to the new URL.

Already in place:
- Unique titles and descriptions, canonical URLs, Open Graph and Twitter cards with real 1200×630 images.
- JSON-LD: `WebSite`, `ProfilePage`, `Person` (with verified `sameAs` profiles) and a 12-item `ItemList` of the projects (`SoftwareSourceCode` with `codeRepository` where public, `CreativeWork` for client work). Each case study has its own `SoftwareSourceCode`/`CreativeWork` and `BreadcrumbList`.
- Full crawlable content without JavaScript, `robots.txt`, and `sitemap.xml` (14 canonical URLs).

Search Console (nothing below has been done for you):
1. <https://search.google.com/search-console> → **Add property** → **Domain** → `shamiltp.me`, then add the DNS `TXT` record it shows and **Verify**.
2. **Sitemaps** → submit `https://shamiltp.me/sitemap.xml`.
3. **URL inspection** → `https://shamiltp.me/` → **Test live URL**, then **Request indexing**.
4. **Performance** → search results: queries, impressions, clicks, average position.
5. **Indexing → Pages**: excluded or erroring URLs (look for "Not found (404)" and duplicate-canonical notices).
6. Structured data: <https://search.google.com/test/rich-results> and <https://validator.schema.org/>.
7. Mobile performance: <https://pagespeed.web.dev/>. Field data appears only once there is enough Chrome traffic.

More detail is in [SEO-MAINTENANCE.md](SEO-MAINTENANCE.md).

## Deploying to GitHub Pages

No build step. In the repository: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**. The existing `CNAME` (`shamiltp.me`) and `.nojekyll` stay as they are. Push to `main`, and Pages publishes the files as-is.

## Testing

The site was checked in Chromium (Playwright) at 320, 375, 768, 1024 and 1440px for every design:
- horizontal overflow, missing section ids and console errors
- refresh variety and no consecutive repeats
- "Surprise me" cleanup
- `#hash` deep links
- OS window controls (pointer and keyboard)
- mobile menus
- reduced motion, blocked storage, a 404ing stylesheet, a failing design module, a blocked engine and no JavaScript
- serving from a sub-path

Generative UI: 9 designs × 8 seeds × 5 widths (360 loads) with no layout fallback, overflow or console error; refresh never repeated the previous variation; links keep the visit's variation; switching to Depth leaves no variation tokens; a failing `generative-ui.js` leaves each design in its original look; blocked storage still varies. Depth's scroll story was checked at 375 and 1440px: every chapter activates, the dots follow, and the model stays pinned.

The case studies were checked the same way: all 13 pages in all ten designs at the same five widths, plus the navigation rules (keep the design across links, re-roll on refresh). The 3D maquette was also tested for hover and click picking, keyboard roving, panel open/step/close, drag, reset, touch, idle rendering (no draw calls), reduced motion and a blocked Three.js download (list fallback).

Not covered: Safari, Firefox, and real touch devices. The Depth case-study pages use scroll-driven `animation-timeline`; browsers without it show the slabs without that effect.

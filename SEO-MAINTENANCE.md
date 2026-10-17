# SEO & performance maintenance

Static site on GitHub Pages, custom domain `shamiltp.me` (see `CNAME`). No build step.

## Site map of SEO-relevant files

| File | Purpose |
| --- | --- |
| `robots.txt` | Allows all crawlers, points to the sitemap |
| `sitemap.xml` | The 16 canonical, indexable URLs (homepage, about, achievements, projects hub, 12 case studies) |
| `404.html` | GitHub Pages error page (`noindex`, root-absolute links) |
| `mobile.html`, `myprojects.html` | Legacy URLs kept as `noindex` redirects; do not add to the sitemap |
| `assets/og/*.png` | 1200×630 social preview image per page |
| `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `site.webmanifest` | Icons |
| `.nojekyll` | Serve files as-is (no Jekyll processing) |

Every indexable page has: unique `<title>` and meta description, `<link rel="canonical">` with the
`https://shamiltp.me/...` URL, Open Graph + Twitter tags, and JSON-LD
(homepage: `WebSite` + `ProfilePage` + `Person`; hub: `CollectionPage` + `BreadcrumbList`;
case studies: `SoftwareSourceCode`/`CreativeWork` + `BreadcrumbList`).

## One-time: Google Search Console

1. Go to <https://search.google.com/search-console> → **Add property** → **Domain** → `shamiltp.me`.
2. Add the `TXT` record Google shows at your DNS provider for `shamiltp.me`, wait for DNS, then **Verify**.
   (A Domain property covers `http`/`https` and all subdomains, e.g. `opspilot.shamiltp.me`.)
3. **Sitemaps** → submit `https://shamiltp.me/sitemap.xml`.
4. **URL inspection** → inspect `https://shamiltp.me/` → **Request indexing**.
5. Optional: Bing Webmaster Tools → **Import from Google Search Console** (reuses the verification and sitemap).

Nothing is verified, submitted or indexed until you do the steps above.

## Monitoring

- **Indexing:** Search Console → *Pages* (look for "Duplicate, Google chose different canonical", "Not found (404)").
- **Core Web Vitals (field data):** Search Console → *Core Web Vitals*, or <https://pagespeed.web.dev/> (the
  "Discover what your real users are experiencing" section). Field data only appears once the site has enough
  Chrome traffic; until then only lab data (Lighthouse) is available.
- **Rich results:** <https://search.google.com/test/rich-results> for the breadcrumb markup;
  <https://validator.schema.org/> for all JSON-LD.
- **Social previews:** LinkedIn Post Inspector (<https://www.linkedin.com/post-inspector/>) to refresh cached previews.

## Adding a new project

1. Copy an existing case study in `myProjectDetails/` (e.g. `rewind.html`) and replace the content. Keep the existing
   classes and avoid inline styles: the six site designs restyle those classes (see "Editing a case study" in README.md).
2. In its `<head>`, update: `<title>`, meta description, canonical, `og:*`/`twitter:*`, and the JSON-LD
   (`name`, `description`, `url`, `codeRepository`, `programmingLanguage`, breadcrumb name/URL).
3. Create `assets/og/<slug>.png` (1200×630) and point `og:image`/`twitter:image` at it.
4. Add the project to `js/content.js` (all ten homepage designs render from it). Then open `/tools/baseline.html`
   on a local server and paste its two outputs into `index.html`: the crawlable markup between the BASELINE
   markers, and the projects `ItemList` in the JSON-LD. Add a tile to `myProjectDetails/mycontributions.html`
   (plus an `ItemList` entry in that page's JSON-LD).
5. Add the URL to `sitemap.xml` and bump `<lastmod>` on pages you changed.

## Recurring checklist

- [ ] Content: keep project descriptions, contact details and the résumé PDF current (the PDF predates OpsPilot, RegretMap and Rewind).
- [ ] Links: check that live-demo links still respond (Railway/Render/Vercel free tiers sleep or expire).
      On 2026-10-17 the N-jin and Osmium Railway demos returned 404.
- [ ] Sitemap: every indexable page listed, no `noindex`/redirect pages listed, `lastmod` updated on real changes.
- [ ] Canonicals: each page's canonical equals its own `https://shamiltp.me/...` URL.
- [ ] Performance: run Lighthouse (mobile) on `/` and one case study after visual changes; keep images in
      `assets/img` as AVIF/WebP with a JPEG fallback and explicit `width`/`height`.
- [ ] Validation: run the W3C validator (<https://validator.w3.org/nu/>) on changed pages.

## Personal identity (who Shamil TP is, for search engines)

One person, one name. The display name is **Shamil TP** everywhere; **Shamil T P** (as printed on certificates) is the only alternate name in the JSON-LD (`alternateName`). The GitHub handle `shamil-tp` is a profile, not a name.

| Page | Purpose | Main query intent |
| --- | --- | --- |
| `/` | Identity hub: who, what, strongest projects, links to everything | "Shamil TP", "Shamil TP portfolio" |
| `/about/` | Background, education (MCA), home server, IoT, technologies with evidence, official profiles | "Shamil TP developer", "Shamil TP education" |
| `/achievements/` | Hackathons, events and courses with the certificates as issued | "Shamil TP achievements", "Shamil TP hackathon" |
| `/myProjectDetails/mycontributions.html` | Projects hub | "Shamil TP projects" |
| `/myProjectDetails/*.html` | One case study per project | "<project> Shamil TP", "RegretMap", "OpsPilot" |

Rules:
- Facts live in `js/content.js`; the About and Achievements pages repeat them in static HTML, generated by `python tools/make_pages.py` from the repo root (edit the facts there too and re-run it if a fact changes, and update the homepage baseline with `tools/baseline.html`).
- Every achievement links to its certificate in `certificates/` (originals) with web copies in `assets/certificates/`. The Layover top 13 and Gateways top 37 placements are self-reported: the certificates are participation certificates, so placements are not marked up as `award` in JSON-LD. When an organiser publishes results, link that page from the achievement and consider adding it.
- `sameAs` lists only GitHub, LinkedIn and X. Add a profile only after confirming it is Shamil's.
- `fast.shamiltp.me` is the OpsPilot API (404 at its root): don't add it to the sitemap or link it as a page.
- Project sites on subdomains (`opspilot.shamiltp.me`, `regret-map.shamiltp.me`) should link back to `https://shamiltp.me/` from their footer or About/credits, where Shamil is genuinely a creator.

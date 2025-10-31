## Repo: Potulky — quick orientation for AI coding agents

This is a small, static website (no frameworks) for "Potulky" — urban adventure games. The site is pure HTML/CSS/JS and optimized for a responsive, mobile-first experience. Use these notes to make focused, safe edits.

Key files
- `index.html` — single-page content and structure (hero, games, how-it-works, team, partners, footer).
- `styles.css` — all styling, CSS variables and responsive breakpoints live here.
- `script.js` — interactive behavior: mobile nav toggle (`#nav-toggle`, `#nav-menu`), smooth scrolling, IntersectionObserver (adds `.animate-in`), active nav highlighting, and injected additional styles.
- `img/` — image assets referenced directly from HTML. Keep filenames unchanged unless you update references.
- `README.md` — project overview and developer-facing run/serve hints.

Important architecture and patterns
- Static-only: no build tool, bundler, or server-side code. Edits should respect that simplicity.
- Localized content: HTML `lang="sk"` and Slovak copy throughout — preserve localization when editing copy unless asked to internationalize.
- Mobile navigation pattern: toggling the `active` class on `#nav-menu` and `#nav-toggle` controls menu state and body scroll lock. When adjusting markup, keep these IDs and class toggles intact.
- Scroll/animation pattern: `script.js` uses an IntersectionObserver to add `.animate-in`. To add section animations, add the target classes (e.g., `.step`, `.game-card`) in HTML and/or include `.animate-in` for immediate animation.
- UI interactions live in `script.js`: hover/enter/leave handlers modify inline styles for transforms. Prefer adding CSS classes and transitions in `styles.css` for maintainability rather than changing inline styles everywhere.

Run / dev workflow (no build step)
- Open `index.html` directly in a browser for quick checks.
- For a local static server (recommended to avoid file:// issues):
  - Python 3: `python -m http.server 8000`
  - Node (npx): `npx serve .`
  Run these from the repository root. On Windows PowerShell, the commands work as-is.

Conventions & code style
- Keep CSS changes in `styles.css`. The project expects a single stylesheet — avoid sprinkling new styles into `script.js` unless you must inject at runtime (there's already an injected `additionalStyles` block).
- JavaScript is vanilla and organized inside a DOMContentLoaded handler. If you add modules, prefer minimal, optional additions and document why a module is required.
- Accessibility: existing patterns include ARIA-like focus management and keyboard handling for the mobile nav. Preserve `navToggle` keyboard behaviors (Enter/Space toggles, Escape closes) when refactoring.

Common tasks and examples
- Change hero headline: edit `<h1 class="hero-title">` in `index.html`.
- Add a new game card: copy an existing `.game-card` block in `#games` and update image in `img/` and text in `.game-content` (see README sample markup).
- Add animation to a new element: ensure the element matches one of the observed selectors (e.g., `.step`, `.game-card`, `.highlight`) or add it to `script.js`'s `animateElements` NodeList.
- Replace an image: put file in `img/` and update the `src` attribute in `index.html`. Keep alt text meaningful.

Integration & external dependencies
- Google Fonts (Poppins) is loaded from fonts.googleapis.com — treat it as an external network dependency.
- There are several external links (YouTube) used as CTAs. Confirm intentionality if changing them.

Safety and risk areas
- Search for inline `alert()` and demo behaviors in `script.js` (game buttons show an alert). Consider replacing with non-blocking UI for production.
- `script.js` injects CSS at runtime — be cautious when moving those styles to `styles.css` to avoid behavioral changes.
- There is no automated test or CI in the repo. Keep edits small, self-contained, and verify in a browser.

What to ask the maintainer before larger changes
- Do you want internationalization (i18n) or will Slovak remain the canonical language?
- Should we introduce a minimal dev server + watch (e.g., `live-server` or simple npm scripts) or keep no-tool approach?

Files to inspect for context when changing behavior
- `index.html` — markup and copy
- `script.js` — interaction logic and patterns to preserve
- `styles.css` — theming, breakpoints, visual rhythm

If you add features
- Keep the site static-first. If you must add tooling (build/test), include a very small `package.json` and document how to run it in `README.md`.

If anything in this guidance is unclear or you want the instructions to be expanded (examples, test snippets, or a suggested small CI), tell me which areas to expand.

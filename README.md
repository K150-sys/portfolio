# Koralla Kedhar — Portfolio

A scroll-driven portfolio for Koralla Kedhar, a B.Tech student at SRM University. The portfolio presents his software engineering focus, projects, technical skills, experience, education, and contact details.

Built with plain HTML, CSS, and JavaScript — no framework, build step, or dependencies.

## Run it

Open `index.html`, or serve the folder locally:

```bash
python -m http.server 4173
```

Then open <http://localhost:4173>.

## Project structure

```
index.html        page structure and no-JavaScript fallback content
styles.css        presentation and responsive layouts
script.js         animation, project, and interaction behavior
content.js        portfolio copy, project information, and links
assets/           portrait, project covers, and 3D scene
references/       visual references used by the original design
GUIDE.md          implementation and editing guide
```

Edit `content.js` to update the profile, projects, skills, experience, education, and contact links. Project covers are in `assets/`.

The site supports small screens and reduced-motion preferences. Scroll animations reverse naturally when scrolling back up, and the hero has a static fallback when JavaScript is unavailable.

# joelraj18.github.io

Portfolio of **Joel Raj Vemuri**, Business Analyst and Data Analyst. Live at <https://joelraj18.github.io>.

Built on the [Forty](https://html5up.net/forty) template by HTML5 UP (CCA 3.0).

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Landing page: pitch and the six project tracks |
| `about.html` | Profile, experience, skills, approach architecture and step-by-step playbooks, certifications |
| `python.html`, `sql.html`, `powerbi.html`, `tableau.html`, `excel.html` | Case studies for each analysis track, in the same card format as the Tools page. Python holds twelve and SQL four, each listed first in a video-style index; Excel holds two and Tableau one; Power BI still shows its coming-next block |
| `tools.html` | Tools and websites: a video-style index, then one card per project with screenshots and Approach, From the Start, Issues & Fixes, Limitations and Future Improvements tabs |
| `404.html` | Not-found page (uses root-absolute paths because GitHub Pages serves it at any URL) |

Custom styles live in `assets/css/portfolio.css` and the tabs on the About and Tools pages in `assets/js/portfolio.js`; case-study screens are in `images/projects/`, Tools page screenshots in `images/tools/`, and the files of projects that have no repository of their own (notebooks, PDF reports, datasets, a database dump) in `projects/<id>/`: link notebooks, CSV and SQL files through GitHub's viewer (`https://github.com/joelraj18/joelraj18.github.io/blob/HEAD/projects/<id>/<file>`), PDFs directly (`projects/<id>/<file>.pdf`, new tab) and Excel files with the `download` attribute; `main.css` and `main.js` are the template files (with small accessibility fixes). The menu, contact and footer blocks are identical on every page, so change them everywhere at once.

Approach tabs can be linked directly: `about.html#approach-kpi`, `#approach-sql`, `#approach-ml`, `#approach-stats`, `#approach-bi`, `#approach-excel`.

## Adding a case study

Case studies use the Tools page card (see [Adding a tool or website](#adding-a-tool-or-website) for the markup rules), with these differences:

- **Where it goes.** One `<article class="case-study project-card">` per project inside `<div class="case-studies track-cards">` in the "Case Studies" section. A page with three or more cards also lists each one in `<ul class="project-index track-index">` above the cards, in the same order (add `is-pairs` for a 2 &times; 2 grid when there are exactly four). Accent colors repeat every six cards. Keep the card ids unchanged once published: other pages link to them, for example `python.html#inn-hotels` from the About page.
- **Collection badge.** The main preview and the index thumbnail carry a badge naming the project's collection: `<span class="thumb-badge is-ai">AI Projects</span>` for projects from the [AI-Projects](https://github.com/joelraj18/AI-Projects) repository, `<span class="thumb-badge is-ba">Business Analytics</span>` for [Business-Analytics-Projects](https://github.com/joelraj18/Business-Analytics-Projects), and `<span class="thumb-badge is-ds">Data Science</span>` for every other project. Tools page cards keep their own status badges instead.
- **Screens.** Four 16:9 screens per project in `images/projects/`: `<id>-1.webp` to `<id>-4.webp` (1440&times;810), `<id>-1-thumb.webp` to `<id>-4-thumb.webp` (640&times;360) and `<id>-1-sm.webp` (640&times;360, for the main preview's `srcset`). Charts are fitted whole onto a white canvas, never cropped. Screen 1 is the card's main result.
- **Approach tab.** A lead paragraph with the problem, then a list with bold lead-ins: `Data.`, `Method.`, `Result.` and `Recommendation.` (end-to-end projects add `Deliverables.`). State every result against a baseline (for classification, include F1 and recall for the class that matters), using the figures exactly as the project's own result files report them.
- **The other tabs only when documented.** From the Start, Issues &amp; Fixes, Limitations and Future Improvements appear only when the project's own documents record that content: leave a tab out rather than invent it. Step dates (`<span class="step-when">`) come from the project's git history; projects without one leave them out.
- **One project on several tracks.** A project can have a card on each track it really uses, written about that track's work: the end-to-end projects have their models on `python.html` and their SQL data layers on `sql.html`, where a `Full Case Study` button links back to the main card (for example `python.html#bonus-prediction`).
- When a page gets its first case study, update both its `<meta name="description">` and `<meta property="og:description">`, and remove its `coming-next` block.

The Approach tab of a case study:

```html
<section class="tab-panel" id="inn-hotels-approach" role="tabpanel" aria-labelledby="tab-inn-hotels-approach" tabindex="0">
	<h4>Approach</h4>
	<p>Which bookings are likely to cancel, and which policies would cut the losses?</p>
	<ul>
		<li><strong>Data.</strong> 36,275 bookings, 32.8% canceled.</li>
		<li><strong>Method.</strong> Logistic regression with a tuned threshold, then pruned decision trees.</li>
		<li><strong>Result.</strong> 82.3% test accuracy against a 67.2% majority-class baseline; F1 0.69 and recall 0.59 on cancellations.</li>
		<li><strong>Recommendation.</strong> Automated re-confirmation emails for high-risk bookings.</li>
	</ul>
</section>
```

## Adding a tool or website

Every card on `tools.html` and the track pages uses this markup. To add a project to `tools.html`:

1. Copy one `<article class="case-study project-card">` inside `<div class="case-studies">` and give it a new `id`.
2. Use that id as the prefix of every tab and panel id in the card (`tab-<id>-approach` controls `<id>-approach`, and so on), so each card's tabs stay independent. A panel can be linked directly, e.g. `tools.html#datamind-issues`.
3. Add a matching entry to the `project-index` list in the Overview section. Index entries and cards take their accent color from their position, so keep both lists in the same order.
4. Screenshots: four 16:9 screens per project in `images/tools/`, each saved three ways as WebP: `<id>-1.webp` (1440×810, full size), `<id>-1-sm.webp` (640×360, the same view scaled down for the main preview's `srcset`) and `<id>-1-thumb.webp` (640×360, a zoomed crop of the screen's key content, so small thumbnails stay readable). The first screen is the card's main preview and, as its thumb, the index thumbnail; the other three sit beside it as thumbs. Keep those captions short (a one-line title and about 90 characters), because the side column is exactly as tall as the main preview. Each gets alt text describing what it shows and a caption explaining why it matters. Selecting a screenshot opens it full size (viewer in `assets/js/portfolio.js`); without JavaScript the link opens the image.
5. State every figure the way the project's own docs measured it, and put the live link first when there is one.

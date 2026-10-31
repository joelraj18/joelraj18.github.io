# joelraj18.github.io

Portfolio of **Joel Raj Vemuri**, Business Analyst and Data Analyst. Live at <https://joelraj18.github.io>.

Built on the [Forty](https://html5up.net/forty) template by HTML5 UP (CCA 3.0).

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Landing page: pitch and the six project tracks |
| `about.html` | Profile, experience, skills, approach architecture and step-by-step playbooks, certifications |
| `python.html`, `sql.html`, `powerbi.html`, `tableau.html`, `excel.html` | Case studies for each analysis track |
| `tools.html` | Tools and websites: a video-style index, then one card per project with screenshots and Approach, From the Start, Issues & Fixes, Limitations and Future Improvements tabs |
| `404.html` | Not-found page (uses root-absolute paths because GitHub Pages serves it at any URL) |

Custom styles live in `assets/css/portfolio.css` and the tabs on the About and Tools pages in `assets/js/portfolio.js`; `main.css` and `main.js` are the template files (with small accessibility fixes). The menu, contact and footer blocks are identical on every page, so change them everywhere at once.

Approach tabs can be linked directly: `about.html#approach-kpi`, `#approach-sql`, `#approach-ml`, `#approach-stats`, `#approach-bi`, `#approach-excel`.

## Adding a case study

On the relevant project page, add a `<div class="case-studies">` directly **above** the `<div class="coming-next">` block (in the "Case Studies" section), with one `<article>` per project, newest first. Remove each project from the coming-next list as it is published, and delete that block once the list is empty:

```html
<div class="case-studies">

	<article class="case-study" id="inn-hotels">
		<span class="image fit"><img src="images/inn-hotels.png" alt="Cancellation rate by lead-time band" /></span>
		<h3>Booking Cancellation Prediction (INN Hotels)</h3>
		<ul class="tags"><li>Python</li><li>Scikit-learn</li><li>Decision Trees</li></ul>
		<dl>
			<dt>Problem</dt>
			<dd>Which bookings are likely to cancel, and why?</dd>
			<dt>Data</dt>
			<dd>36,275 bookings, 32.8% canceled.</dd>
			<dt>Approach</dt>
			<dd>Cleaning, feature engineering, logistic regression vs. pruned decision tree.</dd>
			<dt>Result</dt>
			<dd>83% test accuracy against a 67.2% majority-class baseline; F1 0.xx and recall 0.xx on cancellations.</dd>
			<dt>Recommendation</dt>
			<dd>Automated reminder emails for high-risk bookings.</dd>
		</dl>
		<ul class="actions">
			<li><a href="https://github.com/joelraj18/REPO" target="_blank" rel="noopener" class="button primary">View Code</a></li>
			<!-- For tools and dashboards: -->
			<li><a href="https://LIVE-LINK" target="_blank" rel="noopener" class="button">Live Version</a></li>
		</ul>
	</article>

</div>
```

The image is optional; every result should be stated against a baseline (for classification, include F1 and recall for the class that matters). When a page gets its first case study, update both its `<meta name="description">` and `<meta property="og:description">`.

## Adding a tool or website

`tools.html` uses a fuller card than the case-study template above. To add a project:

1. Copy one `<article class="case-study project-card">` inside `<div class="case-studies">` and give it a new `id`.
2. Use that id as the prefix of every tab and panel id in the card (`tab-<id>-approach` controls `<id>-approach`, and so on), so each card's tabs stay independent. A panel can be linked directly, e.g. `tools.html#datamind-issues`.
3. Add a matching entry to the `project-index` list in the Overview section. Index entries and cards take their accent color from their position, so keep both lists in the same order.
4. Screenshots: four 16:9 screens per project in `images/tools/`, each saved three ways as WebP: `<id>-1.webp` (1440×810, full size), `<id>-1-sm.webp` (640×360, the same view scaled down for the main preview's `srcset`) and `<id>-1-thumb.webp` (640×360, a zoomed crop of the screen's key content, so small thumbnails stay readable). The first screen is the card's main preview and, as its thumb, the index thumbnail; the other three sit beside it as thumbs. Keep those captions short (a one-line title and about 90 characters), because the side column is exactly as tall as the main preview. Each gets alt text describing what it shows and a caption explaining why it matters. Selecting a screenshot opens it full size (viewer in `assets/js/portfolio.js`); without JavaScript the link opens the image.
5. State every figure the way the project's own docs measured it, and put the live link first when there is one.

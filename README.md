# joelraj18.github.io

Portfolio of **Joel Raj Vemuri**, Business Analyst and Data Analyst. Live at <https://joelraj18.github.io>.

Built on the [Forty](https://html5up.net/forty) template by HTML5 UP (CCA 3.0).

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Landing page: pitch, highlights and the six project tracks |
| `about.html` | Profile, experience, skills, approach architecture and step-by-step playbooks, certifications |
| `python.html`, `sql.html`, `powerbi.html`, `tableau.html`, `excel.html` | Case studies for each analysis track |
| `tools.html` | Tools and websites |
| `404.html` | Not-found page (uses root-absolute paths because GitHub Pages serves it at any URL) |

Custom styles live in `assets/css/portfolio.css` and the About page tabs in `assets/js/portfolio.js`; `main.css` and `main.js` are the template files (with small accessibility fixes). The menu, contact and footer blocks are identical on every page, so change them everywhere at once.

Approach tabs can be linked directly: `about.html#approach-kpi`, `#approach-sql`, `#approach-ml`, `#approach-stats`, `#approach-bi`, `#approach-excel`.

## Adding a case study

On the relevant project page, add a `<div class="case-studies">` directly **above** the `<div class="coming-next">` block (in the "Case Studies" section, or "Projects" on `tools.html`), with one `<article>` per project, newest first. Remove each project from the coming-next list as it is published, and delete that block once the list is empty:

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

# joelraj18.github.io

Portfolio of **Joel Raj Vemuri**, Business Analyst and Data Analyst. Live at <https://joelraj18.github.io>.

Built on the [Forty](https://html5up.net/forty) template by HTML5 UP (CCA 3.0).

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Landing page with project tracks and highlights |
| `about.html` | Profile, experience, skills, step-by-step approach (KPIs, ML, SQL, Power BI / Tableau, Excel), certifications |
| `python.html`, `sql.html`, `powerbi.html`, `tableau.html`, `excel.html` | Case studies for each analysis track |
| `tools.html` | Tools and websites |

Custom styles live in `assets/css/portfolio.css` and the About page tabs in `assets/js/portfolio.js`; `main.css` and `main.js` are the template files. Approach tabs can be linked directly, e.g. `about.html#approach-sql`.

## Adding a case study

On the relevant project page, replace the `empty-state` block in the "Case Studies" section with one entry per project:

```html
<div class="card-grid">
	<div>
		<h3>Project title</h3>
		<p><strong>Problem:</strong> ... <strong>Approach:</strong> ... <strong>Result:</strong> ...</p>
		<ul class="tags"><li>Python</li><li>Scikit-learn</li></ul>
		<ul class="actions"><li><a href="https://github.com/joelraj18/..." class="button small">View Code</a></li></ul>
	</div>
</div>
```

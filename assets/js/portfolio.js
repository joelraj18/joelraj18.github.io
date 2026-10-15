/*
	Accessible tabs for the "My Approach" section on the About page.
	Without JavaScript every panel stays visible, so no content is lost.
	A panel can be opened directly from a link, e.g. about.html#approach-sql,
	or from any in-page link to a panel id (such as the architecture cards).
*/

(function() {

	var containers = document.querySelectorAll('[data-tabs]');

	Array.prototype.forEach.call(containers, function(container) {

		var tabs = Array.prototype.slice.call(container.querySelectorAll('[role="tab"]')),
			panels = tabs.map(function(tab) {
				return document.getElementById(tab.getAttribute('aria-controls'));
			});

		function select(index, focus, updateHash) {

			tabs.forEach(function(tab, i) {
				var active = (i === index);

				tab.setAttribute('aria-selected', active ? 'true' : 'false');
				tab.tabIndex = active ? 0 : -1;
				panels[i].hidden = !active;
			});

			if (focus)
				tabs[index].focus();

			if (updateHash && window.history.replaceState)
				window.history.replaceState(null, '', '#' + panels[index].id);

		}

		function indexOfPanel(id) {

			for (var i = 0; i < panels.length; i++)
				if (panels[i].id === id)
					return i;

			return -1;

		}

		tabs.forEach(function(tab, i) {

			tab.addEventListener('click', function() {
				select(i, false, true);
			});

			tab.addEventListener('keydown', function(event) {
				var next = null;

				// Leave browser shortcuts such as Alt+Left (Back) alone.
					if (event.altKey || event.ctrlKey || event.metaKey)
						return;

				if (event.key === 'ArrowRight')
					next = (i + 1) % tabs.length;
				else if (event.key === 'ArrowLeft')
					next = (i - 1 + tabs.length) % tabs.length;
				else if (event.key === 'Home')
					next = 0;
				else if (event.key === 'End')
					next = tabs.length - 1;

				if (next !== null) {
					event.preventDefault();
					select(next, true, true);
				}
			});

		});

		// In-page links to a panel (e.g. the architecture cards) open that tab, even when re-clicked.
			document.addEventListener('click', function(event) {
				var link = event.target.closest ? event.target.closest('a[href^="#"]') : null,
					i = link ? indexOfPanel(link.getAttribute('href').slice(1)) : -1;

				if (i < 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.button > 0)
					return;

				event.preventDefault();
				select(i, false, true);
				tabs[i].focus({ preventScroll: true });
				container.scrollIntoView();
			});

		window.addEventListener('hashchange', function() {
			var i = indexOfPanel(window.location.hash.slice(1));

			if (i > -1) {
				select(i, false, false);
				container.scrollIntoView();
			}
		});

		// Print every panel, then restore the selected one.
			var selectedBeforePrint = 0;

			window.addEventListener('beforeprint', function() {
				selectedBeforePrint = Math.max(0, tabs.findIndex(function(tab) {
					return tab.getAttribute('aria-selected') === 'true';
				}));
				panels.forEach(function(panel) { panel.hidden = false; });
				Array.prototype.forEach.call(document.querySelectorAll('details'), function(details) {
					details.setAttribute('data-was-open', details.open ? '1' : '0');
					details.open = true;
				});
			});

			window.addEventListener('afterprint', function() {
				select(selectedBeforePrint, false, false);
				Array.prototype.forEach.call(document.querySelectorAll('details[data-was-open]'), function(details) {
					details.open = details.getAttribute('data-was-open') === '1';
					details.removeAttribute('data-was-open');
				});
			});

		var initial = indexOfPanel(window.location.hash.slice(1));

		select(initial > -1 ? initial : 0, false, false);
		container.classList.add('is-ready');

		// Deep link: once layout settles, bring the tab bar (not just the panel) into view.
			if (initial > -1)
				window.addEventListener('load', function() {
					container.scrollIntoView();
				});

	});

})();

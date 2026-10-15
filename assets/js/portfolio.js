/*
	Accessible tabs for the "My Approach" section on the About page.
	Without JavaScript every panel stays visible, so no content is lost.
	A panel can be opened directly from a link, e.g. about.html#approach-sql.
*/

(function() {

	var containers = document.querySelectorAll('[data-tabs]');

	Array.prototype.forEach.call(containers, function(container) {

		var tabs = Array.prototype.slice.call(container.querySelectorAll('[role="tab"]')),
			panels = tabs.map(function(tab) {
				return document.getElementById(tab.getAttribute('aria-controls'));
			});

		function select(index, focus) {

			tabs.forEach(function(tab, i) {
				var active = (i === index);

				tab.setAttribute('aria-selected', active ? 'true' : 'false');
				tab.tabIndex = active ? 0 : -1;
				panels[i].hidden = !active;
			});

			if (focus)
				tabs[index].focus();

		}

		function indexFromHash() {

			var id = window.location.hash.slice(1);

			for (var i = 0; i < panels.length; i++)
				if (panels[i].id === id)
					return i;

			return -1;

		}

		tabs.forEach(function(tab, i) {

			tab.addEventListener('click', function() {
				select(i, false);

				if (window.history.replaceState)
					window.history.replaceState(null, '', '#' + panels[i].id);
			});

			tab.addEventListener('keydown', function(event) {
				var next = null;

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
					select(next, true);
				}
			});

		});

		window.addEventListener('hashchange', function() {
			var i = indexFromHash();

			if (i > -1) {
				select(i, false);
				container.scrollIntoView();
			}
		});

		var initial = indexFromHash();

		select(initial > -1 ? initial : 0, false);
		container.classList.add('is-ready');

		// Deep link: once layout settles, bring the tab bar (not just the panel) into view.
			if (initial > -1)
				window.addEventListener('load', function() {
					container.scrollIntoView();
				});

	});

})();

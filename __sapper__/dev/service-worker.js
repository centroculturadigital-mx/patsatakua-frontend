(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1570479056294;

	const files = [
		"service-worker-index.html",
		"favicon.png",
		"global.css",
		"great-success.png",
		"logo-192.png",
		"logo-512.png",
		"manifest.json"
	];

	const shell = [
		
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and bundler-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `service-worker-index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch(err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU3MDQ3OTA1NjI5NDtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCJmYXZpY29uLnBuZ1wiLFxuXHRcImdsb2JhbC5jc3NcIixcblx0XCJncmVhdC1zdWNjZXNzLnBuZ1wiLFxuXHRcImxvZ28tMTkyLnBuZ1wiLFxuXHRcImxvZ28tNTEyLnBuZ1wiLFxuXHRcIm1hbmlmZXN0Lmpzb25cIlxuXTtcbmV4cG9ydCB7IGZpbGVzIGFzIGFzc2V0cyB9OyAvLyBsZWdhY3lcblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gW1xuXHRcbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0dGVybjogL15cXC8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcHJveWVjdG9zXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9wcm95ZWN0b3NcXC8oW15cXC9dKz8pXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9hYm91dFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYmxvZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYmxvZ1xcLyhbXlxcL10rPylcXC8/JC8gfVxuXTsiLCJpbXBvcnQgeyB0aW1lc3RhbXAsIGZpbGVzLCBzaGVsbCwgcm91dGVzIH0gZnJvbSAnQHNhcHBlci9zZXJ2aWNlLXdvcmtlcic7XG5cbmNvbnN0IEFTU0VUUyA9IGBjYWNoZSR7dGltZXN0YW1wfWA7XG5cbi8vIGBzaGVsbGAgaXMgYW4gYXJyYXkgb2YgYWxsIHRoZSBmaWxlcyBnZW5lcmF0ZWQgYnkgdGhlIGJ1bmRsZXIsXG4vLyBgZmlsZXNgIGlzIGFuIGFycmF5IG9mIGV2ZXJ5dGhpbmcgaW4gdGhlIGBzdGF0aWNgIGRpcmVjdG9yeVxuY29uc3QgdG9fY2FjaGUgPSBzaGVsbC5jb25jYXQoZmlsZXMpO1xuY29uc3QgY2FjaGVkID0gbmV3IFNldCh0b19jYWNoZSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGV2ZW50ID0+IHtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlc1xuXHRcdFx0Lm9wZW4oQVNTRVRTKVxuXHRcdFx0LnRoZW4oY2FjaGUgPT4gY2FjaGUuYWRkQWxsKHRvX2NhY2hlKSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0c2VsZi5za2lwV2FpdGluZygpO1xuXHRcdFx0fSlcblx0KTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZXZlbnQgPT4ge1xuXHRldmVudC53YWl0VW50aWwoXG5cdFx0Y2FjaGVzLmtleXMoKS50aGVuKGFzeW5jIGtleXMgPT4ge1xuXHRcdFx0Ly8gZGVsZXRlIG9sZCBjYWNoZXNcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcblx0XHRcdFx0aWYgKGtleSAhPT0gQVNTRVRTKSBhd2FpdCBjYWNoZXMuZGVsZXRlKGtleSk7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGYuY2xpZW50cy5jbGFpbSgpO1xuXHRcdH0pXG5cdCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGV2ZW50ID0+IHtcblx0aWYgKGV2ZW50LnJlcXVlc3QubWV0aG9kICE9PSAnR0VUJyB8fCBldmVudC5yZXF1ZXN0LmhlYWRlcnMuaGFzKCdyYW5nZScpKSByZXR1cm47XG5cblx0Y29uc3QgdXJsID0gbmV3IFVSTChldmVudC5yZXF1ZXN0LnVybCk7XG5cblx0Ly8gZG9uJ3QgdHJ5IHRvIGhhbmRsZSBlLmcuIGRhdGE6IFVSSXNcblx0aWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpKSByZXR1cm47XG5cblx0Ly8gaWdub3JlIGRldiBzZXJ2ZXIgcmVxdWVzdHNcblx0aWYgKHVybC5ob3N0bmFtZSA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJiB1cmwucG9ydCAhPT0gc2VsZi5sb2NhdGlvbi5wb3J0KSByZXR1cm47XG5cblx0Ly8gYWx3YXlzIHNlcnZlIHN0YXRpYyBmaWxlcyBhbmQgYnVuZGxlci1nZW5lcmF0ZWQgYXNzZXRzIGZyb20gY2FjaGVcblx0aWYgKHVybC5ob3N0ID09PSBzZWxmLmxvY2F0aW9uLmhvc3QgJiYgY2FjaGVkLmhhcyh1cmwucGF0aG5hbWUpKSB7XG5cdFx0ZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBmb3IgcGFnZXMsIHlvdSBtaWdodCB3YW50IHRvIHNlcnZlIGEgc2hlbGwgYHNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxgIGZpbGUsXG5cdC8vIHdoaWNoIFNhcHBlciBoYXMgZ2VuZXJhdGVkIGZvciB5b3UuIEl0J3Mgbm90IHJpZ2h0IGZvciBldmVyeVxuXHQvLyBhcHAsIGJ1dCBpZiBpdCdzIHJpZ2h0IGZvciB5b3VycyB0aGVuIHVuY29tbWVudCB0aGlzIHNlY3Rpb25cblx0Lypcblx0aWYgKHVybC5vcmlnaW4gPT09IHNlbGYub3JpZ2luICYmIHJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdHRlcm4udGVzdCh1cmwucGF0aG5hbWUpKSkge1xuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaCgnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCovXG5cblx0aWYgKGV2ZW50LnJlcXVlc3QuY2FjaGUgPT09ICdvbmx5LWlmLWNhY2hlZCcpIHJldHVybjtcblxuXHQvLyBmb3IgZXZlcnl0aGluZyBlbHNlLCB0cnkgdGhlIG5ldHdvcmsgZmlyc3QsIGZhbGxpbmcgYmFjayB0b1xuXHQvLyBjYWNoZSBpZiB0aGUgdXNlciBpcyBvZmZsaW5lLiAoSWYgdGhlIHBhZ2VzIG5ldmVyIGNoYW5nZSwgeW91XG5cdC8vIG1pZ2h0IHByZWZlciBhIGNhY2hlLWZpcnN0IGFwcHJvYWNoIHRvIGEgbmV0d29yay1maXJzdCBvbmUuKVxuXHRldmVudC5yZXNwb25kV2l0aChcblx0XHRjYWNoZXNcblx0XHRcdC5vcGVuKGBvZmZsaW5lJHt0aW1lc3RhbXB9YClcblx0XHRcdC50aGVuKGFzeW5jIGNhY2hlID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGV2ZW50LnJlcXVlc3QpO1xuXHRcdFx0XHRcdGNhY2hlLnB1dChldmVudC5yZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0XHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChldmVudC5yZXF1ZXN0KTtcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcblxuXHRcdFx0XHRcdHRocm93IGVycjtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUFBO0FBQ0EsQ0FBTyxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUM7O0FBRXZDLENBQU8sTUFBTSxLQUFLLEdBQUc7Q0FDckIsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQyxhQUFhO0NBQ2QsQ0FBQyxZQUFZO0NBQ2IsQ0FBQyxtQkFBbUI7Q0FDcEIsQ0FBQyxjQUFjO0NBQ2YsQ0FBQyxjQUFjO0NBQ2YsQ0FBQyxlQUFlO0NBQ2hCLENBQUMsQ0FBQztBQUNGLEFBQ0E7QUFDQSxDQUFPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCO0NBQ0EsQ0FBQyxDQUFDOztDQ2RG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

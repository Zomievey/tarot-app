module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
	  '**/*.{js,html,ttf,ico,png,jpg,css,json}' // Added image, CSS, and JSON files to cache
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
	  /^utm_/,
	  /^fbclid$/
	],
	runtimeCaching: [
	  {
		urlPattern: ({ request }) => request.destination === 'image',
		handler: 'CacheFirst', // Cache images for quicker access
		options: {
		  cacheName: 'images-cache',
		  expiration: {
			maxEntries: 50,
			maxAgeSeconds: 30 * 24 * 60 * 60, // Cache images for 30 days
		  },
		},
	  },
	  {
		urlPattern: ({ request }) => request.destination === 'style' || request.destination === 'script',
		handler: 'StaleWhileRevalidate', // Cache CSS and JS files but check for updates in the background
		options: {
		  cacheName: 'static-resources',
		},
	  },
	  {
		urlPattern: ({ request }) => request.mode === 'navigate',
		handler: 'NetworkFirst', // Use the network first, fallback to cache if offline
		options: {
		  cacheName: 'pages-cache',
		  networkTimeoutSeconds: 3, // Fallback to cache if the network doesn't respond in 3 seconds
		},
	  },
	],
  };
  
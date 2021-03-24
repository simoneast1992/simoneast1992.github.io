module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		screens: {
			'laptop-l': {'max': '1920px'},
			'laptop-m': {'max': '1680px'},
			'laptop-s': {'max': '1440px'},
			'laptop-xs': {'max': '1280px'},
			'ipad-landscape': {'max': '1024px'},
			'tablet-portrait': {'max': '960px'},
			'mobile-l': {'max': '600px'},
			'mobile-m': {'max': '450px'},
			'iphone-x': {'max': '375px'},
			'mobile-s': {'max': '320px'}
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

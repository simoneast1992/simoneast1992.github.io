module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		screens: {
			'desktop': {'max': '1920px'},
			'laptop-l': {'max': '1680px'},
			'laptop-m': {'max': '1440px'},
			'laptop-s': {'max': '1280px'}
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

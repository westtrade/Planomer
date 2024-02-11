/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'blue-ribbon': {
					50: '#ecf0ff',
					100: '#dde3ff',
					200: '#c2ccff',
					300: '#9ca9ff',
					400: '#757bff',
					500: '#605bff',
					600: '#4b36f5',
					700: '#402ad8',
					800: '#3425ae',
					900: '#2e2689',
					950: '#1d1650'
				},

				alabaster: {
					50: '#f7f7f8',
					100: '#eeeef0',
					200: '#d9d9de',
					300: '#b8b9c1',
					400: '#92939e',
					500: '#747583',
					600: '#5e5f6b',
					700: '#4d4e57',
					800: '#42424a',
					900: '#3a3a40',
					950: '#26262b'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;

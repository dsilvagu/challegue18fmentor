/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'bai': ['"Bai Jamjuree"', 'sans-serif']
			}
		},
		colors: {
			'pscyan': 'hsl(171, 66%, 44%)',
			'plblue': 'hsl(233, 100%, 69%)',
			'pdgblue': 'hsl(210, 10%, 33%)',
			'pgblue': 'hsl(201, 11%, 66%)',
		}
	},
	plugins: [],
}

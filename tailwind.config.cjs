/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"heroImage": "url('/img/banner.jpg')",
				"card-gradient": "linear-gradient(0deg, rgba(22,21,21,1) 0%, rgba(255,255,255,0) 50%), url('public/img/game.jpg')",
				"banner-gradient": "radial-gradient(circle, rgba(34,150,92,0.57) 0%, rgba(39,52,78,1) 100%);"
			},
			backgroundColor: {
				"navColor": "#34343459"
			}
		}
	},
	plugins: [

	],
	corePlugins: {
		preflight: false // para n pegar o estilo padrao do tailwind,
	}
}

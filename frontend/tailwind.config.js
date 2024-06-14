/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {

			screens : {
				'2xl-medium': '970px', 	
			},
			colors: {
				'amber-300': "#FABA48",
			},
			fontFamily: {
				inter: ["Inter", "Poppins"],
			},

			backgroundImage: {
				"gradient-img":
					" linear-gradient(0deg, #11131D 51%, rgba(17, 19, 29, 0.00) 70%)",
			},
			backgroundColor: {
				cda: "#11131D",
				'background-input': "rgba(27, 33, 49, 0.50)",
				"background-home": "#E7E5E4",
				"details-home": "#FABA48",
			},
		},
	},
	plugins: [],
};

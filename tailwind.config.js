/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./pages/*/.{js,ts,jsx,tsx,mdx}",
    "./components/*/.{js,ts,jsx,tsx,mdx}",
    "./app/*/.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				sans: ["Nunito",],
			},
			fontSize: {
				xxs: ["0.6rem", "normal"],
				"1xxs": ["0.65rem", "normal"],
				"2xxs": ["0.75rem", "normal"],
				"2xs": ["0.85rem", "normal"],
				"2sm": ["0.95rem", "normal"],
			},
			boxShadow: {
				"4px":
					"0 0px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: {
					DEFAULT: "#009A86",
					light: "#09d9bd",
					lighter: "#0bcdb3",
					dark: "#2B2B2B",
					"dark-light": "#423F3E",
					darker: "#171717",
				},
				white: "#fefefe",
				black: {
					DEFAULT: "black",
					light: "#464A4B",
					lighter: "#66696a",
				},
				delete: "#dc2626",
				view: "#2563eb",
				add: "#059669",
				edit: "#2563eb",
			},
			spacing: {
				"90vh": "90vh",
				"85vh": "85vh",
				"80vh": "80vh",
				"70vh": "70vh",
				"60vh": "60vh",
				"50vh": "50vh",
				"40vh": "40vh",
				"30vh": "30vh",
				"90vw": "90vw",
				"85vw": "85vw",
				"80vw": "80vw",
				"75vw": "75vw",
				"70vw": "70vw",
				"60vw": "60vw",
				"50vw": "50vw",
				"40vw": "40vw",
				"30vw": "30vw",
				148: "45rem",
				136: "39rem",
				124: "33rem",
				112: "28rem",
			},
			keyframes: {
				spinReverse: {
					from: {
						transform: "rotate(0deg)",
					},
					to: {
						transform: "rotate(-360deg)",
					},
				},
				negative: {
					0: {
						transform: "rotate3d(0,1,0.4,0deg)",
					},
					"12.5%": {
						transform: "rotate3d(0,1,0.4,0deg)",
					},
					"25%": {
						transform: "rotate3d(0,1,0.4,15deg)",
					},
					"37.5%": {
						transform: "rotate3d(0,1,0.4,-15deg)",
					},
					"50%": {
						transform: "rotate3d(0,1,0.4,15deg)",
					},
					"62.5%": {
						transform: "rotate3d(0,1,0.4,-15deg)",
					},
					"75%": {
						transform: "rotate3d(0,1,0.4,15deg)",
					},
					"87.5%": {
						transform: "rotate3d(0,1,0.4,0deg)",
					},
					"100%": {
						transform: "rotate3d(0,1,0.4,0deg)",
					},
				},
				positive: {
					0: {
						transform: "rotate3d(-1,0,0.4,0deg)",
					},
					"12.5%": {
						transform: "rotate3d(-1,0,0.4,0deg)",
					},
					"25%": {
						transform: "rotate3d(-1,0,0.4,15deg)",
					},
					"37.5%": {
						transform: "rotate3d(-1,0,0.4,-15deg)",
					},
					"50%": {
						transform: "rotate3d(-1,0,0.4,15deg)",
					},
					"62.5%": {
						transform: "rotate3d(-1,0,0.4,-15deg)",
					},
					"75%": {
						transform: "rotate3d(-1,0,0.4,15deg)",
					},
					"87.5%": {
						transform: "rotate3d(-1,0,0.4,0deg)",
					},
					"100%": {
						transform: "rotate3d(-1,0,0.4,0deg)",
					},
				},
				zoomInOut: {
					"0, 100%": {
						transform: "scale(1)",
					},
					"50%": {
						transform: "scale(0.9)",
					},
				},
			},
			animation: {
				"spin-reverse": "spinReverse 1s linear infinite",
				negative: "negative 1s linear infinite",
				positive: "positive 1s linear infinite",
				"zoom-in-out": "zoomInOut 1s linear infinite",
			},
		},
  },
  plugins: [],
}
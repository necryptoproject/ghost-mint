/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#09002F',
				yellow: {
					DEFAULT: '#FBFF2E'
				},
				red: {
					DEFAULT: '#E8421E'
				},
				green: {
					DEFAULT: '#5AE344'
				},
				blue: {
					DEFAULT: '#3A81EA',
					dark: '#160E3A'
				}
			},
			fontFamily: {
				arial: ['Arial']
			},
			height: {
				screen: '100dvh'
			},
			width: {
				screen: '100dvw'
			},
			boxShadow: {
				btn: '0px 0px 8px 0px #FBFF2E'
			}
		},
		container: {
			center: true,
			screens: {
				xl: '1276px'
			},
			padding: {
				DEFAULT: '1rem',
				xl: '0'
			}
		}
	},
	plugins: []
};

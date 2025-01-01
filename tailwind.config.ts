import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			black: {
			  DEFAULT: "#000",
			  100: "#000319",
			  200: "rgba(17, 25, 40, 0.75)",
			  300: "rgba(255, 255, 255, 0.125)",
			},
			white: {
			  DEFAULT: "#FFF",
			  100: "#BEC1DD",
			  200: "#C1C2D3",
			},
			blue: {
			  "100": "#E4ECFF",
			},
			purple: "#CBACF9",
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
			  DEFAULT: "hsl(var(--primary))",
			  foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
			  DEFAULT: "hsl(var(--secondary))",
			  foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
			  DEFAULT: "hsl(var(--destructive))",
			  foreground: "hsl(var(--destructive-foreground))",
			},
			muted: {
			  DEFAULT: "hsl(var(--muted))",
			  foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
			  DEFAULT: "hsl(var(--accent))",
			  foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
			  DEFAULT: "hsl(var(--popover))",
			  foreground: "hsl(var(--popover-foreground))",
			},
			card: {
			  DEFAULT: "hsl(var(--card))",
			  foreground: "hsl(var(--card-foreground))",
			},
		  },
  		fontFamily: {
  			sans: [
  				"SpaceMono.ttf",
  				"Roboto",
  				"sans-serif"
  			]
  		},
  		animation: {
			spotlight: "spotlight 2s ease .75s 1 forwards",
		  },
		  keyframes: {
			spotlight: {
			  "0%": {
				opacity: "0",
				transform: "translate(-72%, -62%) scale(0.5)",
			  },
			  "100%": {
				opacity: "1",
				transform: "translate(-50%,-40%) scale(1)",
			  },
			},
		  },
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

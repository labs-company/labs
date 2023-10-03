import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
				marquee: 'marquee var(--duration) linear infinite',
				meteor: 'meteor 5s linear infinite',
				'text-gradient': 'text-gradient 1.5s linear infinite',
				spin: 'spin calc(var(--speed) * 2) linear infinite',
				slide: 'slide var(--speed) ease-in-out linear infinite'
			},
			keyframes: {
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-50% - var(--gap)/2))' }
				},
				'text-gradient': {
					to: {
						backgroundPosition: '200% center'
					}
				},
				spin: {
					'0%': {
						rotate: '0deg'
					},
					'15%, 35%': {
						rotate: '90deg'
					},
					'65%, 85%': {
						rotate: '270deg'
					},
					'100%': {
						rotate: '360deg'
					}
				},
				slide: {
					to: {
						transform: 'translate(calc(100cqw - 100%), 0)'
					}
				},
				meteor: {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: "1" },
					'70%': { opacity: "1" },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: "0"
					}
				}
			},
      fontFamily: {
        inter: ["Inter"]
      }
    },
  },
  plugins: [],
};
export default config;

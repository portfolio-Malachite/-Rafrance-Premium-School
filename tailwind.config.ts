import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#0B5D3B",
        mint: "#3FAE5A",
        cream: "#F8F8F3",
        gold: "#D9B44A"
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"]
      },
      boxShadow: {
        premium: "0 10px 40px rgba(11, 93, 59, 0.18)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(63,174,90,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(217,180,74,0.12), transparent 36%)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        charcoal: "#11100f",
        panel: "#191512",
        rust: "#8f2f1d",
        ember: "#d65a24",
        copper: "#b66a32",
        amber: "#d29b3a",
        cream: "#e8dfcf",
        muted: "#9a8f82",
        signal: "#5ca8d8"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "terminal-grid": "linear-gradient(rgba(214, 90, 36, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(214, 90, 36, 0.08) 1px, transparent 1px)",
        "radial-ember": "radial-gradient(circle at 70% 20%, rgba(214, 90, 36, 0.22), transparent 35%), radial-gradient(circle at 20% 80%, rgba(182, 106, 50, 0.16), transparent 30%)"
      },
      boxShadow: {
        terminal: "0 0 0 1px rgba(182,106,50,.25), 0 24px 80px rgba(0,0,0,.45)",
        glow: "0 0 28px rgba(214,90,36,.22)"
      }
    }
  },
  plugins: [typography]
};

export default config;

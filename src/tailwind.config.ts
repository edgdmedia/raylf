import type { Config } from "tailwindcss";

const designTokens = {
  colors: {
    // Brand colours
    violet: {
      50: "#f7f3fc",
      100: "#ece4f7",
      300: "#b79ae0",
      500: "#6f26cf",
      600: "#5002b9",
      700: "#4403a7",
      800: "#3f028e",
      900: "#2e0258",
      950: "#240145",
    },
    magenta: "rgba(180,73,220,.4)",
    plum: "#6a0da4",
    gold: {
      100: "#fbf1d8",
      200: "#fff3a8",
      300: "#f0d785",
      400: "#f2b84b",
      500: "#dfa533",
      600: "#d29b29",
      700: "#a8761a",
    },
    paleGold: "#fff3a8",
    ink: {
      900: "#16121d",
      700: "#3b3645",
      500: "#6d6878",
      300: "#bdb8c6",
      200: "#dedae4",
      100: "#efedf2",
    },
    paper: "#faf8f5",
    white: "#ffffff",
    // Theme tokens
    t: {
      bg: "#240145",
      fg: "#ffffff",
      muted: "rgba(255,255,255,.78)",
      line: "rgba(255,243,168,.18)",
      gold: "#f2b84b",
      sec: "radial-gradient(90% 60% at 80% 35%,#6a0da4 0%,#47017e 40%,#240145)",
      card: "#2e0258",
      chip: "rgba(255,255,255,.06)",
      shadow: "0 30px 80px rgba(10,0,25,.6)",
    },
    // Gradients
    gradient: {
      gold: "linear-gradient(100deg,#c48a1f 0%,#f2b84b 48%,#d29b29 100%)",
      royal: "radial-gradient(110% 70% at 50% 70%,#b449dc 0%,#6f26cf 28%,#5002b9 55%,#3f028e 100%)",
      violetSky: "linear-gradient(180deg,#4403a7 0%,#5002b9 40%,#6f26cf 75%,#b449dc)",
      midnight: "radial-gradient(90% 60% at 80% 35%,#6a0da4 0%,#47017e 40%,#240145)",
      overlayScrim: "linear-gradient(180deg,rgba(36,1,69,0) 0%,rgba(36,1,69,.88) 100%)",
    },
    // Always-dark tokens
    alwaysDark: {
      nav: "rgba(36,1,69,.88)",
      pillBorder: "rgba(255,243,168,.35)",
    },
  },
  fontFamily: {
    display: ["Poppins", "system-ui", "sans-serif"],
    body: ["Manrope", "system-ui", "sans-serif"],
  },
  fontSize: {
    xs: ["12px", { letterSpacing: "0.18em", textTransform: "uppercase" }],
    sm: ["13px", { letterSpacing: "0.14em", textTransform: "uppercase" }],
    md: ["14px", { letterSpacing: "0.01em" }],
    lg: ["16px", { letterSpacing: "0.01em" }],
    xl: ["20px", { letterSpacing: "-0.02em" }],
    "2xl": ["28px", { letterSpacing: "-0.01em" }],
    "3xl": ["32px", { letterSpacing: "-0.02em" }],
    "4xl": ["40px", { letterSpacing: "-0.03em" }],
    "5xl": ["64px", { letterSpacing: "-0.04em" }],
    "6xl": ["72px", { letterSpacing: "-0.04em" }],
    "7xl": ["88px", { letterSpacing: "-0.04em" }],
    "8xl": ["128px", { letterSpacing: "-0.04em" }],
  },
  lineHeight: {
    tight: "1.1",
    snug: "1.25",
    body: "1.65",
    loose: "1.7",
  },
  letterSpacing: {
    tight: "-0.04em",
    normal: "0",
    eyebrow: "0.18em",
    heading: "-0.03em",
    display: "-0.04em",
  },
  borderRadius: {
    pill: "999px",
    lg: "var(--radius-lg, 24px)",
    md: "var(--radius-md, 16px)",
    sm: "var(--radius-sm, 8px)",
  },
  transitionDuration: {
    base: "var(--dur-base, .2s)",
    slow: "var(--dur-slow, .35s)",
    fast: "var(--dur-fast, .2s)",
  },
  animation: {
    marquee: "raylf-marquee 40s linear infinite",
    pulse: "raylf-pulse 6s ease-in-out infinite",
  },
};

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: designTokens,
  },
  plugins: [],
} satisfies Config;
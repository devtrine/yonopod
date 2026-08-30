/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#2563eb',
        'cobalt-deep': '#1d4ed8',
        'electric-cyan': '#06b6d4',
        'ice-cyan': '#e0f2fe',
        'canvas-light': '#f8fafc',
        'surface-white': '#ffffff',
        'command-dark': '#0a0e1a',
        'text-primary': '#0f172a',
        'text-secondary': '#64748b',
        'text-muted': '#94a3b8',
        'tier-hot': '#2563eb',
        'tier-warm': '#06b6d4',
        'tier-cold': '#6366f1',
      },
      fontFamily: {
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        card: '0px',
        badge: '0px',
      },
      maxWidth: {
        'main': '1586px',
        'technical': '1280px',
      },
    },
  },
  plugins: [],
};

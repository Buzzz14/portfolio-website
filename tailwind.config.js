/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "colorPriamry": "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-dark": "var(--color-primary-dark)",

        "color-yellow": "var(--color-yellow)",
        "yellow-light": "var(--color-yellow-light)",
        "yellow-dark": "var(--color-yellow-dark)",


        "gray-dark": "var(--color-gray-dark)",
        "gray-light": "var(--color-gray-light)",

        "bg-dark": "var(--color-bg-dark)",
        "bg-light": "var(--color-bg-light)",
        "text-dark": "var(--color-text-dark)",
        "text-light": "var(--color-text-light)",

        "toast-success": "var(--color-toast-success)",
        "toast-error": "var(--color-toast-error)",

        "hover-dark": "var(--color-hover-dark)",
        "hover-light": "var(--color-hover-light)",
      },
    },
  },
  plugins: [],
};

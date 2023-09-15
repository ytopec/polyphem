/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,jsx}"
    ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-*-*/,
      pattern: /p-*/,
      pattern: /m?-*/,
    }
  ]
}


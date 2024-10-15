/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js, jsx, ts, tsx",
  ],
  theme:{
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary:'#10B981',
        background: '#F3F4F6',
        text: '#1F2937',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


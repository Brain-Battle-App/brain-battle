/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        clashregular: ['ClashDisplayRegular', 'sans-serif'],
        clashmedium: ['ClashDisplayMedium', 'sans-serif'],
        clashlight: ['ClashDisplayLight', 'sans-serif'],
        clashextralight: ['ClashDisplayExtralight', 'sans-serif'],
        clashbold: ['ClashDisplayBold', 'sans-serif'],
        clashsemibold: ['ClashDisplaySemibold', 'sans-serif'],
        poppinsregular: ['PoppinsRegular', 'sans-serif'],
        poppinsmedium: ['PoppinsMedium', 'sans-serif'],
        poppinslight: ['PoppinsLight', 'sans-serif'],
        poppinsextralight: ['PoppinsExtralight', 'sans-serif'],
        poppinsbold: ['PoppinsBold', 'sans-serif'],
        poppinssemibold: ['PoppinsSemibold', 'sans-serif'],
      },
      colors: {
        primary: '#33A6FF',
        secondary: '#FDB914',
        alert: '#FB493D',
        background: {
          DEFAULT: '#F3F4F6',
          dark: '#1D1D1D',
          elevated: {
            DEFAULT: '#FFFFFF',
            dark: '#000000',
          },
        },
        text: {
          DEFAULT: '#111827',
          dark: '#F9FAFB',
          secondary: {
            DEFAULT: '#4B5563',
            dark: '#9CA3AF',
          },
        },
        border: {
          DEFAULT: '#E5E7EB',
          dark: '#374151',
        },
        input: {
          DEFAULT: '#FFFFFF',
          dark: '#374151',
        },
      },
      borderRadius: {
        '3xl': '2rem', // 32px
        '4xl': '2.5rem', // 40px
        '5xl': '3rem', // 48px
      },
    },
  },
  plugins: [],
};

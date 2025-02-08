/** @type {import('tailwindcss').Config} **/
export default {
    theme: {
      extend: {
        keyframes: {
          scrollRight: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        animation: {
          'scroll-right': 'scrollRight 20s linear infinite',
        },
      },
    },
  };
  
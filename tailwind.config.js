/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        pink: 'hsl(322, 100%, 66%)',
        'pink-hover': 'hsl(322, 100%, 80%)',
        'very-pale-cyan': 'hsl(193, 100%, 96%)',
        'very-dark-cyan': 'hsl(192, 100%, 9%)',
        'grayish-blue': 'hsl(208, 11%, 55%)'
      }
    },
    fontSize: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.75rem',
      h4: '1.5rem',
      h5: '1.25rem',
      body: '1.125rem'
    },
    lineHeight: {
      h1: '3.75rem',
      h2: '3.75rem',
      h3: '2.625rem',
      h4: '2.25rem',
      h5: '1.875rem',
      body: '1.6875rem'
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Poppins', 'sans-serif']
    },
    borderRadius: {
      sm: '12px',
      md: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '40px',
      full: '50%'
    },
    boxShadow: {
      sm: '0px 2px 7px rgba(0, 0, 0, 0.0954201)',
      lg: '0px 6px 13px rgba(0, 37, 46, 0.223053)',
      purple: '2px 3px 6px 1px rgba(255, 82, 193, 0.166185)',
      card: '0px 0px 14px rgba(0, 0, 0, 0.07)'
    },
    backgroundImage: {
      'hero-mobile': 'url("/bg-hero-mobile.svg")',
      'hero-desktop': 'url("/bg-hero-desktop.svg")'
    },
    screens: {
      lg: '1280px'
    }
  },
  plugins: []
}

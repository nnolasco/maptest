const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  //purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  prefix: 'pge-tw-',
  //important: true,
  theme: {
    borderWidth: {
        default: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
    },
    borderRadius: {
        none: '0',
        sm: '0.125rem',
        default: '0.25rem',
        lg: '0.5rem',
        button: '28px',
        full: '9999px',
    },
    boxShadow: {
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 2px 9px 0 rgba(0,0,0,0.10)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
    },
    colors: {
        transparent: 'transparent',
        black: '#333333',
        //gray: colors.coolGray,
        //blue: colors.lightBlue,
        blue: {
            200: "#B8D7ED",
            500: "#0089C4",
            900: "#005179"
        },
        gray: {
            200 : "#F1F1F1",
            300: "#E2E2E2",
            500: "#CCCCCC",
            900: "#949494"
        },
        green: {
            500: "#333333",
            900: "#749D25"
        },
        lilac: "#8170A4",
        red: "#949494",
        orange: "#FF6633",
        pink: colors.fuchsia,
        yellow: {
            500: "#F8C400",
            900: "#FBBB36"
        },
        white: '#FFF',
    },
    container: {
    center: true
    },
    fontFamily: {
        sans: ['DIN-Medium', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: [,
            '"Courier New"',
            'monospace',
        ]
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1.25rem',
        base: '1rem',
        lg: '2rem',
        xl: '3rem',
        'mega': '4rem',
    },
    fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
    },
    letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
    },
    lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2'
    },
    extend: {
    spacing: {
        '128': '32rem',
        '144': '36rem',
    },
    borderRadius: {
        '4xl': '2rem',
    }
    },
    spacing: {
        px: '1px',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem'
    }
  },
  variants: {
    extend: {
        //borderColor: ['focus-visible'],
        //opacity: ['disabled'],
        opacity: ['responsive', 'hover', 'focus', 'disabled']
      }
  },
  plugins: [
    //require('@tailwindcss/forms'),
    //require('tailwindcss-children'),
    require('autoprefixer'),
    function({ addVariant, e }) {
        addVariant('disabled', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(`disabled${separator}${className}`)}:disabled`
          })
        })
      }
  ],
}

const defaultTheme = require('tailwindcss/defaultTheme');
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontFamily: {
        body: '"Poppins", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        heading:
          '"Poppins", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        sans: '"Poppins", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      // colors: {
      //   primary: withOpacity('--primary'),
      //   'primary-focus': withOpacity('--primary-focus'),
      //   'primary-content': withOpacity('--primary-content'),
      //   secondary: withOpacity('--secondary'),
      //   'secondary-focus': withOpacity('--secondary-focus'),
      //   'secondary-content': withOpacity('--secondary-content'),
      //   accent: withOpacity('--accent'),
      //   'accent-focus': withOpacity('--accent-focus'),
      //   'accent-content': withOpacity('--accent-content'),
      //   neutral: withOpacity('--neutral'),
      //   'neutral-focus': withOpacity('--neutral-focus'),
      //   'neutral-content': withOpacity('--neutral-content'),
      //   'base-100': withOpacity('--base-100'),
      //   'base-200': withOpacity('--base-200'),
      //   'base-300': withOpacity('--base-300'),
      //   'base-content': withOpacity('--base-content'),
      //   info: withOpacity('--info'),
      //   'info-content': withOpacity('--info-content'),
      //   success: withOpacity('--success'),
      //   'success-content': withOpacity('--success-content'),
      //   warning: withOpacity('--warning'),
      //   'warning-content': withOpacity('--warning-content'),
      //   error: withOpacity('--error'),
      //   'error-content': withOpacity('--error-content'),
      // },
      // textColor: {
      //   skin: {
      //     base: withOpacity('--color-text-base'),
      //     muted: withOpacity('--color-text-muted'),
      //     inverted: withOpacity('--color-text-inverted'),
      //   },
      // },
      // backgroundColor: {
      //   skin: {
      //     fill: withOpacity('--color-fill'),
      //     'button-accent': withOpacity('--color-button-accent'),
      //     'button-accent-hover': withOpacity('--color-button-accent-hover'),
      //     'button-muted': withOpacity('--color-button-muted'),
      //   },
      // },
      // gradientColorStops: {
      //   skin: {
      //     hue: withOpacity('--color-fill'),
      //   },
      // },
    },
  },
  plugins: [require('rippleui'), require('tailwind-scrollbar')],
};

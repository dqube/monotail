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
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
    },
  },
  plugins: [require('rippleui'), require('tailwind-scrollbar')],
};

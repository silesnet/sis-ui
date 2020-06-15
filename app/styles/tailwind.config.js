const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@frontile/forms/tailwind'),
    require('@frontile/buttons/tailwind'),
    require('@frontile/overlays/tailwind'),
    require('@frontile/notifications/tailwind'),
  ],
};

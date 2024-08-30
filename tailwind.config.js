const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#6B3C9B',
          hover: '#844DBA',
          active: '#5B2F87',
          ring: '#B98EDB',
          text: '#FFFFFF'
        },
        secondary: {
          default: '#FFFFFF',
          hover: '#E7E7E7',
          active: '#BDBDBD',
          ring: '#9E9E9E',
          text: '#1B1C1E'
        },
        cancel: {
          default: 'transparent',
          hover: 'transparent',
          active: 'transparent',
          ring: '#000000',
          text: '#0F75B8',
        },
        input: {
          default: '#EEEFF0',
          hover: '#DCDEE0',
          active: 'white',
          ring: '#B0B3B8'
        }
      }
    },
  },
  plugins: [],
};

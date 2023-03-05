import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      keyframes: {
        glitch: {
          '0%': {
            transform: 'translate(0, 0) skew(0)',
            filter: 'none',
          },
          '5%': {
            transform: 'translate(-3%, -3%) skew(1deg)',
            filter: 'hue-rotate(-20deg) saturate(1.5)',
          },
          '10%': {
            transform: 'translate(3%, 3%) skew(1deg)',
            filter: 'hue-rotate(20deg) saturate(1.5)',
          },
          '15%': {
            transform: 'translate(-3%, 3%) skew(-1deg)',
            filter: 'hue-rotate(-20deg) saturate(1.5)',
          },
          '20%': {
            transform: 'translate(3%, -3%) skew(-1deg)',
            filter: 'hue-rotate(20deg) saturate(1.5)',
          },
          '100%': {
            transform: 'translate(0, 0) skew(0)',
            filter: 'none',
          },
        },
      },
      animation: {
        glitch: 'glitch 1s infinite',
      },
    },
  },
} as Options;

import {Options} from "$fresh/plugins/twind.ts";

export default {
    selfURL: import.meta.url,
    plugins: {
        // ...
    },
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
                blink: {
                    '0%': {
                        transform: 'opacity 1',
                        transition: 'opacity 0.2s ease-in-out',
                    },
                    '50%': {
                        transform: 'opacity 0',
                        transition: 'opacity 0.2s ease-in-out',
                    },
                    '100%': {
                        transform: 'opacity 1',
                        transition: 'opacity 0.2s ease-in-out',
                    }
                }
            },
            animation: {
                glitch: 'glitch 1s infinite',
                cursor: 'blink 1s step-end infinite ease-in-out',
            },
        },
    },
} as Options;

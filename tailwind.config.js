/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html'
    ],
    theme: {
        colors: {
            primary: '#231f20',
            secondary: '#ef662f',
            orange: '#f79e31',
            gray: '#f4f4f3',
            white: '#fff'
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            serif: ['Urbanist', 'sans-serif'],
        },
        maxWidth: {
            container: '1264px',
            lg: '1434px',
        },
        screens: {
            'sm': '0px',
            'md': '768px',
            'lg': '992px',
            'xl': '1025px'
        },
        extend: {
            fontSize: {
                sm: ['16px', { lineHeight: '1rem', fontWeight: '800' }],
                xs: ['14px', { lineHeight: '1rem', fontWeight: '800' }]
            },
            scale: {
                '7': '.7',
            }
        },
    },
    plugins: [],
}
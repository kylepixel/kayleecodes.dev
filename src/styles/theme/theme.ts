import { Theme } from '@emotion/react';

declare module '@emotion/react' {
    interface Theme {
        colors: {
            background: string;
            primary: string;
            secondary: string;
            text: {
                body: string;
                heading: string;
            };
        };
        typefaces: {
            body: string;
            heading: string;
        };
    }
}

const defaultTheme: Theme = {
    colors: {
        background: '#FFF',
        primary: '#647ED6',
        secondary: '#F1523F',
        text: {
            body: '#676767',
            heading: '#1A1A1A',
        },
    },
    typefaces: {
        heading: '"Nunito", sans-serif',
        body: '"Nunito", sans-serif',
    },
};

export default defaultTheme;

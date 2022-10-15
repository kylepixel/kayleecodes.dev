import { CSSObject, Theme } from '@emotion/react';
//import emotionReset from 'emotion-reset';

const globalStyles = [
    //emotionReset,
    (theme: Theme): CSSObject => ({
        'html, body': {
            fontFamily: theme.typefaces.body,
            color: theme.colors.text.body,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            background: theme.colors.background,
        },
        'a:focus': {
            outline: `${theme.colors.primary} auto 5px`,
        },
    }),
];

export default globalStyles;

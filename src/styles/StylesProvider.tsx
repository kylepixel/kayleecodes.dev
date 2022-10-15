import React from 'react';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import GlobalStyles from './global/GlobalStyles';
import ThemeProvider from './theme/ThemeProvider';

interface StylesProviderProps {
    children?: React.ReactNode;
}

const StylesProvider: React.FC<StylesProviderProps> = ({ children }) => (
    <ThemeProvider>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default StylesProvider;

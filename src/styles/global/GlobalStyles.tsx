import React from 'react';
import { Global } from '@emotion/react';
import globalStyles from './global.styles';

const GlobalStyles: React.FC = () => <Global styles={globalStyles} />;

export default GlobalStyles;

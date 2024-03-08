import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { IntlProvider } from 'react-intl';
import translations from './common/translations';

ReactDOM.createRoot(document.getElementById('root')).render(
  <IntlProvider messages={translations['en']} defaultLocale="en">
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </IntlProvider>,
);

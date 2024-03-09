import React, { useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IntlProvider } from 'react-intl';

import MenuBar from './views/MenuBar';
import Home from './views/Home';
import Advantages from './views/Advantages';
import Coaches from './views/Coaches';
import FAQ from './views/FAQ';
import Footer from './views/Footer';
import Pricing from './views/Pricing';
import getLPTheme from './getLPTheme';
import gymImage from '../src/common/assets/images/gym.jpg';
import translations from './common/translations';
import { useMutation, useQuery } from '@tanstack/react-query';

export default function App() {
  const LPtheme = createTheme(getLPTheme('dark'));
  const currentLanguageLocalStorage = localStorage.getItem('locale') ?? 'en';

  const [currentLanguage, setCurrentLanguage] = useState(
    currentLanguageLocalStorage,
  );

  const { refetch } = useQuery({
    queryKey: ['locale'],
    queryFn: () => currentLanguage,
    onSuccess: () => localStorage.setItem('locale', currentLanguage),
  });
  const { mutate } = useMutation({
    mutationKey: ['locale'],
    mutationFn: () =>
      setCurrentLanguage(currentLanguage === 'en' ? 'ar' : 'en'),
    onSuccess: () => refetch(),
  });
  return (
    <IntlProvider
      locale={currentLanguageLocalStorage}
      messages={translations[currentLanguageLocalStorage]}
      defaultLocale="en"
    >
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <div style={{ position: 'relative' }}>
          <MenuBar mutate={mutate} currentLanguage={currentLanguage} />
          <Home />
          <img
            src={gymImage}
            alt="Gym Image"
            style={{
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0.1,
              pointerEvents: 'none',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <Box sx={{ bgcolor: 'background.default' }}>
          <Advantages />
          <Divider />
          <Coaches />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
          <Divider />
          <Footer />
        </Box>
      </ThemeProvider>
    </IntlProvider>
  );
}

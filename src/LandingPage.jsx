import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import AppAppBar from './AppAppBar';
import Hero from './Hero';
import Highlights from './Highlights';
import Features from './Features';
import FAQ from './FAQ';
import Footer from './Footer';
import getLPTheme from './getLPTheme';
import gymImage from '../src/common/assets/images/gym.jpg'
import Pricing from './Pricing';
import { Fab } from '@mui/material';

const defaultTheme = createTheme({});



export default function LandingPage() {
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme('dark'));
  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <div style={{ position: 'relative' }}>
        {/* Toolbar */}
      <AppAppBar  />
      {/* Home */}
      <Hero />

      <img
        src={gymImage}
        alt='Gym Image'
        style={{
          borderBottomLeftRadius:'20px',
          borderBottomRightRadius:'20px',
          width:'100%',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.1,
          pointerEvents: 'none',
          height:'100%',
          objectFit:'cover',
        }}
      />
       </div>
      <Box sx={{ bgcolor: 'background.default' }}>

     
        {/* Advantages */}
        <Highlights />
        <Divider />
        {/* Coaches */}
        <Features />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />

      </Box>
    </ThemeProvider>
  );
}
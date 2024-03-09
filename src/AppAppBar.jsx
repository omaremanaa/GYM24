import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import gymLogo from './common/assets/icons/GYM24.svg';
import { Button, Drawer } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const logoStyle = {
  marginLeft: '2%',
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

const pages = ['Advantages', 'Trainers', 'Pricing', 'FAQ', 'Connect'];
console.log(document.getElementsByTagName('Home'), 'Home');
function AppAppBar({ mutate, currentLanguage }) {
  const [open, setOpen] = useState(false);
  const [isTopPage, setIsTopPage] = useState(true);

  const scrollToSection = sectionId => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setIsTopPage(true);
    } else if (window.scrollY > 70) {
      return setIsTopPage(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);
  return (
    <div>
      <AppBar
        dir="ltr"
        sx={{
          boxShadow: 0,
          bgcolor: isTopPage ? 'transparent' : 'black',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              borderRadius: '20px',
              bgcolor: 'transparent',
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={gymLogo}
                style={logoStyle}
                alt="logo of sitemark"
                onClick={() => {
                  const sectionElement = document.getElementById('Home');

                  if (sectionElement) {
                    sectionElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-between',
                marginRight: '10%',
              }}
            >
              {pages.map(page => (
                <MenuItem
                  key={page}
                  onClick={() => scrollToSection(page)}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    <FormattedMessage id={page} />
                  </Typography>
                </MenuItem>
              ))}
              <div>
                <Button
                  onClick={() => {
                    currentLanguage === 'en'
                      ? localStorage.setItem('locale', 'ar')
                      : localStorage.setItem('locale', 'en');
                    mutate();
                  }}
                  style={{ color: 'white' }}
                >
                  {currentLanguage === 'ar' ? (
                    <Typography>E</Typography>
                  ) : (
                    <Typography>ع</Typography>
                  )}
                </Button>
              </div>
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', sm: 'flex', md: 'none' },
                justifyContent: { sm: 'space-between' },
              }}
            >
              <Button
                variant="text"
                aria-label="menu"
                onClick={() => setOpen(true)}
                sx={{
                  minWidth: '30px',
                  p: '4px',
                  color: 'white',
                }}
              >
                <MenuIcon />
              </Button>

              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  {pages.map(page => (
                    <MenuItem key={page} onClick={() => scrollToSection(page)}>
                      <FormattedMessage id={page} />
                    </MenuItem>
                  ))}
                </Box>
              </Drawer>
              <div>
                <Button
                  onClick={() => {
                    currentLanguage === 'en'
                      ? localStorage.setItem('locale', 'ar')
                      : localStorage.setItem('locale', 'en');
                    mutate();
                  }}
                  style={{ color: 'white' }}
                >
                  {currentLanguage === 'ar' ? (
                    <Typography>E</Typography>
                  ) : (
                    <Typography>ع</Typography>
                  )}
                </Button>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
AppAppBar.propTypes = {
  mutate: PropTypes.func.isRequired,
  currentLanguage: PropTypes.string.isRequired,
};

export default AppAppBar;

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';


import gymLogo from './common/assets/icons/GYM24.svg?react'
import { Button, Drawer } from '@mui/material';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

const pages = ['Advantages','Coaches', 'Pricing','FAQ', 'Connect']
function AppAppBar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          // backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={{
              flexShrink: 0,
              display: 'flex',
              alignItems:'center',
              justifyContent: 'end',
              borderRadius: '20px',
              bgcolor:'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:'0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
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
                src={
                  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                }
                style={logoStyle}
                alt="logo of sitemark"
                onClick={()=>{ const sectionElement = document.getElementById('Home');

                if (sectionElement) {
                  sectionElement.scrollIntoView({ behavior: 'smooth' });
                }}}
              />
            </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent:'space-between' }}>
              {pages.map(page=>
                <MenuItem
                  onClick={() => scrollToSection(page)}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    {page}
                  </Typography>
                </MenuItem>
                )}
              </Box>
              <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={()=>setOpen(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  {pages.map(page=>
                <MenuItem
                  onClick={() => scrollToSection(page)}
                >
                  {page}
                </MenuItem>
                )}
                </Box>
              </Drawer>
            </Box>
           
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
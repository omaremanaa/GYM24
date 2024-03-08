import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import gymLogo from './common/assets/icons/GYM24.svg';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

export default function Footer() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  return (
    <Container
      id="Connect"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box sx={{ ml: '-15px' }}>
        <img src={gymLogo} style={logoStyle} alt="logo of sitemark" />
      </Box>
      <div>
        <Link
          color="text.secondary"
          onClick={() => {
            setIsPrivacyPolicyOpen(true);
          }}
        >
          Privacy Policy
        </Link>
        <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
          &nbsp;•&nbsp;
        </Typography>
        <Link
          color="text.secondary"
          onClick={() => {
            setIsTermsOpen(true);
          }}
        >
          Terms of Service
        </Link>
      </div>
      <Stack
        direction="row"
        justifyContent="left"
        spacing={1}
        useFlexGap
        sx={{
          color: 'text.secondary',
        }}
      >
        <IconButton
          color="inherit"
          href="https://github.com/omaremanaa/Club30-Gym"
          aria-label="GitHub"
          sx={{ alignSelf: 'center' }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://twitter.com/omaremanaa"
          aria-label="X"
          sx={{ alignSelf: 'center' }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/omaremanaa/"
          aria-label="LinkedIn"
          sx={{ alignSelf: 'center' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}

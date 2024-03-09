import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

import gymLogo from '../../common/assets/icons/GYM24.svg';
import DialogModal from '../../common/components/Dialog';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

export default function Footer() {
  const intl = useIntl();
  const enLocale = localStorage.getItem('locale')
    ? localStorage.getItem('locale') === 'en'
    : true;

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
          style={{
            cursor: 'pointer',
          }}
          color="text.secondary"
          onClick={() => {
            setIsPrivacyPolicyOpen(true);
          }}
        >
          <FormattedMessage id="PrivacyPolicy" />
        </Link>
        <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
          &nbsp;•&nbsp;
        </Typography>
        <Link
          style={{
            cursor: 'pointer',
          }}
          color="text.secondary"
          onClick={() => {
            setIsTermsOpen(true);
          }}
        >
          <FormattedMessage id="TermsOfService" />
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
      {isPrivacyPolicyOpen && (
        <DialogModal
          title={intl.formatMessage({ id: 'PrivacyPolicy' })}
          content={intl.formatMessage({ id: 'PrivacyDescription' })}
          isOpen={isPrivacyPolicyOpen}
          handleClose={() => setIsPrivacyPolicyOpen(false)}
          locale={enLocale}
        />
      )}
      {isTermsOpen && (
        <DialogModal
          title={intl.formatMessage({ id: 'TermsOfService' })}
          content={intl.formatMessage({ id: 'TOSDescription' })}
          isOpen={isTermsOpen}
          handleClose={() => setIsTermsOpen(false)}
          locale={enLocale}
        />
      )}
    </Container>
  );
}

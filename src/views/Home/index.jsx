import * as React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';

export default function Home() {
  const theme = useTheme();
  const xsmall = useMediaQuery(theme.breakpoints.up('xs'));

  return (
    <Box
      id="Home"
      sx={() => ({
        width: '100%',
        backgroundColor: 'black',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={3}
          useFlexGap
          sx={{ zIndex: '10', width: { xs: '70%', sm: '70%' } }}
        >
          <Typography
            sx={{
              typography: { sm: 'h1', xs: 'h2' },
              display: 'grid',
              flexDirection: { xs: 'column', sm: 'row', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            <FormattedMessage id="workWith" />
            <Typography
              sx={{
                typography: { sm: 'h1', xs: 'h2' },
                display: 'grid',
                flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
              }}
              variant={xsmall ? 'h2' : 'h1'}
            >
              <FormattedMessage id="professionals" />
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            <FormattedMessage id="unlockBest" />
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

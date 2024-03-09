import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { advantages } from '../../common/constants';

export default function Advantages() {
  const enLocale = localStorage.getItem('locale')
    ? localStorage.getItem('locale') === 'en'
    : true;
  return (
    <Box
      dir={enLocale ? 'ltr' : 'rtl'}
      id="Advantages"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'black',
      }}
      // Container
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
        // container
      >
        <Box
          sx={{
            width: { sm: '100%', md: '70%' },
            textAlign: enLocale ? 'left' : 'right',
          }}
        >
          <Typography component="h2" variant="h4">
            <FormattedMessage id="ReasonsToJoin" />
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            <FormattedMessage id="ExploreWhy" />
          </Typography>
        </Box>
        <Grid container spacing={2.5} width={{ xs: '90%', md: '70%' }}>
          {advantages.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Stack
                direction="row"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  borderColor: 'transparent',
                  background: 'transparent',
                }}
              >
                <Box
                  sx={{ display: 'flex', alignItems: 'center', opacity: '50%' }}
                >
                  <item.icon style={{ color: '#FAFF00', fontSize: '2pc' }} />
                </Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    <FormattedMessage id={item.titleId} />
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    <FormattedMessage id={item.descriptionId} />
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

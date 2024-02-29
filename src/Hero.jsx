import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="Home"
      sx={(theme) => ({
        width: '100%',
        height:'700px',
        backgroundImage:'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 20%',
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
        <Stack spacing={3} useFlexGap sx={{ width: { xs: '100%', sm: '70%' }}}>
          <Typography
            variant="h1"
            sx={{
              display:'grid',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            WORK WITH
            <Typography
              component="span"
              variant="h1"
            >
              PROFESSIONALS
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
          Unlock Your Best Self: Achieve Peak Fitness with Our Team of Professional Trainers and Coaches.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
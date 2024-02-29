import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
const items = [
  {
    icon: <FitnessCenterIcon />,
    title: 'Forge a Better You',
    description:
      'Discover the Power of Fitness – Elevate Your Health, Ignite Your Confidence.',
  },
  {
    icon: <MonitorWeightIcon />,
    title: 'Scale to Success',
    description:
      'Measure Your Progress, Embrace Your Journey – Fitness That Transcends Numbers.',
  },
  {
    icon: <SentimentVerySatisfiedIcon />,
    title: 'Happy Moves, Happy You',
    description:
      'Enjoy Fitness on Your Terms – Elevate Your Experience, Boost Your Mood.',
  },
  {
    icon: <MonitorHeartIcon />,
    title: 'Pulse of Progress',
    description:
      'Where Every Beat Counts – Elevating Lives Through Fitness.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="Advantages"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Why Join Us?
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2.5} width={{xs: '90%', md: '70%'}} >
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={6}  key={index}>
              <Stack
                direction="row"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
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
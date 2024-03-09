import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { FormattedMessage } from 'react-intl';
const items = [
  {
    icon: <FitnessCenterIcon style={{ color: '#FAFF00', fontSize: '2pc' }} />,
    title: 'Forge a Better You',
    description:
      'Discover the Power of Fitness – Elevate Your Health, Ignite Your Confidence.',
    titleId: 'ForgeABetterYou',
    descriptionId: 'DiscoverThePowerOfFitness',
  },
  {
    icon: <MonitorWeightIcon style={{ color: '#FAFF00', fontSize: '2pc' }} />,
    title: 'Scale to Success',
    description:
      'Measure Your Progress, Embrace Your Journey – Fitness That Transcends Numbers.',
    titleId: 'ScaleToSuccess',
    descriptionId: 'MeasureYourProgress',
  },
  {
    icon: (
      <SentimentVerySatisfiedIcon
        style={{ color: '#FAFF00', fontSize: '2pc' }}
      />
    ),
    title: 'Happy Moves, Happy You',
    description:
      'Enjoy Fitness on Your Terms – Elevate Your Experience, Boost Your Mood.',
    titleId: 'HappyMovesHappyYou',
    descriptionId: 'EnjoyFitnessOnYourTerms',
  },
  {
    icon: <MonitorHeartIcon style={{ color: '#FAFF00', fontSize: '2pc' }} />,
    title: 'Pulse of Progress',
    description: 'Where Every Beat Counts – Elevating Lives Through Fitness.',
    titleId: 'PulseOfProgress',
    descriptionId: 'WhereEveryBeatCounts',
  },
];

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
        <Grid
          // dir="rtl"
          container
          spacing={2.5}
          width={{ xs: '90%', md: '70%' }}
        >
          {items.map((item, index) => (
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
                  {item.icon}
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

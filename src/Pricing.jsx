import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';

const tiers = [
  {
    title: 'Pass Trial',
    titleId: 'Basic',
    price: '0',
    description: [
      'Access to the gym from 8:00 to 14:00',
      'The trainer on duty will introduce you to the gym',
    ],
    descriptionId: [
      'AccessToCardioAndStrengthTrainingAreas',
      'GroupFitnessClassesIncluded',
      'LimitedAccessToPremiumFacilitiesAndAmenities',
      'NoPersonalTrainingSessionsIncluded',
    ],
  },
  {
    title: `Pass 'Easy Start'`,
    titleId: 'Basic',
    price: '119',
    description: [
      'Visit without restrictions 24/7',
      'Individual training program',
      'Access to the VTRAINER application',
      'Trainer support',
    ],
    descriptionId: [
      'AccessToCardioAndStrengthTrainingAreas',
      'GroupFitnessClassesIncluded',
      'LimitedAccessToPremiumFacilitiesAndAmenities',
      'NoPersonalTrainingSessionsIncluded',
    ],
  },
  {
    title: `Pass 'Free Time'`,
    titleId: 'Basic',
    price: '49',
    description: [
      'The entrance time from the gym is from 14:00 to 16:00',
      'Without suspension of gym membership',
      'The trainer on duty will introduce you to the gym',
    ],
    descriptionId: [
      'AccessToCardioAndStrengthTrainingAreas',
      'GroupFitnessClassesIncluded',
      'LimitedAccessToPremiumFacilitiesAndAmenities',
      'NoPersonalTrainingSessionsIncluded',
    ],
  },
  {
    title: `Pass '1 Month 24/7'`,
    titleId: 'Basic',
    price: '85',
    description: [
      'Visit without restrictions 24/7',
      'The trainer on duty will introduce you to the gym',
    ],
    descriptionId: [
      'AccessToCardioAndStrengthTrainingAreas',
      'GroupFitnessClassesIncluded',
      'LimitedAccessToPremiumFacilitiesAndAmenities',
      'NoPersonalTrainingSessionsIncluded',
    ],
  },
  {
    title: `Pass 'In Shape (AM)'`,
    titleId: 'Basic',
    price: '80',
    description: [
      'Training in mini-groups until 14:00',
      'Without suspension of gym membership',
      'Classes with a trainer in a mini-group 3 times a week',
      'Trainer Support',
    ],
    descriptionId: [
      'AccessToCardioAndStrengthTrainingAreas',
      'GroupFitnessClassesIncluded',
      'LimitedAccessToPremiumFacilitiesAndAmenities',
      'NoPersonalTrainingSessionsIncluded',
    ],
  },
  {
    title: `Pass 'In Shape (PM)'`,
    titleId: 'Basic',
    price: '80',
    description: [
      'Training in mini-groups until 17:00',
      'Without suspension of gym membership',
      'Classes with a trainer in a mini-group 3 times a week',
      'Trainer Support',
    ],
    descriptionId: [
      'AccessToCardioAndStrengthTrainingAreas',
      'GroupFitnessClassesIncluded',
      'LimitedAccessToPremiumFacilitiesAndAmenities',
      'NoPersonalTrainingSessionsIncluded',
    ],
  },
];

export default function Pricing() {
  const intl = useIntl();
  return (
    <Container
      id="Pricing"
      dir="ltr"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          <FormattedMessage id="Pricing" />
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {tiers.map(tier => (
          <Grid
            item
            style={{ display: 'flex' }}
            key={tier.title}
            xs={12}
            sm={6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Premium' ? '1px solid' : undefined,
                borderColor:
                  tier.title === 'Premium' ? 'primary.main' : undefined,
                background: 'grey.500',
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    color:
                      tier.title === 'Professional'
                        ? 'primary.contrastText'
                        : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2">
                    £ {tier.price}
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'white',
                  }}
                />
                {tier.description.map(line => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{
                        width: 20,
                        color: 'white',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === 'Premium'
                            ? 'primary.contrastText'
                            : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

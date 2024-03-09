import * as React from 'react';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { FormattedMessage } from 'react-intl';

const tiers = [
  {
    title: 'Pass Trial',
    titleId: 'PassTrial',
    price: '0',
    description: [
      'Access to the gym from 8:00 to 14:00',
      'The trainer on duty will introduce you to the gym',
    ],
    descriptionId: ['AccessToTheGymFrom8AMTo2PM', 'TrainerOnDutyIntroduction'],
  },
  {
    title: `Pass 'Easy Start'`,
    titleId: 'PassEasyStart',
    price: '119',
    description: [
      'Visit without restrictions 24/7',
      'Individual training program',
      'Access to the VTRAINER application',
      'Trainer support',
    ],
    descriptionId: [
      'VisitWithoutRestrictions24/7',
      'IndividualTrainingProgram',
      'AccessToVTrainerApplication',
      'TrainerSupport',
    ],
  },
  {
    title: `Pass 'Free Time'`,
    titleId: 'PassFreeTime',
    price: '49',
    description: [
      'The entrance time from the gym is from 14:00 to 16:00',
      'Without suspension of gym membership',
      'The trainer on duty will introduce you to the gym',
    ],
    descriptionId: [
      'EntranceTimeFrom2PMTo4PM',
      'WithoutSuspensionOfGymMembership',
      'TrainerOnDutyIntroduction',
    ],
  },
  {
    title: `Pass '1 Month 24/7'`,
    titleId: 'Pass1Month24/7',
    price: '85',
    description: [
      'Visit without restrictions 24/7',
      'The trainer on duty will introduce you to the gym',
    ],
    descriptionId: [
      'VisitWithoutRestrictions24/7',
      'TrainerOnDutyIntroductionFor1Month24/7',
    ],
  },
  {
    title: `Pass 'In Shape (AM)'`,
    titleId: 'PassInShapeAM',
    price: '80',
    description: [
      'Training in mini-groups until 14:00',
      'Without suspension of gym membership',
      'Classes with a trainer in a mini-group 3 times a week',
      'Trainer Support',
    ],
    descriptionId: [
      'TrainingInMiniGroupsUntil2PM',
      'WithoutSuspensionOfGymMembership',
      'ClassesWithTrainerInMiniGroup3TimesAWeek',
      'TrainerSupport',
    ],
  },
  {
    title: `Pass 'In Shape (PM)'`,
    titleId: 'PassInShapePM',
    price: '80',
    description: [
      'Training in mini-groups until 17:00',
      'Without suspension of gym membership',
      'Classes with a trainer in a mini-group 3 times a week',
      'Trainer Support',
    ],
    descriptionId: [
      'TrainingInMiniGroupsUntil5PM',
      'WithoutSuspensionOfGymMembership',
      'ClassesWithTrainerInMiniGroup3TimesAWeek',
      'TrainerSupport',
    ],
  },
];

export default function Pricing() {
  const enLocale = localStorage.getItem('locale') === 'en';

  return (
    <Container
      id="Pricing"
      dir={enLocale ? 'ltr' : 'rtl'}
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
                width: '100%',
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
                    <FormattedMessage id={tier.titleId} />
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
                {tier.descriptionId.map(line => (
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
                      <FormattedMessage id={line} />
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

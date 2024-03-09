import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { pricing } from '../../common/constants';

export default function Pricing() {
  const enLocale = localStorage.getItem('locale')
    ? localStorage.getItem('locale') === 'en'
    : true;

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
        {pricing.map(tier => (
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

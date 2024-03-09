import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { faq } from '../../common/constants';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormattedMessage } from 'react-intl';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);
  const enLocale = localStorage.getItem('locale')
    ? localStorage.getItem('locale') === 'en'
    : true;

  const handleChange = panel => (event, isExpanded) => {
    console.log(event, 'event');
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      dir={enLocale ? 'ltr' : 'rtl'}
      id="FAQ"
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
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <FormattedMessage id="FrequentlyAskedQuestions" />
      </Typography>
      <Box sx={{ width: '100%' }}>
        {faq.map(frequent => (
          <Accordion
            key={frequent}
            expanded={frequent.answer === expanded}
            onChange={handleChange(frequent.answer)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography component="h3" variant="subtitle2">
                <FormattedMessage id={frequent.questionId} />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                <FormattedMessage id={frequent.answerId} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, CardContent, CardMedia, Grow, IconButton } from '@mui/material';
import { coaches } from './common/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

import CustomizedDialogs from './common/components/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

const limit = 3;

export default function Features() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [clickedCoach, setClickedCoach] = useState();
  const [isHovered, setIsHovered] = useState(false);

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up('sm'));
  const xsmall = useMediaQuery(theme.breakpoints.up('xs'));
  const medium = useMediaQuery(theme.breakpoints.up('md'));
  const enLocale = localStorage.getItem('locale') === 'en';

  const coachesSeparated = [
    ...coaches.slice(0 + currentPage, limit + currentPage),
  ];
  const mobileViewCoachesSeparated = [
    ...coaches.slice(0 + currentPage, limit - 2 + currentPage),
  ];
  const handleButtonClick = increment => {
    setCurrentPage(prev => prev + increment);
  };

  function getDataUsed() {
    if (xsmall && !(medium && small)) {
      return mobileViewCoachesSeparated;
    } else {
      return coachesSeparated;
    }
  }
  useEffect(() => {
    if (xsmall && !(medium && small)) {
      console.log(null);
    } else {
      setCurrentPage(prev => (coaches.length - 1 === prev ? prev - 2 : prev));
    }
  }, [xsmall, medium, small]);

  return (
    <>
      <div
        style={{ marginTop: '5%', display: 'flex', justifyContent: 'center' }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          <FormattedMessage id="TrainersStaff" />
        </Typography>
      </div>
      <Container dir="ltr" id="Trainers" sx={{ py: { xs: 8, sm: 8 } }}>
        <div>
          <Grid container>
            {getDataUsed().map((coach, index) => (
              <Grow key={coach.profile.firstName} in={true}>
                <Card
                  key={index}
                  raised
                  sx={{
                    backgroundColor: '#222222',
                    maxWidth: 280,
                    margin: '0 auto',
                    padding: '1em',
                  }}
                >
                  <CardMedia
                    onClick={() => {
                      setIsOpenDialog(true), setClickedCoach(coach);
                    }}
                    onMouseEnter={() => {
                      setIsHovered(coach);
                    }}
                    onMouseLeave={() => {
                      setIsHovered(null);
                    }}
                    sx={{
                      width: '200px',
                      position: 'relative',
                      height: 250,
                      padding: '1em 1em 0 1em',
                      objectFit: 'contain',
                      '&:hover': {
                        cursor: 'pointer',
                        backgroundColor: 'primary.main',
                        opacity: 0.9,
                      },
                    }}
                    image={coach.profile.avatar}
                  >
                    {isHovered &&
                      coach.profile.firstName ===
                        isHovered.profile.firstName && (
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and opacity
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography variant="h6" color="white">
                            <FormattedMessage id="CoachDetails" />
                          </Typography>
                        </div>
                      )}
                  </CardMedia>

                  <CardContent
                    style={{
                      backgroundColor: 'transparent',
                      display: 'grid',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography gutterBottom variant="h5" color={'white'}>
                        {coach.profile.firstName} {coach.profile.lastName}
                      </Typography>
                    </div>
                  </CardContent>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                    }}
                  >
                    <IconButton
                      href="https://www.instagram.com/omaremanaa/"
                      style={{
                        '&:hover': {
                          cursor: 'pointer',
                          backgroundColor: 'primary.main',
                          opacity: 0.9,
                        },
                        marginBottom: '8px',
                      }}
                    >
                      <InstagramIcon />
                    </IconButton>
                    <IconButton
                      href="https://twitter.com/omaremanaa"
                      style={{
                        '&:hover': {
                          cursor: 'pointer',
                          backgroundColor: 'primary.main',
                          opacity: 0.9,
                        },
                        marginBottom: '8px',
                      }}
                    >
                      <XIcon />
                    </IconButton>
                    <IconButton
                      href="https://www.youtube.com/@MrBeast"
                      style={{
                        '&:hover': {
                          cursor: 'pointer',
                          backgroundColor: 'primary.main',
                          opacity: 0.9,
                        },
                        marginBottom: '8px',
                      }}
                    >
                      <YouTubeIcon />
                    </IconButton>
                  </div>
                </Card>
              </Grow>
            ))}
          </Grid>
        </div>
        {/* add condition for icons in intl */}
        <Box
          dir={enLocale ? 'ltr' : 'rtl'}
          sx={{
            marginTop: '3%',
            display: 'flex',
            justifyContent: { md: 'end', xs: 'center' },
          }}
        >
          <IconButton
            disabled={currentPage === 0}
            onClick={() => handleButtonClick(-1)}
          >
            {enLocale ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <IconButton
            disabled={
              getDataUsed().length === 1
                ? coaches.length === currentPage + 1
                : coaches.length <= currentPage + limit
            }
            onClick={() => handleButtonClick(1)}
          >
            {enLocale ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
        {isOpenDialog ? (
          <CustomizedDialogs
            isOpen={isOpenDialog}
            handleClose={() => setIsOpenDialog(false)}
            data={{
              name: `${clickedCoach.profile.firstName} ${clickedCoach.profile.lastName} `,
              age: clickedCoach.profile.DOB,
              nationality: clickedCoach.profile.nationality,
              history: clickedCoach.history,
            }}
          />
        ) : null}
      </Container>
    </>
  );
}

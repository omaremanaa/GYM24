import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  CardActions,
  CardContent,
  CardMedia,
  Grow,
  IconButton,
} from "@mui/material";
import { coaches } from "./common/constants";
import Fade from "react-reveal/Fade";
import gymPerson from "../src/common/assets/images/gymPerson.jpg";
import CustomizedDialogs from "./common/components/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/styles";

const limit = 3;

export default function Features() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [clickedCoach, setClickedCoach] = useState();
  const [isHovered, setIsHovered] = useState(false);
  
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up("sm"));
  const xsmall = useMediaQuery(theme.breakpoints.up("xs"));
  const medium = useMediaQuery(theme.breakpoints.up("md"));

  console.log(small, xsmall, medium, "medium");
  const coachesSeparated = [
    ...coaches.slice(0 + currentPage, limit + currentPage),
  ];
  const mobileViewCoachesSeparated = [
    ...coaches.slice(0 + currentPage, limit - 2 + currentPage),
  ];
  console.log(
    coaches.length,
    currentPage,
    coaches.length < currentPage - 2,
    "mobileViewCoachesSeparated",
  );
  const handleButtonClick = (increment) => {
    setCurrentPage((prev) => prev + increment);
  };
  console.log(
    coaches.length,
    currentPage,
    limit,
    "coaches.length < currentPage * limit",
  );
  // 0
  // 10
  function getDataUsed() {
    if (xsmall && !(medium && small)) {
      return mobileViewCoachesSeparated;
    } else {

      return coachesSeparated;
    }
  }
  useEffect(()=>{
    if (xsmall && !(medium && small)) {
      console.log(null)
    } else {
      setCurrentPage(prev=>coaches.length-1===prev?prev-2:prev)
    }
  },[xsmall,medium, small])


  return (
    <>
    <div style={{marginTop:'2%',display: 'flex', justifyContent:'center'}}>
    <Typography variant="h3" >
    Coaches
  </Typography>
  </div>
    <Container id="Coaches" sx={{ py: { xs: 8, sm: 16 } }}>
     
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <IconButton
          disabled={currentPage === 0}
          onClick={() => handleButtonClick(-1)}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Grid container spacing={5}>
          {getDataUsed().map((coach, index) => (
            <Grow key={coach.profile.firstName} in={true}>
              <Card
              key={index}
                raised
                sx={{
                  cursor: "pointer",
                  maxWidth: 280,
                  margin: "0 auto",
                  padding: "0.1em",
                 
                }}
                onClick={() => {
                  setIsOpenDialog(true), setClickedCoach(coach);
                }}
              >
                <CardMedia
                onMouseEnter={()=>{setIsHovered(coach)}}
                onMouseLeave={()=>{setIsHovered(null)}}
                  sx={{
                    position: "relative",
                    height: 250,
                    padding: "1em 1em 0 1em",
                    objectFit: "contain",
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  image={gymPerson}
                >
                  {isHovered && coach.profile.firstName === isHovered.profile.firstName &&
                    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and opacity
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" color="white">
        Coach Details
      </Typography>
    </div>
    }
    </CardMedia>

                <CardContent
                  style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    style={{}}
                    color={"red"}
                  >
                    {coach.profile.firstName} {coach.profile.lastName}
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          ))}
        </Grid>

        <IconButton
          disabled={
            getDataUsed().length === 1
              ? coaches.length === currentPage + 1
              : coaches.length <= currentPage + limit
          }
          onClick={() => handleButtonClick(1)}
        >
          <ChevronRightIcon />
        </IconButton>
      </div>
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

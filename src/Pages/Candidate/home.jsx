import React from 'react'
import CandidateAppBar from '../../Components/candidatenavbar'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from '@mui/material/Grid'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Work Together',
    imgPath:
      'https://images.unsplash.com/photo-1653669487177-d7c8e245f0f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    label: 'Find the Best',
    imgPath:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    label: 'Find who is great for your company',
    imgPath:
      'https://images.unsplash.com/photo-1553484771-898ed465e931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
];

export default function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
    <div style={{background:"white",backgroundSize:"cover"}}>
    <CandidateAppBar />
    <div style={{marginTop:"5px"}} class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Smart HRM Portal</h1>
        <p class="lead">Find the perfect match for your Ogranization</p>
      </div>
    </div>
    <Grid
        spacing={4}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
    >
        <Grid item xs={5}>
          <div>
            <h5 class="display-6" style={{marginLeft:'30px'}} >Smart HRM provides you with the best job oppurtunities and Top company's HR here.</h5>
          </div>
          <div>
            <h2 class="display-6" style={{marginLeft:'30px'}} >You can search job according to your skills , area and much more.Moreover , You can make your resume. </h2>
          </div>
        </Grid>
        <Grid item xs>
        <Box sx={{marginLeft:'10%', maxWidth: 600, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
                }}
            >
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                        component="img"
                        sx={{
                        height: 350,
                        display: 'block',
                        maxWidth: 600,
                        overflow: 'hidden',
                        width: '100%',
                        }}
                        src={step.imgPath}
                        alt={step.label}
                    />
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    Next
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
                }
            />
            </Box>
        </Grid>
    </Grid>
    </div>
    </>
  )
}

import React from 'react'
import CandidateAppBar from '../../Components/candidatenavbar'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Work Together',
    imgPath:
      'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    label: 'Find the Best',
    imgPath:
      'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    label: 'Find who is great for your company',
    imgPath:'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
  },
];


export default function InterestandExperience() {
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
        <CandidateAppBar />
        <div style={{marginTop:"5px"}} class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Interest and Experience</h1>
            <p class="lead">Tell the recruiters about your experience and what your future interest.</p>
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
                <TextField id="filled-basic" label="Job Experience (in years)" variant="filled" style={{marginTop:'10px',marginLeft:'120px',width:"50%"}}/>
            </div>
            <div>
            <TextField id="filled-basic" label="Interests" variant="filled" style={{marginTop:'10px',marginLeft:'120px',width:"50%"}}/>
            </div>
            <div>
            <TextField
                style={{width:"500px",marginLeft:'120px',marginTop:'10px'}}
                id="filled-multiline-static"
                label="Past Experience"
                multiline
                rows={4}
                variant="filled"
            />
        </div>
        <Button style={{marginTop:'10px',marginLeft:'22%'}} variant="contained" >Submit</Button>
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
    </>
  )
}

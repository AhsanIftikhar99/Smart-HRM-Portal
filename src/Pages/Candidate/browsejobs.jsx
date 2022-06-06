import React from 'react'
import CandidateAppBar from '../../Components/candidatenavbar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search"
import Input from '@mui/material/Input';
import { Label } from 'reactstrap'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export default function BrowseJobs() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
        <CandidateAppBar />
        <div style={{marginTop:"5px"}} class="jumbotron jumbotron-fluid">
        <h1 class="display-4">Browse Jobs</h1>
            <Label  style={{marginRight:'5px',fontSize:'28px',marginLeft:'70%'}}>Search : </Label>
                <Input
                style={{fontsize:'28px'}}
                id="input-with-icon-adornment"
                endAdornment={
                    <InputAdornment position="end">
                    <SearchIcon />
                    </InputAdornment>
                }
                /> 
                
                 
                <p class="lead">Find the desired jobs according to your interest</p>
        </div>
        <div style={{marginTop:'20px'}}>
        <Box sx={{ minWidth: 275 }}>
            <Card style={{width:'50%',marginLeft:'25%'}} variant="outlined">
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Posted by Alijames24@gmail.com
                </Typography>
                <Typography variant="h4" component="div">
                    ReactJS Engineer
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    HZTech , Karachi
                </Typography>
                <Typography variant="body2">
                    <h6> Work-Type:</h6>
                    {bull}It is a remote based job
                    <br />
                    <br />
                    <h6>
                        Requirements:
                    </h6>
                    {bull} Minimum Education : BS
                    <br />
                    {bull} 0-1 years of Experience in React
                    <br />
                    {bull} Must have knowledge of HTML , CSS and Javascript
                    <br />
                    {bull} Have good problem solving Skills
                    <br />
                    <br />
                    <h5>Salary : 80k - 100k PKR</h5>
                </Typography>
                </CardContent>
                <CardActions>
                <Button onClick={handleOpen} variant="contained" size="small">Apply</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Job Status
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Your have successfully applied for this job.Company's HR will get back to you.
                    </Typography>
                    <Button style={{marginTop:'10px'}} variant="contained" onClick={handleClose}>Close</Button>
                    </Box>
                </Modal>
                </CardActions>
            </Card>
            
        </Box>
        </div>
        <div style={{marginTop:'20px'}} >
        <Box sx={{ minWidth: 275 }}>
            <Card style={{width:'50%',marginLeft:'25%'}} variant="outlined">
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Posted by hrfolio3@gmail.com
                </Typography>
                <Typography variant="h4" component="div">
                    Vue.js Lead Developer
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Folio3 , Karachi
                </Typography>
                <Typography variant="body2">
                    <h6> Work-Type:</h6>
                    {bull}It is a on-site job
                    <br />
                    <br />
                    <h6>
                        Requirements:
                    </h6>
                    {bull} Minimum Education : BS
                    <br />
                    {bull} 3-4 years of Experience in VUE.JS
                    <br />
                    {bull} Have good knowledge of Servers and Front-End Integration
                    <br />
                    {bull} Have good Leadership Kilss
                    <br />
                    <br />
                    <h5>Salary : 150k - 200k PKR</h5>
                </Typography>
                </CardContent>
                <CardActions>
                <Button onClick={handleOpen} variant="contained" size="small">Apply</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Job Status
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Your have successfully applied for this job.Company's HR will get back to you.
                    </Typography>
                    <Button style={{marginTop:'10px'}} variant="contained" onClick={handleClose}>Close</Button>
                    </Box>
                </Modal>
                </CardActions>
            </Card>
            
        </Box>
        </div>

    </>
  )
}

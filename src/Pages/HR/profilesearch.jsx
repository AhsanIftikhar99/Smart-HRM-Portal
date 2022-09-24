import React from 'react'
import ResponsiveAppBar from '../../Components/hrnavbar';
import { Label } from 'reactstrap'
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search"
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

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


export default function ProfileSearch() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
    <ResponsiveAppBar />
    <div style={{marginTop:"5px"}} class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Search for accounts</h1>
            <p class="lead">Look for people based on your need</p>
        </div>
    </div>
    <div className='text-center'>
    <Label style={{fontSize:'28px'}}>Search : </Label>
    <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
    </div>
    <div style={{marginTop:'20px'}}>
        <Box sx={{ flexGrow:1, minWidth: 275 }}>
        <Card style={{width:'50%',marginLeft:'25%'}} variant="outlined">
        <CardContent>
        <Grid container spacing={1}>
          <Grid item xs>
            <CardMedia
                  component="img"
                  sx={{ width: 100 }}
                  image="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Live from space album cover"
                />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h4" component="div">
                  Ahsan Iftikhar
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Github: ahsan@gmail.com
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    LinkedIn: ahsan@gmail.com
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Skills: SQL , JS , C ++ , React
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Open to new jobs and interviews
              </Typography>
          </Grid>
          
        </Grid>
                <Typography variant="body2">
                    <h6> Work-Type:</h6>
              
                </Typography>
                </CardContent>
                <CardActions>
                <Button onClick={handleOpen} variant="contained" size="small">Arrange Interview</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Details
                    </Typography>
                    <TextField id="filled-basic" label="Interview Time" variant="filled" style={{marginTop:'5px',width:"50%"}}/>
                    <div>
                    <TextField id="filled-basic" label="Interview Date" variant="filled" style={{marginTop:'5px',width:"50%"}}/>
                  
                    </div>
                    <Button style={{marginTop:'10px'}} variant="contained" onClick={handleClose}>Send Interview</Button>
                    </Box>
                </Modal>
                </CardActions>
            </Card>
            
        </Box>
        </div>
    
    </>
  )
}

import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ResponsiveAppBar from "../../Components/hrnavbar";
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function JobAdd() {
    const [workType, setworkType] = React.useState('');
    const [jobType, setjobType] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        setjobType(event.target.value);
    };
    const handleChange1 = (event) => {
        setworkType(event.target.value);
    };
    const jobtype = [
        {
            value: 'Full Time',
            label: 'Full Time',
        },
        {
            value: 'Part Time',
            label: 'Part Time',
        },
        {
            value: 'Internship',
            label: 'Internship',
        },
        {
            value: 'Contract',
            label: 'Contract',
        },
    ];
    const worktype = [
        {
            value : 'On site',
        },
        {
            value : 'Hybrid',
        },
        {
            value : 'Remote',
        }
    ]
    return (
        <>
        <ResponsiveAppBar />
        <div style={{marginTop:"5px"}} class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Post a Job Ad</h1>
                <p class="lead">Tell the world about your interest and what you can offer</p>
            </div>
        </div>
        <div className="row-content">
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="off"
        >
        <div>
            <TextField id="filled-basic" label="Study Qualification" variant="filled" style={{marginLeft:'120px',width:"37%"}}/>
        </div>
        <div>
            <TextField id="filled-basic" label="Experience" variant="filled" style={{marginLeft:'120px',width:"37%"}}/>
        </div>
        <div>
            <TextField id="filled-basic" label="Job Role" variant="filled" style={{marginLeft:'120px',width:"37%"}}/>
        </div>
        <div>
            <TextField id="filled-basic" label="Company's Name" variant="filled" style={{marginLeft:'120px',width:"37%"}}/>
        </div>
        <div>
            <TextField id="filled-basic" label="Salary Upto" variant="filled" style={{marginLeft:'120px',width:"37%"}}/>
        </div>
        <div>
            <TextField
            id="filled-select-currency"
            select
            label="Job Type"
            value={jobType}
            onChange={handleChange}
            helperText="Please select your job type"
            variant="filled"
            style={{marginLeft:"120px",width:"37%"}}
            >
            {jobtype.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </div>
        <div>
            <TextField
            id="worktype"
            select
            label="Work Type"
            value={workType}
            onChange={handleChange1}
            helperText="Please select your Work Type"
            variant="filled"
            style={{marginLeft:"120px",width:"37%"}}
            >
            {worktype.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.value}
                </MenuItem>
            ))}
            </TextField>
        </div>        
        <div>
            <TextField
                style={{width:"500px",marginLeft:'120px'}}
                id="filled-multiline-static"
                label="Description of Job"
                multiline
                rows={4}
                variant="filled"
            />
        </div>
        <Button onClick={handleOpen} style={{marginLeft:'550px'}}  variant="contained">Post</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Job Ad Status
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Your Job Ad has been posted.
            </Typography>
            <Button style={{marginTop:'10px'}} variant="contained" onClick={handleClose}>Close</Button>
            </Box>
        </Modal>
        </Box>
        </div>
        </>
    );
}
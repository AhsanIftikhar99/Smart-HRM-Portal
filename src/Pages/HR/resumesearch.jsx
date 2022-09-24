import React from 'react'
import { Label } from 'reactstrap'
import ResponsiveAppBar from '../../Components/hrnavbar'
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search"
import Input from '@mui/material/Input';

export default function ResumeSearch() {
  return (
    <>
    <ResponsiveAppBar />
    <div style={{marginTop:"5px"}} class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Search for Skills and Resumes</h1>
            <p class="lead">Our Portal will provide you with best resumes</p>
        </div>
    </div>
    <div className='row-content text-center' style={{fontSize:'25px'}} >
        <Label className="text-center" style={{fontSize:'28px'}}>Search : </Label>
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />   
    </div>        
 
    </>
  )
}

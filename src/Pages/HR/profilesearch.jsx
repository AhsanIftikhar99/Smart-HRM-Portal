import React from 'react'
import ResponsiveAppBar from '../../Components/hrnavbar';
import { Label } from 'reactstrap'
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search"
import Input from '@mui/material/Input';



export default function ProfileSearch() {
  return (
    <>
    <ResponsiveAppBar />
    <div style={{marginTop:"5px"}} class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Search for accounts</h1>
            <p class="lead">Look for people based on your need</p>
        </div>
    </div>
    <div className='row-content text-center'>
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
    </>
  )
}

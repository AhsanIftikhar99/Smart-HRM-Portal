import React from 'react'
import Navbar from '../../Components/hrnavbar';

export default function Homepage() {
  return (
    <>
    <div style={{background:"white",backgroundSize:"cover"}}>
    <Navbar />
    <div style={{marginTop:"5px"}} class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Smart HRM Portal</h1>
        <p class="lead">Find the perfect match for your Ogranization</p>
      </div>
    </div>
    
    </div>
    </>
  )
}

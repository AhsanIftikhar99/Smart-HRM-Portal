import React from "react";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function SignupForm (){
  

    const [value, setValue] = React.useState(null);
    return(
      <div style={{backgroundImage: `url(${require("../assets/wall.jpg")})`,backgroundSize: 'cover',width:"100%",height:"80%",display: 'flex',flex: '1'}}>
        <div  id="loginform">
          <FormHeader title="Smart HRM Signup" />
          <div style={{marginTop:"1rem"}}>
            <FormInput description="First Name" placeholder="Enter your First Name" type="text" />
            <FormInput description="Last Name" placeholder="Enter your Last Name" type="text"/>
            <FormInput description="Email"  placeholder="Enter your Email" type="text"/>
            <FormInput description="Password" placeholder="Choose Password" type="password"/>
            <div id="select" style={{marginTop:'2rem',marginBottom:'4rem'}}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Select Your DOB"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider> 
            </div>
            <div id="select">
              <select className="form-select" style={{width:'80%',height:'40px',}} aria-label="Default select example">
                <option selected>Are You a HR or Candidate</option>
                <option value="1">HR</option>
                <option value="2">Candidate</option>
              </select>
            </div>
            <FormButton title="Signup"/>
          </div>  
        </div>
      </div>  
    )
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);

const FormButton = props => (
  <div id="button" className="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#googleIcon" id="#googleIcon"></a>
);

import React from "react";
import { useNavigate } from  "react-router-dom";

function LoginForm (){

  const [select, setselect] = React.useState('');
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    
    navigate("/sign-up");
  }
  const routeChange1 = () =>{ 
    if(select=="1")
      navigate("/homepage");
    else
      navigate("/candidate-homepage"); 
  
  }

  const handleselect=(event)=>{
    console.log(event.target.value);
    setselect(event.target.value)
  }
  
  
  const OtherMethods = props => (
    <div id="alternativeLogin">
      <label>Or</label>
      <div id="button" className="row">
        <button onClick={routeChange} >Signup</button>
      </div>
    </div>
    );
  
    const Form = props => (
      <div>
         <FormInput description="Username or Email" placeholder="Enter your username" type="text" />
         <FormInput description="Password" placeholder="Enter your password" type="password"/>
         <div id="select">
         <select value={select} onChange={handleselect} className="form-select" style={{width:'80%',height:'40px',marginTop:'10px'}} aria-label="Default select example">
           <option  selected>Are You a HR or Candidate</option>
           <option value="1">HR</option>
           <option value="2">Candidate</option>
         </select>
         </div>
         <div id="button" className="row">
           <button  onClick={routeChange1}>Log In</button>
         </div>
      </div>
     );
  

  return(
      <div style={{backgroundImage: `url(${require("../assets/wall.jpg")})`,backgroundSize: 'cover',width:"100%",height:"100%",height: '120vh',display: 'flex',flex: '1'}}>
      <div id="loginform">
        <FormHeader title="Smart HRM Login" />
        <Form />   
        <OtherMethods />
      </div>
      </div>
    )
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);

const FormInput = props => (
<div className="row">
  <label>{props.description}</label>
  <input type={props.type} placeholder={props.placeholder}/>
</div>  
);

export default LoginForm;
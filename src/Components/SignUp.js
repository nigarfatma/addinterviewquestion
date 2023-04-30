import React, { useState,useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { successToaster } from '../Components/Toast/Toast';

// import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import './SignUp.css'


const baseUrl = 'http://localhost:5000';



const SignUp=()=>{
  const navigate = useNavigate();
      // Validation
// const [validfName,setvalidfName]=useState();
const [validPassword,setvalidPassword]=useState();
const [validconfirmPassword,setconfirmPassword]=useState();

  const[fullDetail,setFullDetail]=useState({
    fName:'',
    lName:'',
    email:'',
    password:'',
    cPassword:''
  })
  useEffect(() => {
   
    if (fullDetail.password.length>0 && fullDetail.password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")){setvalidPassword(true)}else{setvalidPassword(false)}
    fullDetail.cPassword.length>0 && fullDetail.cPassword!==fullDetail.password?setconfirmPassword(true):setconfirmPassword(false)
 
   },[fullDetail]);
  const inputHandler=(e)=>{
const {name,value}=e.target
setFullDetail({...fullDetail,[name]:value})
  }
  const formHandle=(e)=>{
    e.preventDefault()
    // console.log(fullDetail,"fullDetail");
    axios.post(`${baseUrl}/user/signUp`, fullDetail)
    .then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      } else {
        toast.success('Register Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            navigate('/signin');
          }
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  
  }
    return(
        <>
    <div className="main_div">
<form className="shadow-lg" onSubmit={formHandle}>

<h4 className="text-center" style={{color:"#4CAF50"}}>Create an account</h4>
<div class="mt-3">
 
 <input type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp" placeholder="Enter First Name" name="fName" value={fullDetail.fName} onChange={inputHandler}/>

</div>
<div class="mt-3">
 
 <input type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp" placeholder="Enter Last Name" name="lName" value={fullDetail.lName} onChange={inputHandler}/>

</div>
  <div class="mt-3">
 
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter Email" name="email" value={fullDetail.email} onChange={inputHandler}/>
   
  </div>
  <div class="mt-3">

    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" name="password" value={fullDetail.password} onChange={inputHandler}/>
    {validPassword?<p className="text-danger">Password must contain minimum 8 character, one lowercase letter, one uppercase letter, one number, one special character & no space</p>:''}
  </div>
  <div class="mt-3">

    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Confirm Password" name="cPassword" value={fullDetail.cPassword} onChange={inputHandler}/>
    {validconfirmPassword?<p className="text-danger">Password and confirmpassword should be match</p>:''}
  </div>
  <button type="submit" class="btn1 btn-primary" >Sign Up</button>
  
                <div style={{display:'flex', flexDirection:"row", alignItems:"baseline"}}>
                    <h6 style={{ marginRight: '8px' }}>Already have an account?</h6>
                    <Link to="/signin" type="button" className=" btn-link" style={{ color:  "#4CAF50" }}>Sign In</Link>
                </div>
</form>
  <ToastContainer />
  </div>

        </>
    )
}
export default SignUp
import React,{useState} from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


import './SignIn.css'

const baseUrl = 'http://localhost:5000';
const ResetPassword=()=>{
  const navigate = useNavigate();
  const [resetPassword,setresetPassword]=useState({
    
    email:'',
    newPassword:''
  })

  const inputHandler=(e)=>{
    const {name,value}=e.target
    setresetPassword({...resetPassword,[name]:value})
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post(`${baseUrl}/user/resetPassword`, resetPassword)
    .then((res) => {
      if (res.data.result) {
     
      
        toast.success('Password Reset Successfully', {
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
      } else {
    

        toast.error(res.data.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
    console.log("reset Password");
  }
 
    return(
        <>
        <div className="main_div">
        <div className="btn-top">
                    
                </div>
<form className="shadow-lg" onSubmit={submitHandler}>


  <div className="mt-3">
 <h5>Reset your Password</h5>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" name="email" value={resetPassword.email} onChange={inputHandler}/>
    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter New Password" name="newPassword" value={resetPassword.newPassword} onChange={inputHandler}/>
   
  </div>
  
 
  <button type="submit" className="btn1" >Send Email</button>

               
</form>
  </div>
  <ToastContainer />

        </>
    )
}
export default ResetPassword
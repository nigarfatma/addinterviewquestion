import React,{useState} from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


import './SignIn.css'

const baseUrl = 'http://localhost:5000';
const SendEmail=()=>{
  const navigate = useNavigate();
  const [inputEmail,setinputEmail]=useState({
    email:''
  })

  const inputHandler=(e)=>{
    const {name,value}=e.target
    setinputEmail({...inputEmail,[name]:value})
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post(`${baseUrl}/user/forgotPassword`, inputEmail)
    .then((res) => {
      if (res.data.email) {
     
      
        toast.success('OTP sent successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            navigate('/VerifyOtp');
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
    console.log("inputEmail");
  }
 
    return(
        <>
        <div className="main_div">
        <div className="btn-top">
                    
                </div>
<form className="shadow-lg" onSubmit={submitHandler}>


  <div className="mt-3">
 
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" name="email" value={inputEmail.email} onChange={inputHandler}/>
   
  </div>
  
 
  <button type="submit" className="btn1" >Send Email</button>

               
</form>
  </div>
  <ToastContainer />

        </>
    )
}
export default SendEmail
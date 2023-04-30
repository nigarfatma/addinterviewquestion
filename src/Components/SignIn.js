import React,{useState} from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


import './SignIn.css'

const baseUrl = 'http://localhost:5000';
const SignIn=()=>{
  const navigate = useNavigate();

  const [input,setInput]=useState({
    email:'',
    password:''
  })
  const inputHandle=(e)=>{
    const {name,value}=e.target
    setInput({...input,[name]:value})
  }
  const formHandle=(e)=>{
    e.preventDefault();
    axios.post(`${baseUrl}/user/login`, input)
    .then((res) => {
      if (res.data.createRespose) {
     
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('name', res.data.name);
        toast.success('login successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            navigate('/');
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
    console.log("submit");
  }
 
    return(
        <>
        <div className="main_div">
        <div className="btn-top">
                    
                </div>
<form className="shadow-lg " onSubmit={formHandle}>

<h4 className="text-center" style={{color:"#4CAF50"}}>Sign In</h4>
  <div class="mt-3">
 
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" name="email" value={input.email} onChange={inputHandle}/>
   
  </div>
  <div class="mt-3">

    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password"  name="password" value={input.password} onChange={inputHandle}/>
  </div>
 
  <button type="submit" class="btn1" >Sign In</button>
  <div className=" mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
  <Link to="/SendEmail" className=" btn-link" >Forgot Password</Link>
                    
                </div>
                
                <div style={{display:'flex', flexDirection:"row", alignItems:"baseline"}}>
                    <h6 style={{ marginRight: '8px' }}>Don't have an account?</h6>
                    <Link to="/signup" className=" btn-link" style={{ color:  "#4CAF50" }}>Sign Up</Link>
                </div>
</form>
  </div>
  <ToastContainer />

        </>
    )
}
export default SignIn
import React, { useState, useEffect } from "react";
import "../Components/Navbar.css";
import { ToastContainer, toast } from 'react-toastify';
import { successToaster } from '../Components/Toast/Toast.js'

import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Modal from "react-modal";

// import Main from './Components/Main';
import Main from "./Main";
const baseUrl = 'http://localhost:5000';

const Navbar = () => {

  // const name = localStorage.getItem('name');
  const userName=localStorage.getItem('name')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [input,setInput]=useState({
    questionAdd:'',
    answerAdd:''
  })
  const inputHandler=(e)=>{
    const {name,value}=e.target
    setInput({...input,[name]:value})
  }
  const formHandler=(e)=>{
    e.preventDefault();
    axios.post(`${baseUrl}/user/question`, input)
    .then((res) => {
      if (res.data.createResponse) {
     
        toast.success('Question Added successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // onClose: () => {
          //   navigate('/');
          // }
        });
        setIsModalOpen(false)
        console.log(res.data.createResponse,"res.data.createResponse");
      } else {
    

        console.log("errorq");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  
    setInput({
      questionAdd:'',
      answerAdd:''
    })
  }
  const handleAddQuestionClick = () => {
    console.log("hello");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const data = localStorage.getItem("access_token");
    setIsLoggedIn(!!data);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    toast.success('Logout successful', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("toast",toast);
    navigate('/signin');
  };
  
  return (
    <>
      <nav class="navbar navbar-expand-sm  ">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">
            Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav ms-auto">
              <li className="nav-item box">
                <a
                  className="nav-link  btn-dark"
                  href="javascript:void(0)"
                  title="Add"
                  onClick={handleAddQuestionClick}
                >
                  Add Question
                </a>
              </li>
              <Modal isOpen={isModalOpen} onClose={closeModal} className="mod">
                <div className="modal-container">
                  <div className="modal-content">
                    <span
                      className="modal-close-btn ms-auto"
                      onClick={closeModal}
                    >
                      &times;
                    </span>
                    <form action="" onSubmit={formHandler}>
                    <div>
                    <div className="modal-header">

                      <input
                        type="text"
                        placeholder="Add Question"
                        className="form-control"
                        name="questionAdd"
                        onChange={inputHandler}
                        value={input.questionAdd}
                      />
                    </div>
                    <div className="modal-body">
                      <input
                        type="text"
                        placeholder="Add Answer"
                        className="form-control"
                        name="answerAdd"
                        value={input.answerAdd}
                        onChange={inputHandler}
                      />
                    </div>
                  
                    <div
                      className=""
                      style={{ display: "flex", justifyContent: "row",gap:"10px" }}
                    >
                      <button className="btn2" type="submit">Submit</button>
                      <button className="btn2" onClick={closeModal}>
                        Cancel
                      </button>
                    </div>
                    </div>
                    </form>
                 
                  </div>
                
                </div>
              
              </Modal>
             
              {isLoggedIn ? (

                <li className="nav-item box">
                <span>Welcome,{userName}</span>
                  <button onClick={handleLogout} className="nav-link" title="login out">
                    Log Out
                  </button>
                </li>
              ) : (
                <li className="nav-item box">
                  <NavLink to="/signin" className="nav-link" title="login">
                    Log In
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
        
      </nav>
      <ToastContainer />
      <Main />
    </>
   
  );
};
export default Navbar;

import React, { useState } from 'react';
// import './App.css';
import Navbar from './Components/Navbar';

import { Route, Routes } from 'react-router-dom';

import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import NodejsInterview from './Components/NodejsInterview';
import SendEmail from './Components/SendEmail';
import VerifyOtp from './Components/VerifyOtp'
import ResetPassword from './Components/ResetPassword'
import JavascriptInterview from './Components/JavascriptInterview';

function App() {
 const [SerachItem,setSerachItem]=useState('')
  return (
   
   <>
   
     <Routes>
     <Route exact path="/" element={<Navbar setSerachItem={setSerachItem}/>}>
     <Route exact path="/nodejs/question" element={<NodejsInterview SerachItem={SerachItem}/>} />
     <Route exact path="/javascript/question" element={<JavascriptInterview />} />
     </Route>
     <Route exact path="/signin" element={<SignIn />} />
     <Route exact path="/signup" element={<SignUp />} />
     <Route exact path="/SendEmail" element={<SendEmail />} />
     <Route exact path="/VerifyOtp" element={<VerifyOtp />} />
     <Route exact path="/ResetPassword" element={<ResetPassword />} />


            </Routes>


{/* <SignIn/> */}
{/* <SignUp/> */}
   </>
  );
}

export default App;

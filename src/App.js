import React, { useState } from 'react';
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
  const [searchItem, setSearchItem] = useState('');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Listen for changes in network connectivity
  window.addEventListener('online', () => setIsOnline(true));
  window.addEventListener('offline', () => setIsOnline(false));

  return (
    <>
      {isOnline ? (
        <Routes>
          <Route
            exact
            path="/"
            element={<Navbar setSearchItem={setSearchItem} />}
          >
            <Route
              exact
              path="/nodejs/question"
              element={<NodejsInterview searchItem={searchItem} />}
            />
            <Route
              exact
              path="/javascript/question"
              element={<JavascriptInterview />}
            />
          </Route>
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/SendEmail" element={<SendEmail />} />
          <Route exact path="/VerifyOtp" element={<VerifyOtp />} />
          <Route exact path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
      ) : (
        <div>
          <h1>Oops!</h1>
          <p>Network is disconnected. Please check your connection.</p>
        </div>
      )}
    </>
  );
}

export default App;

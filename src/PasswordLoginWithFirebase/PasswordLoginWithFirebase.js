import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterAndLogin from './RegisterAndLogin';
import Home from './Home';
import PasswordReset from './PasswordReset';
import WelcomeHome from './WelcomeHome'; // Import the WelcomeHome component

function PasswordLoginWithFirebase() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RegisterAndLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/homex" element={<WelcomeHome />} /> {/* Add this route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default PasswordLoginWithFirebase;

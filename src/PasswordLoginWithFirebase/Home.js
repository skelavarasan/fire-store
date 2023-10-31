import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../PasswordLoginWithFirebase/sidebar';
import { auth } from './FirebaseConfig';
import './Home.css'; // Import a CSS file for Home-specific styles

function Home() {
  const history = useNavigate();

  const handleClick = () => {
    signOut(auth).then(() => {
      history('/');
    });
  }

  return (
    <div className='home-container'>
      <Sidebar />
      <div className='main-content'>
        <div className='welcome-section'>
          <h1>Welcome to Elon Task Management</h1>
          <p>Your go-to place for managing tasks efficiently.</p>
          <button className='get-started-button' onClick={() => history('/dashboard')}>
            Let's Get Started
          </button>
        </div>
        <div className='signout-button-section'>
          <button className='signout-button' onClick={handleClick}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;














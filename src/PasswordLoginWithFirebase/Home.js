import React from 'react';
import { signOut } from 'firebase/auth';
import { db } from './FirebaseConfig'; // Import 'db'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../PasswordLoginWithFirebase/sidebar';
import { database } from './FirebaseConfig';


function Home() {
  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then(val => {
      console.log(val, "val");
      history('/');
    });
  }

  return (
    <div className='appx'>
      <div className='awesome-welcome'>
        <h1>Warm Welcome Bruh</h1>
        <p> to </p>
        <h2>Elon Task Management</h2>
        <button className='get-started-button' onClick={() => history('/dashboard')}>
          Let's Get Started
        </button>
      </div>
      <Sidebar />
      <div className='vikx'>
        <button className='signout-button' onClick={handleClick}>
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Home;

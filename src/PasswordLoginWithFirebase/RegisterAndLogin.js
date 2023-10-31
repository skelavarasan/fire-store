import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { db } from './FirebaseConfig'; // Import 'db'
import { useNavigate } from 'react-router-dom';
import './PasswordLoginWithFirebase.css';
import { database } from './FirebaseConfig';


// import google_icon from '../Assestsx/google.jpeg';
// import apple_icon from '../Assestsx/apple.jpeg';
// import micro_icon from '../Assestsx/micro.png';
// import slack_icon from '../Assestsx/slack.jpeg';

import log from '../PasswordLoginWithFirebase/Assetsx/loginx.jpg';

import email_icon from '../PasswordLoginWithFirebase/Assetsx/email.png';
import password_icon from '../PasswordLoginWithFirebase/Assetsx/password.png';

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showEmail, setShowEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(true);
  const history = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailInput(e.target.email.value);
    setShowPassword(true);
    setShowContinueButton(false);
  }

  const handlePasswordSubmit = (e, type) => {
    e.preventDefault();
    const email = emailInput;
    const password = passwordInput;

    if (type === 'signup') {
      createUserWithEmailAndPassword(database, email, password)
        .then(data => {
          console.log(data, "authdata");
          history('/home');
        })
        .catch(err => {
          if (err.code === 'auth/email-already-in-use') {
            alert('Email already in use');
          } else {
            alert(err.code);
          }
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then(data => {
          console.log(data, "authdata");
          history('/home');
        })
        .catch(err => {
          alert(err.code);
        });
    }
  }

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(database, provider);
      console.log('Successfully signed in with Google:', result.user.email);
      history('/home');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  }

  const handleReset = () => {
    history('/password-reset');
  }

  return (
    <div className='app'>
      <div className='admk'>
        <img src={log} style={{ height: '80px', width: '60px' }} />
        <h1>Task Management</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='login-row'>
            <h1 className='custom-header'>{login ? 'Log In' : 'Create an Account'}</h1>
            <button className='top-button' onClick={() => setLogin(!login)}>
              {login ? 'Create an Account' : 'Log In'}
            </button>
          </div>
        </div>
        <div className='sign-box'>
          {showEmail && (
            <form
              onSubmit={
                showPassword
                  ? (e) => handlePasswordSubmit(e, login ? 'signin' : 'signup')
                  : handleEmailSubmit
              }
            >
              <div className="input-container">
                <img src={email_icon} alt="" className="input-icon" />
                <input
                  name='email'
                  placeholder='E-mail'
                  type='email'
                  className='email-input'
                />
              </div>
              {showContinueButton && (
                <button className='continue-button'>Continue</button>
              )}
            </form>
          )}
          {showPassword && (
            <form onSubmit={(e) => handlePasswordSubmit(e, login ? 'signin' : 'signup')}>
              <div className="input-container">
                <img src={password_icon} alt="" className="input-icon" />
                <input
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className='password-input'
                />
                <button className='continue-button'>{login ? 'Log In' : 'Create Account'}</button>
              </div>
            </form>
          )}
        </div>
        <div className="or-text">
          <p>or</p>
        </div>
        <div className="social-buttons">
          <div>
            <button className="social-button google-button" onClick={handleGoogleSignIn}>
              Continue with Google
            </button>
          </div>
          <div>
            <button className="social-button apple-button">
              Continue with Apple
            </button>
          </div>
          <div>
            <button className="social-button microsoft-button">
              Continue with Microsoft
            </button>
          </div>
          <div>
            <button className="social-button slack-button">
              Continue with Slack
            </button>
          </div>
        </div>
        <div className="forgot-password-link">
          <p>forgot password? </p>
          <button onClick={handleReset}>Reset password</button>
        </div>
        <div className="policy-links">
          <p>
            By signing up, you agree to our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterAndLogin;

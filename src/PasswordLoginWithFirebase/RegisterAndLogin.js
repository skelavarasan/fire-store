import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app, auth } from './FirebaseConfig'; // Import Firebase configuration
import { useNavigate } from 'react-router-dom';

import log from '../PasswordLoginWithFirebase/Assetsx/loginx.jpg';
import email_icon from '../PasswordLoginWithFirebase/Assetsx/email.png';
import password_icon from '../PasswordLoginWithFirebase/Assetsx/password.png';

import './PasswordLoginWithFirebase.css'; // Import the CSS

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const history = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const email = emailInput;
    const password = passwordInput;

    try {
      if (login) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      history('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Successfully signed in with Google:', result.user.email);
      history('/home');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };

  const handleReset = () => {
    // Implement the logic for resetting the user's password here
    // For example, you can navigate to a password reset page
    history('/password-reset');
  }

  return (
    <div className='app'>
      <div className='admk'>
        <img src={log} className='logo' alt='Logo' />
        <h1 className='app-title'>Task Management</h1>
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
          <form onSubmit={handleEmailSubmit} className='jus'>
            <div className="input-container">
              <img src={email_icon} alt="Email" className="input-icon" />
              <input
                type='email'
                name='email'
                placeholder='E-mail'
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className='email-input'
              />
            </div>
            <div className='password-input-container'>
              <img src={password_icon} alt="Password" className="input-icon" />
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className='password-input'
              />
            </div>
            <button type='submit' className='submit-button'>{login ? 'Log In' : 'Create Account'}</button>
          </form>
        </div>
        <div className="or-text">
          <p>or</p>
        </div>
        <div className="social-buttons">
          <button className="social-button google-button" onClick={handleGoogleSignIn}>
            Continue with Google
          </button>
          {/* Placeholder for other social sign-in buttons */}
          <button className="social-button apple-button">
            Continue with Apple
          </button>
          <button className="social-button microsoft-button">
            Continue with Microsoft
          </button>
          <button className="social-button slack-button" >
            Continue with Slack
          </button>
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











// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { app, auth } from './FirebaseConfig'; // Import Firebase configuration
// import { useNavigate } from 'react-router-dom';

// function RegisterAndLogin() {
//   const [login, setLogin] = useState(false);
//   const [emailInput, setEmailInput] = useState('');
//   const [passwordInput, setPasswordInput] = useState('');
//   const history = useNavigate();

//   const handleEmailSubmit = async (e) => {
//     e.preventDefault();
//     const email = emailInput;
//     const password = passwordInput;

//     try {
//       if (login) {
//         await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
//       history('/home');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();

//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log('Successfully signed in with Google:', result.user.email);
//       history('/home');
//     } catch (error) {
//       console.error('Error during Google sign-in:', error);
//     }
//   };

//   const handleSocialSignIn = (provider) => {
//     // Implement sign-in with other social providers here
//   };

//   return (
//     <div className="app">
//       <form onSubmit={handleEmailSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={emailInput}
//           onChange={(e) => setEmailInput(e.target.value)}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={passwordInput}
//           onChange={(e) => setPasswordInput(e.target.value)}
//         />
//         <button type="submit">{login ? 'Log In' : 'Create an Account'}</button>
//       </form>

//       <button onClick={() => setLogin(!login)}>
//         {login ? 'Create an Account' : 'Log In'}
//       </button>

//       <button onClick={handleGoogleSignIn}>Sign in with Google</button>
//       {/* Placeholder for other social sign-in buttons */}
//       <div className="social-buttons">
//         <button onClick={() => handleSocialSignIn('facebook')}>Sign in with Facebook</button>
//         <button onClick={() => handleSocialSignIn('twitter')}>Sign in with Twitter</button>
//         {/* Add more social buttons as needed */}
//       </div>
//     </div>
//   );
// }

// export default RegisterAndLogin;

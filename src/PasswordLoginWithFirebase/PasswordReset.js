import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import email_icon from '../PasswordLoginWithFirebase/Assetsx/email.png'; // Replace with the correct path to your email icon
import { auth } from './FirebaseConfig'; // Import the Firebase auth object

function PasswordReset() {
    const history = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null); // State to store error messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;

        // Check if the email is valid before sending the password reset email
        if (!emailVal || !emailVal.includes('@')) {
            setErrorMessage('Invalid email format');
        } else {
            sendPasswordResetEmail(auth, emailVal)
                .then(() => {
                    alert('Check your email for a password reset link.');
                    history('/');
                })
                .catch((error) => {
                    if (error.code === 'auth/user-not-found') {
                        setErrorMessage('Email does not exist.');
                    } else {
                        setErrorMessage(error.message);
                    }
                });
        }
    }

    return (
        <div className="app" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div className="container" style={{ width: '400px', padding: '30px', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', backgroundColor: 'white' }}>
                <div className="row">
                    <h1 className="custom-header" style={{ fontFamily: 'Pacifico, cursive', fontSize: '24px', color: 'blue', margin: '0', textTransform: 'uppercase', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Reset Your Password</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="input-container" style={{ display: 'flex', alignItems: 'center', width: '80%', margin: '0 auto' }}>
                            <img src={email_icon} alt="Email" className="input-icon" style={{ padding: '5px', height: '35px', width: '35px' }} />
                            <input
                                name='email'
                                type='email'
                                placeholder='E-mail'
                                style={{ width: '100%', padding: '15px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                            />
                        </div>
                        <button style={{ background: 'green', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Reset</button>
                    </form>
                    {errorMessage && (
                        <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PasswordReset;

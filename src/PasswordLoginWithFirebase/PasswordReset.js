import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

import email_icon from '../PasswordLoginWithFirebase/Assetsx/email.png'; // Replace with the correct path to your email icon
import { auth, database } from './FirebaseConfig'; // Import the Firebase auth object

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
            sendPasswordResetEmail(database, emailVal)
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
        <div className="app">
            <div className="container">
                <div className="row">
                    <h1 className="custom-header">Reset Your Password</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input name='email' type='email' placeholder='E-mail' /> <br />
                        <button>Reset</button>
                    </form>
                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PasswordReset;
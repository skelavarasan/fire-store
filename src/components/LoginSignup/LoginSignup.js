import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]); 
  const handleSignUp = () => {
    if (name && email && password) {
      const userData = {
        Name: name,
        Email: email,
        Password: password,
      };
      setUsers([...users, userData]); // 
      console.log(userData); // 
      alert('Account created');
     
      setName('');
      setEmail('');
      setPassword('');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleLogin = () => {
    if (email && password) {
      const user = users.find((user) => user.Email === email && user.Password === password);
      if (user) {
        alert('Welcome Bruh');
       
        setEmail('');
        setPassword('');
      } else {
        alert('Incorrect email or password');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? (
          <>
            <div className="input">
              <img src={email_icon} alt="" style={{ width: '50px', height: '50px' }} />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" style={{ width: '50px', height: '50px' }} />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="forgot-password">
              Lost Password? <span>Click me</span>
            </div>
          </>
        ) : (
          <>
            <div className="input">
              <img src={user_icon} alt="" style={{ width: '50px', height: '50px' }} />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={email_icon} alt="" style={{ width: '50px', height: '50px' }} />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" style={{ width: '50px', height: '50px' }} />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </>
        )}
      </div>

      <div className="submit-container">
        <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction('Sign Up')}>
          Sign Up
        </div>
        <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>
          Login
        </div>
      </div>

      {action === 'Sign Up' ? (
        <div className="submit" onClick={handleSignUp}>
          Sign Up
        </div>
      ) : (
        <div className="submit" onClick={handleLogin}>
          Login
        </div>
      )}
    </div>
  );
};

import { useHistory, Link } from "react-router-dom";
import { auth } from "./Firebase";
import React, { useState } from 'react';
import './App.css'; 


const Login = () => {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const { email, password } = state;

  const signIn = async (e) => {
    e.preventDefault();
    try {
      let response = await auth.signInWithEmailAndPassword(email, password);
      console.log(response, '###');
      alert('Succesfully Login, please continue')
      history.push('/timer');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onChange={onChange} onSubmit={signIn}>
        <h2>Login</h2>
        <input type='email' required name={'email'} placeholder="Email" className="input-field" />
        <input type='password' required name={'password'} placeholder="Password" className="input-field" />
        <button type='submit'>Login</button>
        <div style={{marginLeft:'387px'}}>
          <Link to='/register'  >Register</Link>
          </div>
      </form>
    </div>
  );
};

export default Login;

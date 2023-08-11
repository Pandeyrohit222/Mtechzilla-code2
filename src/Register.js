import { auth } from "./Firebase";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './App.css'; 

const Register = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setState((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const { email, password } = state;

  const signIn = async (e) => {
    e.preventDefault();
    try {
   let response=   await auth.createUserWithEmailAndPassword(
        email, password
      );
      console.log(response,'##')
      alert('Succesfully registered, please login to continue')
      
    } catch (error) {
      console.error(error);
      alert(error.message)
    }
  }

  return (
    <div className="register-container">
      <form className="register-form" onChange={onChange} onSubmit={signIn}>
        <input type='email' required name={'email'} placeholder="Email" />
        <input type='password' required name={'password'} placeholder="Password" />
        <button type='submit'>Register</button>
        <Link to='/'>Login</Link>
      </form>
    </div>
  );
};

export default Register;

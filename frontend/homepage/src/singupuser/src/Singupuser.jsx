import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      className='w-44 ml-52'
      clientId="1038606191602-deqg28kg6lqaphdff40hbv33qe0fqklu.apps.googleusercontent.com"
      buttonText="Signup with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

const Singupuser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [isLawyer, setIsLawyer] = useState(false); // State to track whether the user is a lawyer or not

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSignup = () => {
    const data = {
      email: email,
      
      password: password,
      
    };

    axios.post('http://127.0.0.1:8000/authh/users/', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleCheckboxChange = (e) => {
    setIsLawyer(e.target.checked);
  };

  return (
    <div className='flex flex-col w-screen m-auto h-screen font-quicksand overflow-x-hidden'>
      <div className='flex w-screen'>
        <div className='flex flex-col p-16 w-1/2 gap-5'>
          <img className='w-60' src="./elements/DZ-Mouhami.svg" alt="" />
          <div className='flex flex-col gap-5 ml-12'>
            <p className='font-bold text-3xl mt-4'>Sign up</p>
            <input
              className='h-10 p-4 border-2 w-80 ml-24'
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
             <input
              className='h-10 p-4 border-2 w-80 ml-24'
              type="name"
              placeholder="name"
              value={name}
              onChange={handleName}
            />
            <input
              className='h-10 p-4 border-2 w-80 ml-24'
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="flex items-center">
              <input
                className='h-5 w-5 ml-24'
                type="checkbox"
                checked={isLawyer}
                onChange={handleCheckboxChange}
              />
              <label className="ml-2">Are you a lawyer?</label>
            </div>
            <button className='w-44 bg-orange-400 hover:bg-orange-300 text-white font-bold ml-40' onClick={handleSignup}>Sign up</button>
            <img className='mr-10' src="./elements/fassel.svg" alt="" />
          </div>
          <GoogleLoginButton />
          <p className='ml-10 mt-10'>Already have an account? <Link to="/login">Login</Link></p>
        </div>
        <div className='bg-cover bg-center w-1/2' style={{ backgroundImage: `url('./elements/bgright.svg')`, height: '100%'}}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Singupuser;

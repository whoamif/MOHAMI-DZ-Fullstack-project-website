import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Footer from '../../src/Footer.jsx'


const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      className='w-44 ml-52'
      clientId="1038606191602-deqg28kg6lqaphdff40hbv33qe0fqklu.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <div className='flex flex-col w-screen m-auto font-quicksand overflow-x-hidden bg-red'>
      <div className='flex w-screen h-2/3'>
        <div className='flex flex-col p-16 w-1/2 gap-5 pl-32 '>
          <img className='w-60 ' src="./elements/DZ-Mouhami.svg" alt="" />
          <div className='flex flex-col ml-32 gap-5 '>
            <p className='font-bold text-3xl mt-4'>Login</p>
            <input
              className='h-10 p-4 border-2 w-80 ml-24'
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              className='h-10  p-4 border-2 rounded-sm w-80 ml-24'
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className='w-44 bg-orange-500 hover:bg-orange-100 text-white font-bold ml-40 ' onClick={handleLogin}>Login</button>
            <a className=' cursor-pointer ml-44 font-thin text-black hover:underline hover:text-black'>Forgot password?</a>
            <img src="./elements/fassel.svg" alt="" />
          </div>
          <GoogleLoginButton />

          <p className='ml-10 mt-10'>Don’t have an account? <a href="">Sign Up</a></p>
        </div>
        
                 
      
      </div>

       
      <Footer></Footer>
    </div>
  );
};

export default Login;



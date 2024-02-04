import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import Footer from '../../Footer.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next"; 
import toast from 'react-hot-toast';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (

    <GoogleLogin
      className='w-max'
      clientId="1038606191602-deqg28kg6lqaphdff40hbv33qe0fqklu.apps.googleusercontent.com"
      buttonText="Signup with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

const Singupuser = () => {
  const navigate = useNavigate() 
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setrep] = useState('');

  const [isLawyer, setIsLawyer] = useState(false); // State to track whether the user is a lawyer or not

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlerep = (e) => {
    setrep(e.target.value);
  };

  const handleSignup = () => {
    const data = {
      email: email,
      isLawyer: true,
      repassword: repassword,
      password: password,
    };
  
    axios.post('http://127.0.0.1:8000/auth/users/', data)
      .then(response => {
        console.log(response.data);
        toast.success("Signup successful wait until the admin approve your registregtion to entre the search engine ");
        navigate('/');
      })
      .catch(error => {
        console.log(error.request.response);
        toast.error("Error during signup", error.request.response.password);
      });
  };

  const handleCheckboxChange = (e) => {
    setIsLawyer(e.target.checked);
  };

  return (
    <div className='flex flex-col items-center w-screen m-auto h-screen font-quicksand overflow-x-hidden'>
      <div className='flex w-screen  justify-between items-center'>
        <div className='flex flex-col p-16 items-center gap-5 '>
        <Link to={"/"}><img className='w-60' src="./elements/DZ-Mouhami.svg" alt="" /></Link>  
          <div className='flex flex-col  gap-5 items-center'>
            <p className='font-bold text-3xl '>{t("signUp")}</p>
            <input
              className='h-10 p-4 border-2 w-80 '
              type="email"
              placeholder={t("email")}
              value={email}
              onChange={handleEmailChange}
            />
             <input
              className='h-10 p-4 border-2 w-80 '
              type="password"
              placeholder={t("password")}
              value={repassword}
              onChange={handlerep}
            />
            <input
              className='h-10 p-4 border-2 w-80 '
              type="password"
              placeholder={t("password")}
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="flex items-center">
              <input
                className='h-5 w-5 '
                type="checkbox"
                checked={isLawyer}
                onChange={handleCheckboxChange}
              />
              <label className="ml-2">{t("ll")}</label>
            </div>
            <button className='w-80 bg-orange-400 hover:bg-orange-300 text-white font-bold ' onClick={handleSignup}>{t("signUp")}</button>
          </div>
          <GoogleLoginButton />
          <p className=' mt-10'>{t("vous")}<Link to="/login" className='text-blue-700'>{t("Login")}</Link></p>
        </div>
        <div className='bg-cover bg-center w-1/2' style={{ backgroundImage: `url('./elements/bgright.svg')`, height: '100%'}}></div>
      </div>
      <Footer/>
    </div>
  );
};

export default Singupuser;

import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Footer from './Footer';

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

const App = () => {
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
    <div className='flex flex-col w-screen m-auto h-screen font-quicksand overflow-x-hidden'>
      <div className='flex w-screen'>
        <div  className='flex flex-col p-16 w-1/2 gap-5'>
        <img  className='w-60 ' src="./elements/DZ-Mouhami.svg" alt="" />
        <div className='flex flex-col gap-5 ml-12'>
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
          <button className='w-44 bg-orange-400 hover:bg-orange-300 text-white font-bold ml-40 ' onClick={handleLogin}>Login</button>
          <a className=' cursor-pointer ml-44 font-thin text-black hover:underline hover:text-black'>Forgot password?</a>
          <img src="./elements/fassel.svg" alt="" />
        </div>
        <GoogleLoginButton />

        <p className='ml-10 mt-10'>Don’t have an account? <a href="">Sign Up</a></p>
      </div>
      <div className='bg-cover bg-center w-1/2' style={{ backgroundImage: `url('./elements/bgright.svg')`, height: '100%'}}>

      </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default App;

/*import { useState } from "react";
import "./App.css";
import bg from "./assets/side-bg.jpg";
import google from "./assets/icons/Google.svg";
import { Link } from "react-router-dom";

/* import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react"; */

//function SignIn() {
  /*  const loginUser = async (email, password) => {
      try {
        const response = await axios.post("http://localhost:3000/user/login", {
          email: email,
          password: password,
        });
        console.log(response.data);
        const { token, user } = response.data;
        setToken(token);
        setUser(user);
  
        localStorage.setItem("token", token);
        <Link to={"/"} />;
        return { token, user };
      } catch (error) {
        // setErrors((prev) => {
         // return { ...prev, password: "incorrect password" };
        //}); 
        if (error.response.data.errors.email === "That email is not registered") {
          console.log("hey");
          setErrors((prev) => {
            return { ...prev, email: "That email is not registered" };
          });
        } else if (
          error.response.data.errors.password === "That password is incorrect"
        ) {
          setErrors((prev) => {
            return { ...prev, password: "incorrect password" };
          });
        }
  
        console.log(error.response.data.errors.email);
        return { error: error.response.data };
      }
    };
   */

  /* const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "Password must include at least one letter and one number"
      ),
  }); */

  const handleSubmit = async (values) => {
    // Handle form submission logic here
    console.log("Form values:", values);
    setErrors(null);

    /*  const { token, user, error } = await loginUser(
      values.email,
      values.password
    );

    if (error) {
      console.log("Login error:", error);
    } else {
      console.log("Login success:", user, token);
      // redirect to dashboard or some other page
    }
    if (error.email === 'incorrect email') {
      console.log('hey')
      setErrors((prev) => {
        return { ...prev, email: "That email is not registered" };
      });
    } else if (error.password === 'incorrect password') {
      setErrors((prev) => {
      return { ...prev, password: "incorrect password" };
    });
    } */
 {} };
  return (
    <div className=" flex h-screen ">
      {/* grandparent wrapper */}
      <div className=" basis-[60%] ">
        {/* left side bg */}
        <img src={bg} className=" bg- h-screen w-full object-cover" alt="" />
      </div>
      <div className=" basis-[40%] flex flex-col h-screen items-center">
        {/* right side */}
        <header className=" text-center m-auto">
          {/* Welcome */}
          <h1 className=" tracking-wider font-semibold text-3xl">
            Welcome Back !
          </h1>
          <small className=" text-gray-500">Please enter your details</small>
        </header>
        <form className=" basis-[60%] w-[65%]" action="">
          {/* form inputs */}
          <div className=" flex flex-col ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className=" border-b border-customDark rounded-sm outline-none px-1 py-1.5"
              placeholder="Ex: email_81194@gmail.com"
            />
          </div>

          <div className="flex flex-col mt-8">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              className=" border-b border-customDark rounded-sm outline-none px-1 py-1.5"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between mb-9 mt-4">
            {/* password actions */}
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className=" text-xs">
                Remember me
              </label>
            </div>

            <a className=" text-sm opacity-70 cursor-pointer">
              Forgot Password ?
            </a>
          </div>

          <div className="flex flex-col items-center gap-4  ">
            {/* login methods */}
            <button
              className=" bg-customDark rounded-full p-2.5 tracking-wider font-medium text-white w-full"
              type="submit"
            >
              Log in
            </button>
            <a
              href=""
              className=" bg-customGray rounded-full p-2.5 tracking-wider font-medium justify-center w-full flex gap-4 flex-shrink-0 min-w-max items-center"
            >
              <img src={google} className=" w-[5%] " alt="" />{" "}
              <span className=" min-w-max">Log in with Google</span>
            </a>
          </div>
        </form>
        <footer className=" basis-[10]">
          <span className=" text-sm opacity-70">Don't have an account?</span>{" "}
          <Link
            to={"/Signup"}
            className=" cursor-pointer text-sm font-semibold"
          >
            Sign up
          </Link>
        </footer>
      </div>
    </div>
  );/*}
//}

//export default SignIn;*/


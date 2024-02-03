import React, { useState,useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../Footer.jsx";
import axios from "axios";
import rightImg from "../elements/bgright.svg"



const handleLogin = (email, password, navigate) => {
  const data = {
    email: email,
    password: password,
  };

  axios
    .post("http://127.0.0.1:8000/auth/jwt/create/", data)
    .then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.access);
      navigate("/");
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
};

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (

    <GoogleLogin
      className="w-44 "
      clientId="1038606191602-deqg28kg6lqaphdff40hbv33qe0fqklu.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col  w-screen items-center font-quicksand overflow-x-hidden ">
      <div className="flex w-screen justify-between">
        <div className="flex flex-col items-center p-16 basis-[40%] gap-5 pl-32 ">
          <Link to={"/"}>
            <img className="w-60 " src="./elements/DZ-Mouhami.svg" alt="" />
          </Link>
          <div className="flex flex-col items-center  gap-5 ">
            <p className="font-bold text-3xl mt-4">{t("login")}</p>
            <input
              className="h-10 p-4 border-2 w-80 "
              type="email"
              placeholder={t("email")}
              value={email}
              onChange={handleEmailChange}
            />
            <input
              className="h-10  p-4 border-2 rounded-sm w-80 "
              type="password"
              placeholder={t("password")}
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              className="w-80 bg-orange-500 hover:bg-orange-100 text-white font-bold"
              onClick={() => handleLogin(email, password, navigate)}
            >
              {t("login")}
            </button>
            <a className=" cursor-pointer font-thin text-black hover:underline hover:text-black">
            {t("forgotPassword")}
            </a>
            <img src="./elements/fassel.svg" alt="" />
          </div>
          <GoogleLoginButton />
          <div className=" mt-10">
          {t("noAccou")}
          n{" "}
            <Link to={"/signup"} className="text-blue-500" href="">
            {t("singUp")}
             
            </Link>
            
          </div>
        </div>
        <img src={rightImg} className=" h-[40rem] " alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Login;

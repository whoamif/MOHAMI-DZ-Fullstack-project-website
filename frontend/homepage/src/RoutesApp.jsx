import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./login/src/Login.jsx";
import Singup from "./singup/src/Signup.jsx";
import Juridique from "./juridique/src/Juridique.jsx";
import Search from "./searchpage/src/Search.jsx";
import Profile from "./extra/components/Profile.jsx";
import Avocat from "./extra/components/Avocat.jsx";
import Singupuser from "./singupuser/src/Singupuser.jsx";
import Singuplawyer from "./singuplawyer/src/Singuplawyer.jsx";
import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import i18n from "../i18n.js";

export const searchContext = createContext();
const RoutesApp = () => {
  const { t } = useTranslation();
  const languageCode = i18n.language;
  useEffect(() => {
    document.documentElement.lang = languageCode;
    console.log(languageCode)
  }, [languageCode]);
  const [lawyers, setLawyers] = useState();
  useEffect(() => {
    let data1 = [];
    const handleNameSearch = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/search/?search=${""}`
        );
        data1 = response.data;
        console.log(data1);

        setLawyers(response.data);

        return data1;
      } catch (error) {
        console.error("Error searching by name:", error);
        throw error;
      }
    };
    handleNameSearch();
  }, []);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <searchContext.Provider
      value={{ searchResults, setSearchResults, setLawyers, lawyers }}
    >
      {" "}
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route
            path={"/avocat/:id"}
            element={<Avocat lawyers={lawyers} />}
          ></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/juridique" element={<Juridique />} />
          <Route path="/singupuser" element={<Singupuser />} />
          <Route path="/searchpage" element={<Search />} />
          <Route path="/singuplawyer" element={<Singuplawyer />} />
        </Routes>
      </BrowserRouter>
    </searchContext.Provider>
  );
};

export default RoutesApp;

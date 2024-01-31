import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './login/src/Login.jsx';
import Singup from './singup/src/Signup.jsx';
import Juridique from './juridique/src/Juridique.jsx';
import Search from './searchpage/src/Search.jsx';
import Profile from './extra/components/Profile.jsx';
import Avocat from './extra/components/Avocat.jsx';
import Singupuser from './singupuser/src/Singupuser.jsx'
import Singuplawyer from './singuplawyer/src/Singuplawyer.jsx'


const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/avocat' element={<Avocat/>}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/juridique" element={<Juridique />} />
        <Route path='/singupuser' element={<Singupuser/>}/>
        <Route path="/searchpage" element={<Search />} />
        <Route path='/singuplawyer' element={<Singuplawyer/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;

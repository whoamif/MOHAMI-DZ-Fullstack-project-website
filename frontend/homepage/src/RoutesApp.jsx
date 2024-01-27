import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from '../login/src/Login.jsx';
import Singup from '../singup/src/Signup.jsx';
import Juridique from '../juridique/src/Juridique.jsx';
import Search from '../searchpage/src/Search.jsx';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/juridique" element={<Juridique />} />
        <Route path="/searchpage" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;

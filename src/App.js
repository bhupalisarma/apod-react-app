import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NasaPhoto from "./Components/NasaPhoto";
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/nasaphoto" element={<NasaPhoto />}></Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

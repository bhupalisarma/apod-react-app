import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NasaPhoto from "./Components/NasaPhoto";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/nasaphoto" element={<NasaPhoto />}></Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

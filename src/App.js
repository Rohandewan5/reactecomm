import './App.css';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Register from './Routes/Register';
import Allreadyuser from './Routes/Allreadyuser';
import Addproduct from './Routes/Addproduct';
import Aboutus from './Routes/Aboutus';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Register />} path="/register" />
        <Route element={<Allreadyuser />} path="/login" />
        <Route element={<Addproduct />} path="/addproduct" />
        <Route element={<Aboutus />} path="/about" />
      </Routes>
    </div>
  );
}

export default App;

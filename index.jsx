
import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import "./server"
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from "./pages/VanDetail";

function App() {
  return (
   <BrowserRouter>
   <header>
    <Link to={"/"}>Vanlife</Link>
    <Link to={"/About"}>About</Link>
    <Link to={"/Vans"}>Vans</Link>
   </header>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/> 
    <Route path="/Vans" element={<Vans/>}/>
    <Route path="/Vans/:id" element={<VanDetail/>}/>
   </Routes>
   </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);

import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import "./server"
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from "./pages/VanDetail";
import Layout from "./Components/Layout";

function App() {
  return (
   <BrowserRouter>
   <Routes>

   <Route element={<Layout/>}>
   <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/> 
    <Route path="/Vans" element={<Vans/>}/>
    <Route path="/Vans/:id" element={<VanDetail/>}/>
    </Route>

   </Routes>
   
   
   </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
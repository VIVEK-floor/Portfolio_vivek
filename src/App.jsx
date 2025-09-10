import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { Routes,Route } from "react-router-dom";
import CertificatePage from "./components/CertificatePage";
import Ap from "./Ap";
import Resume from "./Resume";

function App() {
  return (
    <>
    <Routes>
          <Route path="/" element={<Ap/>}/>
    <Route path="/CertificatePage" element={ <CertificatePage/>}/>
        <Route path="/Resume" element={ <Resume/>}/>
    
    
    
    
    </Routes>
   
    
    </>
  );
}

export default App;

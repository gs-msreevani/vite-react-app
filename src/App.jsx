
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import Contact from "./components/Pages/Contact.jsx";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login.jsx";
import {useState} from "react";

function App() {

 const [isLoggedIn,setIsLoggedIn] = useState(false);


  return (
    <>
        <Navbar isLoggedIn={isLoggedIn}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </>
  )
}

export default App


import './App.css'
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import Contact from "./components/Pages/Contact.jsx";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login.jsx";
import Logout from "./components/Pages/Logout.jsx";

function App() {

  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/welcome" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/welcome" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            {/* navigate the route to homepage when invalid url is entered */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </>
  )
}

export default App

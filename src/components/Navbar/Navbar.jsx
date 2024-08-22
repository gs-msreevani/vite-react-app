import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({isLoggedIn})=>{
    return(
        <nav>
            <ul className="navbar_list">
                {isLoggedIn ?
                    (<>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                    </>
                    ):
                    (
                    <li><NavLink to='/login'>Login</NavLink></li>
                    )}
            </ul>
        </nav>
    )
}

export default Navbar;
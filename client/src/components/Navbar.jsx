import { NavLink } from "react-router-dom";
import "../styles/Atlas-logo.css";
import "./NavBar.css";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logoBrand">
            <NavLink to="/"><img src="/images/Atlas-Logo.png" alt="Atlas-Group-Logo" /></NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li>
                <NavLink to="/Services">Services</NavLink>
              </li> */}
              <li>
                <NavLink to="/Adminlogin">Admin</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;

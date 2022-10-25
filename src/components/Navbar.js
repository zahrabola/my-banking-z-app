import {useState} from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constatnts/Data";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);



  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="z-bank" className="z-bank" />
        </div>
        <div className="nav-container">
          <ul className="nav-menu">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className="nav-item ">
                <a href="#">{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="nav-icon">
            <img
              src={toggle ? close : menu}
              alt="menu-bank"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
      </nav>
      <div>
        <div className="nav-sb">
          {navLinks.map((nav) => (
            <div key={nav.id} className="nav-sb">
              <a href="#"className="sb">{nav.title}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );

        
};
export default Navbar;

import "./navbar.css"
import { Link } from "react-router-dom";

// This is a navbar that includes a logotype. and is included in every page. 
// When user clicks on the logotype the user gets redirect to home-page.

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navContainer">

      <Link  to ={"/"}>
        <span className="logo">Nottum Hotels</span>
        <div className="navItems">
        </div>
        </Link>

      </div>
    </div>
  )
}

export default Navbar;
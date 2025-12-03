import {NavLink} from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#222" }}>
      <NavLink to="/" className ="link" >Home</NavLink>
      <NavLink to="/About"  className ="link">About</NavLink>
      <NavLink to="/contact" className ="link">Contact</NavLink>
      <NavLink to="/dashboard" className ="link">Dashboard</NavLink>
    </nav>
  );
}
export default Navbar;
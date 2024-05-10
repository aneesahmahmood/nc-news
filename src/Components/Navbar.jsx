import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="navLink">
        All Articles
      </NavLink>
      <NavLink to="/topics" className="navLink">
        Topics
      </NavLink>
    </nav>
  );
}
export default NavBar;

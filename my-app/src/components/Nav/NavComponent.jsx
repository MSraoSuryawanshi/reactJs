import { Link, NavLink } from "react-router-dom";

function NavComponent() {
  return (
    <nav className="white" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="!#" className="brand-logo">
          Logo
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/" exact activeStyle={{ color: "green" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/home" exact activeStyle={{ color: "green" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/mobile" exact activeStyle={{ color: "green" }}>
              Mobiles
            </NavLink>
          </li>
          <li>
            <NavLink to="/lapi/1001" exact activeStyle={{ color: "green" }}>
              Laptops
            </NavLink>
          </li>
          <li>
            <NavLink to="/plants" exact activeStyle={{ color: "green" }}>
              Plants
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavComponent;

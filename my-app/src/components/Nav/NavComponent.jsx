import { Link } from "react-router-dom";

function NavComponent() {
  return (
    <nav className="white" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="!#" className="brand-logo">
          Logo
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/mobile">Mobiles</Link>
          </li>
          <li>
            <Link to="/lapi">Laptops</Link>
          </li>
          <li>
            <Link to="/plants">Plants</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavComponent;

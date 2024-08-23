import { Link } from "react-router-dom";

const Header = () => {
  
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  
  return (
    <header>
      <nav className="navbar justify-between bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="text-xl">
            Doctors Portal
          </Link>
        </div>
        <div className="dropdown dropdown-left dropdown-bottom">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItem}
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
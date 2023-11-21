// Header.jsx
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">David's Profile</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="font-bold"
              className="hover:text-gray-300"
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              activeClassName="font-bold"
              className="hover:text-gray-300"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="font-bold"
              className="hover:text-gray-300"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              activeClassName="font-bold"
              className="hover:text-gray-300"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
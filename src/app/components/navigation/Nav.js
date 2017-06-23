import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-menu">
        <ul className="nav-menu-items">
          <li>
            <NavLink exact activeClassName="nav-active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-active" to="/myProgram">
              My Program
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-active" to="/about">
              About
            </NavLink>
          </li>
        </ul>

      </div>
    );
  }
}

export default Nav;

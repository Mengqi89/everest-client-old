import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TokenService from '../../services/token-service';
import './NavBar.scss';
import logo from '../../assets/logo-everest-eie.png';


class NavBar extends Component {

  state = {
    prevScrollpos: window.pageYOffset,
    visible: true
  }


  componentDidMount() {

  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload();
  };

  renderLogoutLink() {
    return (
      <>
        <li>
          <NavLink to='/dashboard' >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/addProperty">
            <FontAwesomeIcon icon="plus" /> Property
          </NavLink>
        </li>
        <li>
          <NavLink to='/friends' >
            <FontAwesomeIcon icon="search" />{" "}
            Friends
          </NavLink>
        </li>
        <li onClick={this.handleLogoutClick}>
          Logout
        </li>
      </>
    );
  }

  renderLoginLink() {
    return (
      <>
        <li>
          <NavLink to="/about-us">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" id="register-btn">
            Register
          </NavLink>
        </li>
      </>
    );
  }

  render() {
    // const navClass = this.state.visible && this.state.prevScrollpos > 1 ? "NavBar back" : this.state.visible ? "NavBar" : "NavBar NavBar__hidden";
    const links = this.context.loggedIn ? this.renderLogoutLink() : this.renderLoginLink();
    return (
      <>

        <nav className="NavBar">
          <NavLink to="/">
            <h1>
              <img src={logo} alt="logo" id="logo" />
              EverestIntl
            </h1>
          </NavLink>
          <ul className="nav-links">
            {links}
          </ul>

        </nav>
      </>
    );
  }
}

export default NavBar;
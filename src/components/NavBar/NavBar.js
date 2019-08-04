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
          <NavLink to='/profile' >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/edit-school">
            <FontAwesomeIcon icon="plus" /> Edit Profile
          </NavLink>
        </li>
        <li onClick={this.handleLogoutClick} className="highlighted-btn">
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
          <NavLink to="/register" className="highlighted-btn">
            Register
          </NavLink>
        </li>
      </>
    );
  }

  render() {

    const links = TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink();
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

//checking user type in login and registration
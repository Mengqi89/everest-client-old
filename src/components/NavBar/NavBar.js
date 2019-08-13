import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service'
// import hasAuthToken from '../../services/token-service'
import './NavBar.scss';
import logo from '../../assets/logo-everest-eie.png'
// import { isThisSecond } from 'date-fns';
import UserContext from '../../contexts/UserContext'


class NavBar extends Component {
  static contextType = UserContext
  state = {
    prevScrollpos: window.pageYOffset,
    visible: true
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.context.setLoggedIn(true)
    }
  }

  componentDidUpdate() {
  }

  handleLogoutClick = () => {
    this.context.setLoggedIn(false)
    this.props.history.push('/')
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    const { userType } = this.context

    return (
      <>
        <li>
          <NavLink to='/profile' >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/edit-profile">
            Edit Profile
          </NavLink>
        </li>
        {userType === 'teacher' && <li>
          <NavLink to="/jobs">
            <FontAwesomeIcon icon="clipboard" /> View Jobs
          </NavLink>
        </li>}
        {userType === 'teacher' && <li>
          <NavLink to="/applications">
            <FontAwesomeIcon icon="clipboard" /> Applications
          </NavLink>
        </li>}
        {userType === 'school' && <li>
          <NavLink to="/postJob">
            <FontAwesomeIcon icon="clipboard" /> Post Job
          </NavLink>
        </li>}
        {userType === 'school' && <li>
          <NavLink to="/applications">
            <FontAwesomeIcon icon="clipboard" /> Applications
          </NavLink>
        </li>}
        {userType === 'admin' && <li>
          <NavLink to="/applications">
            <FontAwesomeIcon icon="clipboard" /> Applications
          </NavLink>
        </li>}
        <li onClick={this.handleLogoutClick} className="highlighted-btn">
          <NavLink to='/login'>
            Logout
          </NavLink>

        </li>
      </>
    )
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
          <NavLink to="/jobs">
            View Jobs
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
    const { loggedIn } = this.context
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
            {loggedIn ? this.renderLogoutLink() : this.renderLoginLink()}
          </ul>

        </nav>
      </>
    )
  }
}

export default withRouter(NavBar)

//checking user type in login and registration
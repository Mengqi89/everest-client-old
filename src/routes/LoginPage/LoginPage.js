import React, { Component } from 'react'
import './LoginPage.scss'
import LoginForm from '../../components/LoginForm/LoginForm'
import UserContext from '../../contexts/UserContext'

class LoginPage extends Component {
  static contextType = UserContext
  handleLoginSuccess = () => {
    this.context.setLoggedIn(true)
  }

  render() {
    return (
      <div className="LoginPage">
        <h2>Welcome back to Everest International Education</h2>
        <p>If you aleady have an account, please sign in below</p>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </div>
    )
  }
}

export default LoginPage
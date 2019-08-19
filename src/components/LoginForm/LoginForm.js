import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import TokenService from '../../services/token-service'
import SchoolApiService from '../../services/school-api-service'
import AdminApiService from '../../services/admin-api-service'
import './LoginForm.scss'
import TeacherApiService from '../../services/teacher-api-service'
import UserContext from '../../contexts/UserContext'

class LoginForm extends Component {
  static contextType = UserContext

  state = {
    userType: null,
    error: null
  }
  handleUserTypeChange = (ev) => {
    this.setState({
      userType: ev.target.value
    })
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target
    if (this.state.userType === 'school') {
      SchoolApiService.postLogin({
        username: username.value,
        password: password.value
      })
        .then(res => {
          username.value = ''
          password.value = ''

          TokenService.saveAuthToken(res.authToken)
          TokenService.saveUserType('school')
          this.context.setUserType('school')
          this.props.history.push('/profile')
        })
        .then(() => this.props.onLoginSuccess())
        .catch(res => {
          this.setState({ error: res.error })
        })
    }
    if (this.state.userType === 'admin') {
      AdminApiService.postLogin({
        username: username.value,
        password: password.value
      })
        .then(res => {
          username.value = ''
          password.value = ''

          TokenService.saveAuthToken(res.authToken)
          TokenService.saveUserType('admin')
          this.context.setUserType('admin')
          this.props.history.push('/profile')
        })
        .then(() => this.props.onLoginSuccess())
        .catch(res => {
          this.setState({ error: res.error })
        })
    }
    if (this.state.userType === 'teacher') {
      TeacherApiService.postLogin({
        username: username.value,
        password: password.value
      })
        .then(res => {
          username.value = ''
          password.value = ''
          TokenService.saveAuthToken(res.authToken)
          TokenService.saveUserType('teacher')
          this.context.setUserType('teacher')
          this.props.onLoginSuccess()
          this.props.history.push('/profile')
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
    }
  }

  render() {
    const { error } = this.state

    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <fieldset required>
          <legend htmlFor="account-type">I am a:</legend>
          <label htmlFor="teacher">Teacher</label>
          <input type="radio" id="teacher" name="account-type" value="teacher" onChange={this.handleUserTypeChange} />
          <label htmlFor="school">School</label>
          <input type="radio" id="school" name="account-type" value="school" onChange={this.handleUserTypeChange} />
          <label htmlFor="admin">Admin</label>
          <input type="radio" id="admin" name="account-type" value="admin" onChange={this.handleUserTypeChange} />
        </fieldset>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input required name="username" id="username" type="username" autoComplete="new-password" />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            autoComplete="new-password"
            required
            name="password"
            type="password"
            id="password"
          />
        </div>
        <button type="submit">Login</button>
      </form >
    )
  }
}

export default withRouter(LoginForm)
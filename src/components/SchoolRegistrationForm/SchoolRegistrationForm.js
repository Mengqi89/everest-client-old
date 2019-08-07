import React, { Component } from 'react'
import SchoolApiService from '../../services/school-api-service'
import TokenService from '../../services/token-service'

class SchoolRegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    schoolName: '',
    schoolType: ''
  }
  //onChange methods might be unnecessary -- Kyler
  handleUsernameUpdate = (ev) => {
    this.setState({ username: ev.target.value })
  }
  handlePasswordUpdate = (ev) => {
    this.setState({ password: ev.target.value })
  }
  handleSchoolNameUpdate = (ev) => {
    this.setState({ schoolName: ev.target.value })
  }
  handleSchoolTypeUpdate = (ev) => {
    this.setState({ schoolType: ev.target.value })
  }
  handleFormSubmit = (ev) => {
    ev.preventDefault()
    const { username, password, schoolName, schoolType } = this.state
    const newSchool = {
      username,
      password,
      school_name: schoolName,
      school_type: schoolType
    }
    SchoolApiService.postSchool(newSchool)
      .then(school => {
        SchoolApiService.postLogin({ username: school.username, password: password })
          .then(res => {
            TokenService.saveAuthToken(res.authToken)
            TokenService.saveUserType('school')
            this.props.history.push('/profile')
            window.location.reload()
          })
      })
  }
  render() {
    const { username, password, schoolName, schoolType } = this.state
    return (
      <div>
        <h2>Hello prospective school!</h2>
        <p>Let's get to know a little bit about your school</p>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="username">Enter a username</label>
          <input type="text" id="username" onChange={this.handleUsernameUpdate} />
          <label htmlFor="password">Choose a password</label>
          <input type="text" id="password" onChange={this.handlePasswordUpdate} />
          <label htmlFor="school-name" >What's your school's name?</label>
          <input type="text" id="school-name" onChange={this.handleSchoolNameUpdate} />
          <label htmlFor="school-type">What type of school are you?</label>
          <input type="text" id="school-type" onChange={this.handleSchoolTypeUpdate} />
          {username.length > 5 && password.length > 5 && schoolName.length > 3 && schoolType.length > 5 &&
            (
              <>
                <p>Thanks!</p>
                <button type="submit">Submit</button>
              </>
            )}
        </form>
      </div>
    );
  }
}

export default SchoolRegistrationForm
import React, { Component } from 'react'
import './RegistrationPage.scss'
import SchoolRegistrationForm from '../../components/SchoolRegistrationForm/SchoolRegistrationForm'
import AdminRegistrationForm from '../../components/AdminRegistrationForm/AdminRegistrationForm'
import TeacherRegistrationForm from '../../components/TeacherRegistrationForm/TeacherRegistrationForm'
import UserContext from '../../contexts/UserContext'

class RegistrationPage extends Component {
  static contextType = UserContext
  state = {
    accountType: null,
  }

  handleAccountTypeChange = (ev) => {
    this.setState({
      accountType: ev.target.value
    })
  }

  handleSubmitSuccess = () => {
    this.context.setLoggedIn(true)
  }

  render() {
    return (
      <section className="RegistrationPage">
        <h2>Welcome to Everest International Education</h2>
        <p>Sign up for an account below</p>
        <fieldset>
          <legend htmlFor="account-type">I am a</legend>
          <label htmlFor="teacher">Teacher</label>
          <input type="radio" id="teacher" name="account-type" value="teacher" onChange={this.handleAccountTypeChange} />
          <label htmlFor="teacher">School</label>
          <input type="radio" id="school" name="account-type" value="school" onChange={this.handleAccountTypeChange} />
          <label htmlFor="teacher">Admin</label>
          <input type="radio" id="admin" name="account-type" value="admin" onChange={this.handleAccountTypeChange} />
        </fieldset>
        {this.state.accountType === "school" && <SchoolRegistrationForm />}
        {this.state.accountType === "admin" && <AdminRegistrationForm />}
        {this.state.accountType === 'teacher' && <TeacherRegistrationForm onSubmitSuccess={this.handleSubmitSuccess} />}
      </section>
    )
  }
}

export default RegistrationPage
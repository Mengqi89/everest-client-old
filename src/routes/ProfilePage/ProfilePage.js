import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import SchoolProfile from '../../components/SchoolProfile/SchoolProfile'
import AdminProfile from '../../components/AdminProfile/AdminProfile'
import TeacherProfile from '../../components/TeacherProfile/TeacherProfile'

class ProfilePage extends Component {

  state = { userType: '' }

  componentDidMount() {
    const userType = TokenService.getUserType()
    this.setState({ userType })
  }
  render() {

    return (
      <section className="ProfilePage">
        {this.state.userType === 'admin' && <AdminProfile />}
        {this.state.userType === 'school' && <SchoolProfile />}
        {this.state.userType === 'teacher' && <TeacherProfile />}
      </section >
    );
  }
}

export default ProfilePage
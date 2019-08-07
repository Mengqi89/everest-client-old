import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import SchoolApiService from '../../services/school-api-service'
import AdminApiService from '../../services/admin-api-service'
import AdminProfile from '../../components/AdminProfile/AdminProfile'

class ProfilePage extends Component {
  state = {
    school: null,
    admin: null
  }

  componentDidMount() {
    const userType = TokenService.getUserType()
    if (userType === 'school') {
      SchoolApiService.getSchoolProfile()
        .then(school => this.setState({ school }))
    }
    if (userType === 'admin') {
      AdminApiService.getAdminProfile()
        .then(admin => this.setState({ admin }))
    }
  }
  render() {
    return (
      <section className="ProfilePage">
        {this.state.school !== null && this.state.school.school_name}
        {this.state.school !== null && this.state.school.school_type}

        {this.state.admin !== null && <AdminProfile admin={this.state.admin} />}


      </section >
    )
  }
}

export default ProfilePage
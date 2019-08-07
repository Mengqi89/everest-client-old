import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import SchoolApiService from '../../services/school-api-service'
import AdminApiService from '../../services/admin-api-service'
import UserContext from '../../contexts/UserContext';
import SchoolProfile from '../../components/SchoolProfile/SchoolProfile';

class ProfilePage extends Component {
  static contextType = UserContext
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
        {/* {this.state.school !== null && this.state.school.school_name}
        {this.state.school !== null && this.state.school.school_type}
        {this.state.admin !== null && this.state.admin.first_name}
        {this.state.admin !== null && this.state.admin.first_name} */}
        {this.context.userType === 'school' && <SchoolProfile />}
      </section >
    );
  }
}

export default ProfilePage;
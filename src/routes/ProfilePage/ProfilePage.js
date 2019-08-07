import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import SchoolApiService from '../../services/school-api-service'
// import AdminApiService from '../../services/admin-api-service'
import UserContext from '../../contexts/UserContext';
import SchoolProfile from '../../components/SchoolProfile/SchoolProfile';

class ProfilePage extends Component {
  static contextType = UserContext
  state = {
    school: null,
    admin: null
  }

  componentDidMount() {
    this.context.setUserType(TokenService.getUserType())
    //user context userType to make a call to endpoint to update user object in context
    if (this.context.userType === 'school') {
      //not working for some reason....
      SchoolApiService.getSchoolProfile()
        .then(profile => {

          this.context.setUser(profile)
        })
    }
  }
  render() {
    const { userType } = this.context;
    return (
      <section className="ProfilePage">
        {/* {this.state.school !== null && this.state.school.school_name}
        {this.state.school !== null && this.state.school.school_type}
        {this.state.admin !== null && this.state.admin.first_name}
        {this.state.admin !== null && this.state.admin.first_name} */}
        {userType === 'school' && <SchoolProfile />}

      </section >
    )
  }
}

export default ProfilePage
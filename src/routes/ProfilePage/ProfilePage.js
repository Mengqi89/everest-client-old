import React, { Component } from 'react'
import TokenService from '../../services/token-service'

// import AdminApiService from '../../services/admin-api-service'
import UserContext from '../../contexts/UserContext'
import SchoolProfile from '../../components/SchoolProfile/SchoolProfile'
import AdminProfile from '../../components/AdminProfile/AdminProfile'
import AdminApiService from '../../services/admin-api-service'
import SchoolApiService from '../../services/school-api-service';

class ProfilePage extends Component {
  static contextType = UserContext
  // state = {
  //   school: null,
  //   admin: null
  // }

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
    if (this.context.userType === 'admin') {
      AdminApiService.getAdminProfile()
        .then(profile => {
          this.context.setUser(profile)
        })
    }
  }
  render() {
    const { userType } = this.context
    return (
      <section className="ProfilePage">

        {userType === 'admin' && <AdminProfile />}
        {userType === 'school' && <SchoolProfile />}
      </section >
    );
  }
}

export default ProfilePage;
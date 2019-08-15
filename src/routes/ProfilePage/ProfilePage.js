import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import SchoolProfile from '../../components/SchoolProfile/SchoolProfile';
import AdminProfile from '../../components/AdminProfile/AdminProfile';


class ProfilePage extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.context.setUserType(TokenService.getUserType());

  }
  render() {
    const { userType } = this.context;
    return (
      <section className="ProfilePage">
        {userType === 'admin' && <AdminProfile />}
        {userType === 'school' && <SchoolProfile />}
        {userType === 'teacher' && <div>Teacher</div>}
      </section>
    );
  }
}

export default ProfilePage;

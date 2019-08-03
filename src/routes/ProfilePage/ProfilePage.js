import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import SchoolApiService from '../../services/school-api-service';

class ProfilePage extends Component {
  state = {
    school: {

    }
  }

  componentDidMount() {
    const userType = TokenService.getUserType()
    if (userType === 'school') {
      SchoolApiService.getSchoolProfile()
        .then(school => this.setState({ school }))
    }
  }
  render() {
    return (
      <section className="ProfilePage">
        Profile
      </section >
    );
  }
}

export default ProfilePage;
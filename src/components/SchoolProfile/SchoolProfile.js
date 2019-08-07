import React, { Component } from 'react';
import SchoolApiService from '../../services/school-api-service';
import './SchoolProfile.scss';
import UserContext from '../../contexts/UserContext';

class SchoolProfile extends Component {
  static contextType = UserContext


  componentDidMount() {
    SchoolApiService.getSchoolProfile()
      .then(profile => {
        this.context.setUser(profile)
      })
  }

  checkSchoolUserObjectForNull = (schoolUser) => {
    Object.keys(schoolUser).forEach(key => {
      if (!schoolUser[key]) {
        return false
      }
    })
    return true;
  }

  render() {
    const { user } = this.context
    return (
      <div className="SchoolProfile">
        <h2>School Info</h2>
        <ul>
          <li>Name: {user.school_name}</li>
          <li>Type: {user.school_type}</li>
          {user.school_size && <li>Size: {user.school_size}</li>}
          {user.public_or_private && <li>Public or private: {user.public_or_private}</li>}
          {user.curriculum && <li>Curriculum: {user.curriculum}</li>}
          {user.location && <li>Location: {user.location}</li>}
          {user.notable_facts && <li>Notable facts: {user.notable_facts}</li>}
        </ul>
        {this.checkSchoolUserObjectForNull && <p>Your profile is incomplete edit profile below to complete!</p>}
        <a href="/edit-profile">Edit Profile</a>
      </div>
    );
  }
}

export default SchoolProfile;
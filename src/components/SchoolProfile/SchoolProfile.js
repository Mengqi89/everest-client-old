import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SchoolApiService from '../../services/school-api-service';
import './SchoolProfile.scss';

class SchoolProfile extends Component {
  state = {
    school: {

    }
  }
  componentDidMount() {
    SchoolApiService.getSchoolProfile()
      .then(school => this.setState(school))
  }
  render() {
    const school = this.state
    return (
      <div className="SchoolProfile">
        <h2>School Info</h2>
        <ul>
          <li>Name: {school.school_name}</li>
          <li>Type: {school.school_type}</li>
          {school.school_size && <li>Size: {school.school_size}</li>}
          {school.public_or_private && <li>Public or private: {school.public_or_private}</li>}
          {school.curriculum && <li>Curriculum: {school.curriculum}</li>}
          {school.location && <li>Location: {school.location}</li>}
          {school.notable_facts && <li>Notable facts: {school.notable_facts}</li>}
        </ul>
        <p>Add more info to school</p>
        <NavLink to="/edit-profile">Edit Profile</NavLink>
      </div>
    );
  }
}

export default SchoolProfile;
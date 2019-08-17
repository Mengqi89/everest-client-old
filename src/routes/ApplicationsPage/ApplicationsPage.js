import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';
import AdminApplications from '../../components/AdminApplications/AdminApplications';
import SchoolApplications from '../../components/SchoolApplications/SchoolApplications';
import TeacherApplications from '../../components/TeacherApplications/TeacherApplications'
import './ApplicationsPage.scss'

class ApplicationsPage extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.context.setUserType(TokenService.getUserType());
  }
  render() {
    const { userType } = this.context;
    return (
      <div className="ApplicationsPage">
        <h2>View Applications</h2>
        {userType === 'admin' && <AdminApplications />}
        {userType === 'school' && <SchoolApplications />}
        {userType === 'teacher' && <TeacherApplications />}
      </div>
    );
  }
}

export default ApplicationsPage;

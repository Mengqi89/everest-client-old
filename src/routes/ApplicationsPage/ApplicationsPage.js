import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';
import AdminApplications from '../../components/AdminApplications/AdminApplications';
import SchoolApplications from '../../components/SchoolApplications/SchoolApplications';

class ApplicationsPage extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.context.setUserType(TokenService.getUserType());
  }
  render() {
    const { userType } = this.context;

    return (
      <div className="ApplicationsPage">
        {userType === 'admin' && <AdminApplications />}
        {userType === 'school' && <SchoolApplications />}
      </div>
    );
  }
}

export default ApplicationsPage;

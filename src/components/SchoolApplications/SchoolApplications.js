import React, { Component } from 'react';
import ApplicationApiService from '../../services/application-api-service';
import ApplicationCardsList from '../../routes/ApplicationCardsList/ApplicationCardsList';
import UserContext from '../../contexts/UserContext';

class SchoolApplications extends Component {
  static contextType = UserContext;

  componentDidMount() {
    ApplicationApiService.getApplicationsForSchool().then(applications =>
      this.context.setApplications(applications)
    );
  }
  render() {
    const { applications } = this.context;
    return (
      <div className="SchoolApplications">
        {applications.length && <ApplicationCardsList />}
      </div>
    );
  }
}

export default SchoolApplications;

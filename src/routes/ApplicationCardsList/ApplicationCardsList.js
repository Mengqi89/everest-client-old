import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

class ApplicationCardsList extends Component {
  static contextType = UserContext;
  render() {
    const { applications } = this.context;
    // console.log('applications', applications);
    const applicationCards = applications.map((application, index) => (
      <div className="ApplicationCard" key={index}>
        <Link
          to={{
            pathname: `/applications/${application.id}`
          }}
        >
          <div>Job Title: {application.job_title}</div>
        </Link>
      </div>
    ));
    return <div className="ApplicationCardsList">{applicationCards}</div>;
  }
}

export default ApplicationCardsList;

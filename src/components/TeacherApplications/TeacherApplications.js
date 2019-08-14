import React, { Component } from 'react';
import ApplicationCardsList from '../../routes/ApplicationCardsList/ApplicationCardsList';
import ApplicationApiService from '../../services/application-api-service';
import UserContext from '../../contexts/UserContext';

class AdminApplications extends Component {
    static contextType = UserContext;

    componentDidMount() {
        ApplicationApiService.getApplicationsForTeacher().then(applications => {
            this.context.setApplications(applications);
        });
    }
    render() {
        const { applications } = this.context;

        return (
            <div className="TeacherApplications">
                {applications.length && <ApplicationCardsList />}            </div>
        );
    }
}

export default AdminApplications;

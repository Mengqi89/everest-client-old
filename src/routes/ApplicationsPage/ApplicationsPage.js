import React, { Component } from 'react'
import ApplicationApiService from '../../services/application-api-service'
import UserContext from '../../contexts/UserContext'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'


class ApplicationsPage extends Component {
    static contextType = UserContext

    componentDidMount() {
        this.context.setUserType(TokenService.getUserType())
        const { userType } = this.context
        if (userType === 'admin') {
            return ApplicationApiService.getAllApplications()
                .then(applications => this.context.setApplications(applications))
        }
        else if (userType === 'school') {
            const { id } = this.context.user
            return ApplicationApiService.getApplicationsForSchool(id)
                .then(applications => this.context.setApplications(applications))
        }

    }
    render() {
        const { applications } = this.context
        console.log(applications)
        const applicationCards = applications.map((application, index) =>
            <Link key={index} to={{
                pathname: `/applications/${application.application_id}`
            }}>
                <div>
                    Job Title: {application.job_title}
                </div>
            </Link >
        )
        return (
            <div>
                {applicationCards}
            </div>
        )
    }
}

export default ApplicationsPage


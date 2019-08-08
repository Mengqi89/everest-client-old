import React, { Component } from 'react'
import ApplicationApiService from '../../services/application-api-service'
import UserContext from '../../contexts/UserContext'
import { Link } from 'react-router-dom'


class ApplicationsPage extends Component {
    static contextType = UserContext


    componentDidMount() {
        ApplicationApiService.getAllApplications()
            .then(applications => this.context.setApplications(applications))
    }
    render() {
        //applications are joined tables between everest_teachers and everest_jobs
        //everest_jobs needs a key 
        const { applications } = this.context
        console.log(applications)
        //need to build endpoint for GetApplicationById
        const applicationCards = applications.map((application, index) => <Link key={index} to={{
            pathname: `/${application.job}/${application.teacher}`
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


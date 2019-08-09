import React, { Component } from 'react'
import ApplicationApiService from '../../services/application-api-service'
import './Application.css'

class Application extends Component {

    state = {
        application: null
    }

    approveApplication = (ev, applicationId) => {
        ev.preventDefault()
        ApplicationApiService.approveApplication(applicationId)
            .then(numRowsAffected => ApplicationApiService.getApplicationById(applicationId)
                .then(application => this.setState({ application })))
    }

    deleteApplication = (ev) => {
        ev.preventDefault()
        console.log("application deleted")
    }

    componentDidMount() {
        const { applicationId } = this.props.match.params
        ApplicationApiService.getApplicationById(applicationId)
            .then(application => this.setState({ application }))
    }

    render() {
        const application = this.state.application !== null ? this.state.application[0] : {}

        return (
            <div>
                <div className="application">
                    <div className="school-profile">
                        <h3>School Profile</h3>
                        <div>Name: {application.school_name}</div>
                        <div>Job Title: {application.job_title}</div>
                        <div>Free Housing: {application.apartment_provided === true ? "Yes" : "No"}  </div>
                    </div>
                    <div className="teacher-profile">
                        <h3>Teacher Profile</h3>
                        <div>Name: {application.first_name} {application.last_name}</div>
                        <div>Age: {application.age}</div>
                    </div>
                </div>
                <div className="application-status">Application #{application.id} Status: {application.application_approved === true ? "Approved" : "Pending Approval"} </div>
                <button onClick={(ev) => this.approveApplication(ev, application.id)}>Approve</button>
                <button onClick={this.deleteApplication}>Delete</button>
            </div>

        )
    }
}

export default Application
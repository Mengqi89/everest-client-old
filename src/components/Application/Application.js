import React, { Component } from 'react'
import ApplicationApiService from '../../services/application-api-service'
import './Application.css'
import UserContext from '../../contexts/UserContext'
import TokenService from '../../services/token-service'


class Application extends Component {
    static contextType = UserContext

    state = {
        application: null
    }

    renderApproveButton() {
        const application = this.state.application !== null ? this.state.application[0] : {}
        console.log(application)
        if (this.context.userType === "admin") {
            return (application.application_approved === false
                ? <button onClick={(ev) => this.toggleAppApproval(ev, application.id, application.application_approved)}>Approve</button>
                : <button onClick={(ev) => this.toggleAppApproval(ev, application.id, application.application_approved)}>Disaprove</button>)
        }
    }

    toggleAppApproval = (ev, applicationId, approvalStatus) => {
        ev.preventDefault()
        const approvalObj = {
            approvalStatus: approvalStatus
        }
        ApplicationApiService.toggleAppApproval(applicationId, approvalObj)
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
        this.context.setUserType(TokenService.getUserType())
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

                {this.renderApproveButton()}

                <button onClick={this.deleteApplication}>Delete</button>
            </div>

        )
    }
}

export default Application
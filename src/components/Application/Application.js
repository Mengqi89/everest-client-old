import React, { Component } from 'react'
import ApplicationApiService from '../../services/application-api-service'

class Application extends Component {

    state = {
        application: {}
    }

    componentDidMount() {
        const { jobId, teacherId } = this.props.match.params
        ApplicationApiService.getApplicationById(jobId, teacherId)
            .then(application => this.setState({ application }))
    }

    render() {
        return (
            <div>
                Job Title: {this.state.application.job_title}
                Teacher Age: {this.state.application.age}
            </div>
        )
    }
}

export default Application
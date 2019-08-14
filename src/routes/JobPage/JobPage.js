import React, { Component } from 'react'
import JobsContext from '../../contexts/JobsContext'
import JobContainer from '../../components/JobContainer/JobContainer'

import JobsApiService from '../../services/jobs-api-service'

class JobPage extends Component {
    static contextType = JobsContext

    componentDidMount() {
        JobsApiService.getJobs()
            .then(jobs => {
                this.context.setJobsData(jobs)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return(
            <>
                <JobContainer/>
            </>
        )
    }
}

export default JobPage
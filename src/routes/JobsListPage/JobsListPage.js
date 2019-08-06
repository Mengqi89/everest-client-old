import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import JobsApiService from '../../services/jobs-api-service'
import Job from '../../components/Job/Job'
import JobSearch from '../../components/JobSearch/JobSearch'
import './JobsListPage.css'

class JobsListPage extends Component {
    state = {
        jobs: [],
        filteredJobs: []
      }
    
      componentDidMount() {
        // const userType = TokenService.getUserType()
        // if (userType === 'jobs') {
          JobsApiService.getJobs()
            .then(jobs => this.setState({
                jobs
            }))
        // }
      }

    // filterJobs = (event) => {
    //     event.preventDefault()
    //     console.log('got it')
    // }

    renderJobs = () => {
        const { jobs } = this.state
        return (            
            jobs.map(job => (
                <div className='jobs-container'> 
                    <Job
                        key={job.id}
                        title={job.job_title}
                        course={job.course}
                        totalSalary={job.total_salary}
                        gradeLevel={job.grade_level}
                    />
                </div>
        ))

        )
    }

    render() {
        return(
            <>
                <JobSearch
                //  handleSendFilter={this.filterJobs}
                />
                {this.renderJobs()}
            </>
        )
    }
}

export default JobsListPage
import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import JobsApiService from '../../services/jobs-api-service'
import Job from '../../components/Job/Job'
import JobSearch from '../../components/JobSearch/JobSearch'
import './JobsListPage.css'

class JobsListPage extends Component {
    state = {
        jobs: [],
        filteredJobs: [],
        filtered: false,
        keyword: '',
        location: '',
        payscale: '',
        grade: '',

      }
    
      componentDidMount() {
        // const userType = TokenService.getUserType()
        // if (userType === 'admin') {
          JobsApiService.getJobs()
            .then(jobs => this.setState({
                jobs,
                filtered: false
            }))

        // }
      }

    
    handleKeywordChange = (event) => {
        this.setState({
            // ...this.state,
            keyword: event
        })
        // console.log(event)
        
    }
    handleLocationChange = (event) => {
        this.setState({
            // ...this.state,
            location: event
        })
        // console.log(event)
    
        
    }
    handlePayscaleChange = (event) => {
        this.setState({
            // ...this.state,
            payscale: event
        })
        // console.log(event)
        
    }
    handleGradeLevelChange = (event) => {
        this.setState({
            ...this.state,
            grade: event
        })
        // console.log(event)
        
    }
    handleSendFilter = (event) => {
        event.preventDefault()
        const { keyword, location, payscale, grade, filteredJobs } = this.state
        const filters = { keyword, location, payscale, grade }

        // JobsApiService.getJobs()
        // .then(jobs => jobs.filter( jobs =>
        //     (keyword && Object.values(jobs).includes(keyword)) ||
        //     (location && Object.values(jobs).includes(location)) ||
        //     (payscale && (jobs.total_salary >= payscale)) 
        //     // (grade && (jobs.grade_level === grade)) 
            
        //     // (jobs.grade_level === grade)
        // ))
        // .then(filteredJobs => this.setState({
        //     filteredJobs,
        //     filtered: true,
        //     keyword: '',
        //     location: '',
        //     payscale: '',
        //     // grade: ''
        // }))
        // .catch()
        console.log(filters)
    }

    renderJobs = () => {
        const { jobs, filteredJobs, filtered } = this.state
        return (            
            ((filtered ) ? filteredJobs : jobs).map(job => (
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
                 handleKeywordChange={e => this.handleKeywordChange(e.target.value)}
                 handleLocationChange={e => this.handleLocationChange(e.target.value)}
                 handlePayscaleChange={e => this.handlePayscaleChange(e.target.value)}
                 handleGradeLevelChange={e => this.handleGradeLevelChange(e.target.value)}
                 handleSubmit={this.handleSendFilter}
                />
                {this.renderJobs()}
            </>
        )
    }
    
}

export default JobsListPage
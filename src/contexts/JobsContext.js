import React, { Component } from 'react'

const JobsContext = React.createContext({
        jobs: [],
        filteredJobs: [],
        filtered: false,
        keyword: '',
        salary: 0,
        hoursPerWeek: 0,
        gradeLevel: 0,
        schoolOwnership: 'any',
        location: '',
        error: null,
        setError: () => {},
        clearError: () => {},
        setJobsData: () => {},
        filterJobs: () => {},
        handleChange: () => {}, 
        addJob: () => {},
        removeJob: () => {},
})

export default JobsContext

export class JobsProvider extends Component {
    state = {
        jobs: [],
        filteredJobs: [],
        filtered: false,
        keyword: '',
        salary: 0,
        hoursPerWeek: 0,
        gradeLevel: 0,
        schoolOwnership: '',
        location: '',
        error: null
    }

    setError = error => {
        console.log(error)
        this.setState({ error })
    }

    clearError = error => {
        this.setState({ error: null})
    }

    addJob = (job) => {
        this.setState({
            jobs: [
                ...this.state.jobs,
                job
            ]
        })
    }
    
    removeJob = (jobId) => {
        const newJobs = this.state.jobs.filter(j => j.id !== jobId)
        this.setState({
            jobs: newJobs
        })
    }

    setJobsData = jobs => {
        
        this.setState({jobs})
  }

    // getAJob = slug => {
    //     let tempJobs = [...this.state.jobs]
    //     const job = tempJobs.find(job => job.slug === slug)
    //     return job
    // }
    handleChange = (event) => {
        const {value, name} = event.target
        console.log(value, name)
        this.setState(
            {
                [name]: value
            },
            this.filterJobs
        )
    }
    filterJobs = (event) => {
        event.preventDefault()
        console.log(event.target.salary.value)

        let { 
            jobs,
            filteredJobs, 
            keyword, 
            salary, 
            hoursPerWeek, 
            gradeLevel, 
            schoolOwnership, 
            location 
        } = this.state 
        // const {
        //     keyword,
        //     salary,
        //     gradeLevel,
        //     schoolOwnership,
        //     location
        // } = event.target
        //all jobs
        let tempJobs = [...jobs]

        //filter by salary
        if(salary !== 'all') {
            tempJobs = tempJobs.filter(job => job.salary >= salary)
        }
        //filter by hours per week
        if(hoursPerWeek !== 'all') {
            tempJobs = tempJobs.filter(job => job.hoursPerWeek >= hoursPerWeek)
        }
        //filter by grade level
        if(gradeLevel !== 'all') {
            tempJobs = tempJobs.filter(job => job.grade_level >= gradeLevel)            
        }
        // //filter by school ownership
        // if(schoolOwnership !== 'all') {
        //     tempJobs = tempJobs.filter(job => job.schoolOwnership === salary)            
        // }
        //filter by keyword
        if(keyword !== '') {

        }
        // //filter by location
        // if(location !== '') {

        // }
        

        // change state
        this.setState({
          filteredJobs: tempJobs
        })
      }

      render() {
          const value = {
            jobs: this.state.jobs,
            filteredJobs: this.state.filteredJobs,
            filtered: this.state.filtered,
            keyword: this.state.keyword,
            salary: this.state.salary,
            hoursPerWeek: this.state.hoursPerWeek,
            gradeLevel: this.state.gradeLevel,
            schoolOwnership: this.state.schoolOwnership,
            location: this.state.location,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setJobsData: this.setJobsData,
            filterJobs: this.filterJobs,
            handleChange: this.handleChange, 
            addJob: this.addJob,
            removeJob: this.removeJob,
          }
          return(
            <JobsContext.Provider value={value}>
                {this.props.children}
            </JobsContext.Provider>
          )
      }     
    
}


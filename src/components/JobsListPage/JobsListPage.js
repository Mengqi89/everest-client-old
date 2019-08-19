import React, { Component } from 'react'
import Job from '../Job/Job'


export default class JobsListPage extends Component {
    renderJobs() {
        const { jobs = [] } = this.props
        return jobs.map((job, index) => {
            return <Job key={index} {...job} />
        })
    }
    renderFilteredJobs() {
        const { filteredJobs = [] } = this.props
        return filteredJobs.map((job, index) => {
            return <Job key={index} {...job} />
        })
    }

    renderEmptyResults() {
        return (
            <>
                <h1>There were no jobs found!</h1>
            </>
        )
    }
    render() {
        const { filtered } = this.props
        return (
            <section className='jobslist'>
                <div className='jobslist-center'>
                    {(!!filtered) ? ((this.props.filteredJobs.length !== 0) ? this.renderFilteredJobs() : this.renderEmptyResults()) : this.renderJobs()}
                </div>
            </section>
        )

    }
}
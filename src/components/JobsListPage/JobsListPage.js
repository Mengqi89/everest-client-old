import React, { Component } from 'react'
import Job from '../Job/Job'


export default class JobListPage extends Component {
    renderJobs() {
        const { jobs = [] } = this.props;
        return (this.props.jobs && jobs).map((job, index) => {
            return <Job key={index} {...job} />
        })
        }
    render(){

        console.log(this.props.jobs)
        return (
            <section className='jobslist'>
                <div className='jobslist-center'>
                    {this.renderJobs()}
                </div>
            </section>
    )

}}
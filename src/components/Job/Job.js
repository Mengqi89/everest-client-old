import React, { Component } from 'react'
import './Job.css'


class Job extends Component {
    render() {
        return(
            <div className='job' key={this.props.job_id}>
                <img src="" alt="school"/>
                <ul>
                    <li>Position Title: {this.props.title}</li>
                    <li>Course Title: {this.props.course}</li>
                    <li>Total Salary: {this.props.totalSalary}</li>
                    <li>Grade level: {this.props.gradeLevel}</li>
                </ul>
                <button type='submit'>Apply</button>
            </div>
        )
    }
}

export default Job
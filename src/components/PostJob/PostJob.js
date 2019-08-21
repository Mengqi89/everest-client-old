import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import JobsApiService from '../../services/jobs-api-service'
import SchoolApiService from '../../services/school-api-service'
import './PostJob.scss'

class PostJobForm extends Component {
    static contextType = UserContext

    state = {
        job_title: '',
        course: '',
        grade_level: '',
        textbook_used: null,
        number_of_courses_to_teach: 0,
        number_of_sections: 0,
        max_class_size: 0,
        total_hours_of_class_per_week: 0,
        extra_duties_required: null,
        hours_of_extra_duties_per_week: 0,
        minimum_degree_required: '',
        preferred_degree: '',
        minimum_experience_required: '',
        preferred_experience_level: '',
        native_english_speaker: false,
        other_qualification: null,
        base_pay_per_month: 0,
        bonuses: false,
        plane_ticket_provided_to_china: false,
        plane_ticket_provided_from_china: false,
        plane_ticket_reimbursment: false,
        paid_time_off: false,
        sick_days: 0,
        personal_days: 0,
        time_off_for_holidays: false,
        total_salary: 0,
        job_school_id: 0
    }
    componentDidMount() {
        SchoolApiService.getSchoolProfile()
            .then(school => {
                this.setState({
                    job_school_id: school.id
                })
            })
    }

    handleSubmitJob = ev => {
        ev.preventDefault()
        const newJob = {
            ...this.state
        }

        JobsApiService.postJob(newJob)
            .then(res => {
                this.props.history.push('/jobs')
            })
            .catch(res => console.log(res))
    }
    handleUpdateInput = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }


    render() {
        return (
            <div className='PostJobForm'>
                <h2>Create New Job</h2>
                <form onSubmit={ev => this.handleSubmitJob(ev)}>
                    <label htmlFor='job_title'>What is the job title?</label>
                    <input required name='job_title' onChange={this.handleUpdateInput} type='text'></input>

                    <label htmlFor='course'>What is the name of the course?</label>
                    <input required name='course' onChange={this.handleUpdateInput} type='text'></input>

                    <label htmlFor='grade_level'>What is the grade level?</label>
                    <input required name='grade_level' onChange={this.handleUpdateInput} type='text'></input>

                    <label htmlFor='textbook_used'>What, if any, textbook will be used?</label>
                    <input name='textbook_used' onChange={this.handleUpdateInput} type='text'></input>

                    <label htmlFor='number_of_courses_to_teach'>How many courses?</label>
                    <input name='number_of_courses_to_teach' onChange={this.handleUpdateInput} type='number'></input>

                    <label htmlFor='number_of_sections'>How many sections are there for the course?</label>
                    <input name='number_of_sections' onChange={this.handleUpdateInput} type='number'></input>

                    <label htmlFor='max_class_size'>What is the maximum class size?</label>
                    <input name='max_class_size' onChange={this.handleUpdateInput} type='number'></input>

                    <label htmlFor='total_hours_of_class_per_week'>What are the total hours of class per week?</label>
                    <input name='total_hours_of_class_per_week' onChange={this.handleUpdateInput} type='number'></input>

                    <label htmlFor='extra_duties_required'>What, if any, are the required extra duties?</label>
                    <input name='extra_duties_required' onChange={this.handleUpdateInput} type='text'></input>

                    <label htmlFor='hours_of_extra_duties_per_week'>How many hours of extra duties per week?</label>
                    <input name='hours_of_extra_duties_per_week' onChange={this.handleUpdateInput} type='number'></input>

                    <label htmlFor='minimum_degree_required'>What is the minimum degree required?</label>
                    <input name='minimum_degree_required' onChange={this.handleUpdateInput} type='text'></input>

                    <label htmlFor='preferred_degree'>What is the preferred degree?</label>
                    <input name='preferred_degree' onChange={this.handleUpdateInput} type='text'></input>

                    <label htmlFor='minimum_experience_required'>What is the minimum experience required?</label>
                    <input name='minimum_experience_required' onChange={this.handleUpdateInput} type='number'></input>

                    <label htmlFor='preferred_experience_level'>What is the preferred experience level?</label>
                    <input name='preferred_experience_level' onChange={this.handleUpdateInput} type='number'></input>

                    <label htmlFor='native_english_speaker'>Is the applicant required to be a native english speaker?</label>
                    <select name='native_english_speaker' defaultValue="true" onChange={this.handleUpdateInput} >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <label htmlFor='other_qualification'>Is there any other required qualification?</label>
                    <input name='other_qualification' onChange={this.handleUpdateInput} type='text'></input>

                    <label htmlFor='base_pay_per_month'>What is the base pay per month?</label>
                    <input name='base_pay_per_month' onChange={this.handleUpdateInput} type='number'></input>

                    <label htmlFor='bonuses'>Are there any bonuses?</label>
                    <select name='bonuses' defaultValue="true" onChange={this.handleUpdateInput} >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <label htmlFor='total_salary'>What is the total salary including bonuses?</label>
                    <input required name='total_salary' onChange={this.handleUpdateInput} type='number'></input>

                    <label htmlFor='plane_ticket_provided_to_china'>Is the plane ticket to china provided?</label>
                    <select name='plane_ticket_provided_to_china' defaultValue="true" onChange={this.handleUpdateInput} >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <label htmlFor='plane_ticket_provided_from_china'>Is the plane ticket from china provided?</label>
                    <select name='plane_ticket_provided_from_china' defaultValue="true" onChange={this.handleUpdateInput} >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <label htmlFor='plane_ticket_reimbursment'>If the applicant must purchase their plane ticket, will it be reimbursed?</label>
                    <select name='plane_ticket_reimbursment' defaultValue="true" onChange={this.handleUpdateInput} >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <label htmlFor='paid_time_off'>Is there any paid time off?</label>
                    <select name='paid_time_off' defaultValue="true" onChange={this.handleUpdateInput} >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <label htmlFor='sick_days'>How many sick days are provided?</label>
                    <input name='sick_days' onChange={this.handleUpdateInput} type='number'></input>

                    <label htmlFor='personal_days'>How many personal days are provided?</label>
                    <input name='personal_days' onChange={this.handleUpdateInput} type='number'></input>

                    <label htmlFor='time_off_for_holidays'>Will there be time off for holidays?</label>
                    <select name='time_off_for_holidays' defaultValue="true" onChange={this.handleUpdateInput} >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default PostJobForm

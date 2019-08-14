import React from 'react'
import { Link } from 'react-router-dom'
import './Job.css'

export default function Job(props) {
   return(
        <section className='job'>
            <div>
                <img src="" alt="school"/>
               <section className='main-info'>
                    <ul>
                        <li>Job Title:  { props.job_title }</li>
                        <li>Course: { props.course }</li>
                        <li>Grade Level: { props.grade_level }</li>
                        <li>total salary: { props.total_salary }</li>
                        <li>minimum degree required: { props.minimum_degree_required }</li>
                        <li>minimum teaching experience required: { props.minimum_experience_required }</li>
                       <div className='more-details hidden'>
                            <li>Textbook Used: { props.textbook_used }</li>
                            <li>Number of courses to teach: { props.number_of_courses_to_teach }</li>
                            <li>Number of sections: { props.number_of_sections }</li>
                            <li>max class size: { props.max_class_size }</li>
                            <li>total hours of class per week: { props.total_hours_of_class_per_week }</li>
                            <li>extra duties required: { props.extra_duties_required }</li>
                            <li>hours of extra duties per week: { props.hours_of_extra_duties_per_week }</li>        
                            <li>preferred degree: { props.preferred_degree }</li>
                            <li>preferred experience_level: { props.preferred_experience_level }</li>
                            <li>native english speaker: { props.native_english_speaker }</li>
                            <li>other qualification: { props.other_qualification }</li>
                            <li>base pay per month: { props.base_pay_per_month }</li>
                            <li>bonuses: { props.bonuses }</li>
                            <li>plane ticket provided to china: { props.plane_ticket_provided_to_china }</li>
                            <li>plane ticket provided from china: { props.plane_ticket_provided_from_china }</li>
                            <li>plane ticket reimbursment: { props.plane_ticket_reimbursment }</li>
                            <li>paid time off: { props.paid_time_off }</li>
                            <li>sick days: { props.sick_days }</li>
                            <li>personal days: { props.personal_days }</li>
                            <li>time off for holidays: { props.time_off_for_holidays }</li>
                        </div>
                    </ul>  
                    <button>More details</button>
                </section>
                <button type='submit'>Apply</button>
            </div>
        </section>
    )
}


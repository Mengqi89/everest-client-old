import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import schoolJobImg from '../../assets/school-job-img.jpg'
import './Job.scss'

export default function Job(props) {
    function toggleHidden(){
        var element = document.querySelector(".more-details");
        element.classList.toggle("hidden");
    }
    const {job_id} = props
    const jobLink = `/jobs/${job_id}/apply`
   return(
        <section className='job'>
                <img src={schoolJobImg} alt="school"/>
               <section className='main-info'>
                    <ul job_id={props.job_id}>
                        <li>Job Title:  { props.job_title }</li>
                        <li>Course: { props.course }</li>
                        <li>Grade Level: { props.grade_level }</li>
                        <li>Salary: { props.total_salary }</li>
                        <li>Minimum degree desired: { props.minimum_degree_required }</li>
                        <li>Minimum teaching experience desired: { props.minimum_experience_required }</li>
                        <li>Location of school: { props.location }</li>
                       <div className='more-details hidden'>
                            <li>Textbook Used: { props.textbook_used }</li>
                            <li>Number of courses to teach: { props.number_of_courses_to_teach }</li>
                            <li>Number of sections: { props.number_of_sections }</li>
                            <li>Maximum class size: { props.max_class_size }</li>
                            <li>Total hours of class per week: { props.total_hours_of_class_per_week }</li>
                            <li>Extra duties required: { props.extra_duties_required }</li>
                            <li>Hours of extra duties per week: { props.hours_of_extra_duties_per_week }</li>        
                            <li>Preferred degree: { props.preferred_degree }</li>
                            <li>Preferred experience level: { props.preferred_experience_level }</li>
                            <li>Native english speaker: { props.native_english_speaker }</li>
                            <li>Other qualification: { props.other_qualification }</li>
                            <li>Base pay per month: { props.base_pay_per_month }</li>
                            <li>Bonuses: { props.bonuses }</li>
                            <li>Plane ticket provided to china: { props.plane_ticket_provided_to_china }</li>
                            <li>Plane ticket provided from china: { props.plane_ticket_provided_from_china }</li>
                            <li>Plane ticket reimbursment: { props.plane_ticket_reimbursment }</li>
                            <li>Paid time off: { props.paid_time_off }</li>
                            <li>Sick days: { props.sick_days }</li>
                            <li>Personal days: { props.personal_days }</li>
                            <li>Time off for holidays: { props.time_off_for_holidays }</li>
                        </div>
                    </ul>  
                    {/* <FontAwesomeIcon className='bounce arrowDown' icon={faArrowCircleDown} onClick={toggleHidden}>More details</FontAwesomeIcon> */}
                    <div className='arrow bounce'onClick={toggleHidden}></div>
                </section>
                <Link to={jobLink}>Apply</Link>
        </section>
    )
}


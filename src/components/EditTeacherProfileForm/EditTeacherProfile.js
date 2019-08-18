import React, { Component } from 'react'
import NationalityList from '../TeacherRegistrationForm/NationalityList'
import './EditTeacherProfile.scss'
import TeacherApiService from '../../services/teacher-api-service'
import UserContext from '../../contexts/UserContext'
import { withRouter } from 'react-router-dom'

class EditTeacherProfile extends Component {
    static contextType = UserContext

    componentDidMount() {
        this.context.setError(null)
        TeacherApiService.getTeacherProfile()
            .then(teacher => {
                this.context.setUser(teacher)
            })
            .catch(err => console.log(err))
    }

    onFormSubmit = (ev) => {
        ev.preventDefault()
        const { id } = this.context.user

        const { username, password, first_name, last_name, age, sex, race, nationality, native_speaker,
            married, highest_degree, field_of_degree, school, certification, years_of_experience,
            years_in_china, years_teaching_abroad } = ev.target

        const updatedTeacher = {
            username: username.value,
            password: password.value,
            first_name: first_name.value,
            last_name: last_name.value,
            age: age.value,
            sex: sex.value,
            race: race.value,
            nationality: nationality.value,
            native_speaker: native_speaker.value,
            married: married.value,
            highest_degree: highest_degree.value,
            field_of_degree: field_of_degree.value,
            school: school.value,
            certification: certification.value,
            years_of_experience: years_of_experience.value,
            years_in_china: years_in_china.value,
            years_teaching_abroad: years_teaching_abroad.value
        }

        TeacherApiService.updateTeacherProfile(id, updatedTeacher)
            .then(res => this.props.history.push('/profile'))
            .catch(err => this.context.setError(err))
    }

    render() {
        const { user, error } = this.context
        {console.log(user)}
        return (
            <div>
            <h1>Edit Teacher Profile</h1>
                
                <form className='form edit-teacher' onSubmit={(ev) => this.onFormSubmit(ev)}>
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>

                    <label htmlFor='teacher-username'>Enter a Username</label>
                    <input id='teacher-usernmae' type='text' name='username' defaultValue={user.username} required></input>

                    <label htmlFor='teacher-password'>Enter a Password</label>
                    <input id='teacher-password' type='password' 
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more 
                    characters" name='password' placeholder='please enter password' required></input>

                    <label htmlFor='teacher-firstname'>First Name</label>
                    <input id='teacher-firstname' type='text' name='first_name' defaultValue={user.first_name} required></input>

                    <label htmlFor='teacher-lastname'>Last Name</label>
                    <input id='teacher-lastname' type='text' name='last_name' defaultValue={user.last_name} required></input>

                    <label htmlFor='teacher-age'>Age</label>
                    <input id='teacher-age' type='number' name='age' defaultValue={user.age} required></input>
                            
                    <label htmlFor='teacher-sex'>Gender</label>
                    <select id='teacher-sex' name='sex' defaultValue={user.sex} required>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Gender Neutral'>Gender-Neutral</option>
                    </select>

                    <label htmlFor='teacher-nationality'>Nationality</label>
                    <NationalityList id='teacher-nationality' nationality={user.nationality}/>

                    <label htmlFor='race'>Ethnicity</label>
                    <select id='race' name='race' defaultValue={user.race} required>
                        <option value="" disabled>--select one--</option>
                        <option value='African American'>African American</option>
                        <option value='Asian'>Asian</option>
                        <option value='Native American'>Native American</option>
                        <option value='Latino'>Latino</option>
                        <option value='Pacific Islander'>Pacific Islander</option>
                        <option value='Multiracial'>Multiracial</option>
                        <option value='White'>White</option>
                        <option value='Other'>Other</option>
                    </select>

                    <label htmlFor='teacher-native-speaker'>Are You A Native Speaker?</label>
                    <select id='teacher-native-speaker' name='native_speaker' defaultValue={user.native_speaker} required>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>

                    <label htmlFor='teacher-married'>Marraige Satus</label>
                    <select id='teacher-married' name='married' defaultValue={user.married} required>
                        <option value="" disabled>--select one--</option>
                        <option value='Married'>married</option>
                        <option value='Single'>single</option>
                    </select>

                    <label htmlFor='teacher-education'>Education</label>
                    <select id="teacher-education" name="highest_degree" defaultValue={user.highest_degree} required>
                        <option value="" disabled="disabled">-- select one --</option>
                        <option value="No formal education">No formal education</option>
                        <option value="Primary education">Primary education</option>
                        <option value="Secondary education">Secondary education or high school</option>
                        <option value="GED">GED</option>
                        <option value="Vocational qualification">Vocational qualification</option>
                        <option value="BA">Bachelor's degree</option>
                        <option value="Master's degree">Master's degree</option>
                        <option value="Doctorate or higher">Doctorate or higher</option>
                    </select>

                    <label htmlFor='teacher-degree'>Degree</label>
                    <select id='teacher-degree' name='field_of_degree' defaultValue={user.field_of_degree} required>
                        <option value='No Degree'>No Degree</option>
                        <option value='English'>English</option>
                        <option value='Business'>Business</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Accounting'>Accounting</option>
                        <option value='Other'>Other</option>
                    </select>

                    <label htmlFor='teacher-school'>School Attended</label>
                    <input id='teacher-school' type='text' name='school' defaultValue={user.school}required></input>

                    <label htmlFor='teacher-certification'>Certification</label>
                    <select id='teacher-certification' name='certification' defaultValue="None" required>
                        <option value='None'>None</option>
                        <option value='TEFL'>TEFL</option>
                        <option value='TESOL'>TESOL</option>
                        <option value='TEFL/TESOL'>TEFL/TESOL</option>
                    </select>

                    <label htmlFor='teacher-experience'>Years Of Experience</label>
                    <select id='teacher-experience' name='years_of_experience' defaultValue={user.years_of_experience} required>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3+</option>
                    </select>

                    <label htmlFor='teacher-experience-inChina'>Years Of Experience Teaching In China</label>
                    <select id='teacher-experience-inChina' name='years_in_china' defaultValue={user.years_in_china} required>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3+</option>
                    </select>

                    <label htmlFor='teacher-experience-notChina'>Years Of Experience Teaching - Other Countries</label>
                    <select id='teacher-experience-notChina' name='years_teaching_abroad' defaultValue={user.years_teaching_abroad} required>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3+</option>
                    </select>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(EditTeacherProfile)
import React from 'react'
import NationalityList from './NationalityList';
import './TeacherRegistrationForm.css'

export default function TeacherRegistrationForm() {

    const handleSubmit = ev => {
        ev.preventDefault()
        console.log('submitted')

    }

    return (
        <section>
            <h3>Your teaching experience in China begins here!</h3>
            <form className='form teacher-registration' onSubmit={handleSubmit}>
                <label for='teacher-username'>Enter a Username</label>
                <input id='teacher-usernmae' type='text' name='username' required></input>

                <label for='teacher-password'>Enter a Password</label>
                <input id='teacher-password' type='password' pattern="(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more 
                characters" required></input>

                <label for='teacher-firstname'>First Name</label>
                <input id='teacher-firstname' type='text' name='firstName' required></input>

                <label for='teacher-lastname'>Last Name</label>
                <input id='teacher-lastname' type='text' name='lastName' required></input>

                <label for='teacher-age'>Age</label>
                <input id='teacher-age' type='number' name='age' required></input>

                <label for='teacher-sex'>Gender</label>
                <select id='teacher-sex' required>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='genderNeutral'>Gender-Neutral</option>
                </select>

                <label for='teacher-nationality'>Nationality</label>
                <NationalityList id='teacher-nationality'/>

                <label for='teacher-married'>Marraige Satus</label>
                <select id='teacher-married' required>
                    <option value="" selected disabled>--select one--</option>
                    <option value='married'>married</option>
                    <option value='single'>single</option>
                </select>

                <label for='teacher-education'>Education</label>
                <select id="teacher-education" name="highestDegree" required>
                    <option value="" selected="selected" disabled="disabled">-- select one --</option>
                    <option value="No formal education">No formal education</option>
                    <option value="Primary education">Primary education</option>
                    <option value="Secondary education">Secondary education or high school</option>
                    <option value="GED">GED</option>
                    <option value="Vocational qualification">Vocational qualification</option>
                    <option value="Bachelor's degree">Bachelor's degree</option>
                    <option value="Master's degree">Master's degree</option>
                    <option value="Doctorate or higher">Doctorate or higher</option>
                </select>

                <label for='teacher-degree'>Degree</label>
                <select id='teacher-degree' name='feildOfDegree' required>
                    <option value='noDegree' selected>No Degree</option>
                    <option value='english'>English</option>
                    <option value='business'>Business</option>
                    <option value='marketing'>Marketing</option>
                    <option value='account'>Accounting</option>
                    <option value='other'>Other</option>
                </select>

                <label for='teacher-school'>School Attended</label>
                <input id='teacher-school' type='text' name='school' required></input>

                <label for='teacher-certification'></label>
                <select id='teacher-certification' required>
                    <option value='none'>None</option>
                    <option value='tefl'>TEFL</option>
                    <option value='tesol'>TESOL</option>
                    <option value='tefl/tesol'>TEFL/TESOL</option>
                </select>

                <label for='teacher-experience'>Years Of Experience</label>
                <select id='teacher-experience' name='yearsOfTeachingExperience' required>
                    <option value='0' selected>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    {/* need to change teacher table YOE to text not number to be able to have 3+ */}
                    <option value='3'>3+</option>
                </select>

                <label for='teacher-experience-inChina'>Years Of Experience Teaching In China</label>
                <select id='teacher-experience-inChina' name='yearsInChina' required>
                    <option value='0' selected>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    {/* need to change teacher table YOE to text not number to be able to have 3+ */}
                    <option value='3'>3+</option>
                </select>

                <label for='teacher-experience-notChina'>Years Of Experience Teaching - Other Countries</label>
                <select id='teacher-experience-notChina' name='yearsTeachingAbroad' required>
                    <option value='0' selected>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    {/* need to change teacher table YOE to text not number to be able to have 3+ */}
                    <option value='3'>3+</option>
                </select>

                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}
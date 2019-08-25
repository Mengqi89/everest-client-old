import React, { Component } from 'react'
import JobsContext from '../../contexts/JobsContext'
import './JobsFilter.scss'


export default class JobsFilter extends Component {
    static contextType = JobsContext

    render() {
        const {
            handleChange,
            keyword,
            salary,
            gradeLevel,
            location,
            filterJobs
        } = this.context

        return (
            <section className='JobsFilter'>
                <form className='filter-form' onSubmit={filterJobs}>
                    <div className='form-group'>
                        <label htmlFor='salary'>Salary</label>
                        <select
                            name='salary'
                            id='salary'
                            value={salary}
                            className='form-control'
                            onChange={handleChange}
                        >
                            <option value='all'>All</option>
                            <option value='7500'>¥7,500-¥9,999</option>
                            <option value='10000'>¥10,000-¥14,999</option>
                            <option value='15000'>¥15,000-¥19,999</option>
                            <option value='20000'>¥20,000-¥24,999</option>
                            <option value='25000'>¥25,000-¥30,000</option>

                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='gradeLevel'>Grade Level</label>
                        <select
                            name='gradeLevel'
                            id='gradeLevel'
                            value={gradeLevel}
                            className='form-control'
                            onChange={handleChange}
                        >
                            <option value='all'>All</option>
                            <option value='kindergarten'>Kindergarten</option>
                            <option value='elementary'>Elementary School</option>
                            <option value='middle'>Middle School</option>
                            <option value='high'>High School</option>
                            <option value='college'>College</option>
                        </select>
                    </div>
                    <div className='form-group form-input'>
                        <label htmlFor="keyword">Keywords</label>
                        <input
                            type="text"
                            name="keyword"
                            placeholder="Ex: kindergarten..."
                            onChange={handleChange}
                            value={keyword}
                        />
                    </div>
                    <div className='form-group form-input'>
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Ex: Shanghai..."
                            onChange={handleChange}
                            value={location}
                        />
                    </div>
                    <button type='submit'>Search</button>
                </form>
            </section>
        )
    }
}

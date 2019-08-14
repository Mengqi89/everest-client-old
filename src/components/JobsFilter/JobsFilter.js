import React, { Component } from 'react'
import JobsContext from '../../contexts/JobsContext'
import './JobsFilter.css'


export default class JobsFilter extends Component{
    static contextType = JobsContext

    render() {
        const {
            handleChange,
            keyword,
            salary,
            gradeLevel,
            schoolOwnership,
            location,
            filterJobs
        } = this.context

    return (
        <section className='fiter-container'>
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
                            <option value='1, 2, 3, 4, 5'>Elementary School</option>
                            <option value='6, 7, 8'>Middle School</option>
                            <option value='9, 10, 11, 12'>High School</option>
                            <option value='College'>College</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='schoolOwnership'>School Ownership</label>
                    <select
                        name='schoolOwnership'
                        id='schoolOwnership'
                        value={schoolOwnership}
                        className='form-control'
                        onChange={handleChange}
                    >
                        <option value={'all'}>All</option>
                        <option value={'public'}>Public</option>
                        <option value={'private'}>Private</option>
                    </select>
                </div> 
                <div className='form-group form-input'>
                   <label htmlFor="keyword">Keywords</label>  
                   <input 
                        type="text" 
                        name="keyword" 
                        placeholder="kindergarten" 
                        onChange={handleChange} 
                        value={keyword}
                    />     
                </div>
                <div className='form-group form-input'>
                    <label htmlFor="location">Location</label>  
                    <input 
                        type="text" 
                        name="location" 
                        placeholder="Shanghai" 
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

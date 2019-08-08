import React, { Component } from 'react'
import './JobSearch.css'



class JobSearch extends Component {
    render() {
        return(
            <section className="job-search">
                <form id="job-search-form" onSubmit={this.props.handleSubmit}>
                    <div className="form-section">
                        <label htmlFor="keyword">Keywords  
                        <input type="text" name="keyword" placeholder="kindergarten" onChange={this.props.handleKeywordChange} value={this.props.keyword}/>
                        </label>
                    
                        <label htmlFor="location">Location  
                        <input type="text" name="location" placeholder="Shanghai" onChange={this.props.handleLocationChange} value={this.props.location}/>
                        </label>
                    </div>
                    <div className="form-section">
                        <label htmlFor="payscale">Payscale </label>
                        <select name="payscale" onChange={this.props.handlePayscaleChange} value={this.props.payscale}>
                            <option value="0">All</option>
                            <option value="7500">¥7,500-¥9,999</option>
                            <option value="10000">¥10,000-¥14,999</option>
                            <option value="15000">¥15,000-¥19,999</option>
                            <option value="20000">¥20,000-¥24,999</option>
                            <option value="25000">¥25,000-¥30,000</option>
                        </select>

                        {/* <label htmlFor="grade-level">Grade Level </label>
                        <select name="grade-level" onChange={this.props.handleGradeLevelChange} value={this.props.grade}>
                            <option value="0">All</option>
                            <option value="kindergarten">Kindergarten</option>
                            <option value="1, 2, 3, 4, 5">Elementary School</option>
                            <option value="6, 7, 8">Middle School</option>
                            <option value="9, 10, 11, 12">High School</option>
                            <option value="College">College</option>
                        </select> */}

                        {/* <label htmlFor="keyword">School Ownership </label>
                        <select name="school-ownership">
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                        </select> */}
                    </div>
                    <button type='submit'>Search</button>

                </form>
            </section>
        )
        
    }
}

export default JobSearch
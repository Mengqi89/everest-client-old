import React, { Component } from 'react'
import './JobSearch.css'



class JobSearch extends Component {
    state = {
        keyword: '',
        location: '',
        payscale: '',
        grade: '',
    }
    
    handleKeywordChange = (event) => {
        this.setState({
            ...this.state,
            keyword: event.target.value
        })
        console.log(event.target.value, event.target.name)
        
    }
    handleLocationChange = (event) => {
        this.setState({
            ...this.state,
            location: event.target.value
        })
        console.log(event.target.value, event.target.name)
        
    }
    handlePayscaleChange = (event) => {
        this.setState({
            ...this.state,
            payscale: event.target.value
        })
        console.log(event.target.value, event.target.name)
        
    }
    handleGradeLevelChange = (event) => {
        this.setState({
            ...this.state,
            grade: event.target.value
        })
        console.log(event.target.value, event.target.name)
        
    }
    // handleSendFilter = (event) => {
    //     event.preventDefault()
    //     console.log(this.state)
    // }

    render() {
        return(
            <section className="job-search">
                <form id="job-search-form">
                    <div className="form-section">
                        <label forHTML="keyword">Keywords  
                        <input type="text" name="keyword" placeholder="kindergarten" onChange={this.handleKeywordChange} value={this.state.keyword}/>
                        </label>
                    
                        <label forHTML="location">Location  
                        <input type="text" name="location" placeholder="Shanghai" onChange={this.handleLocationChange} value={this.state.location}/>
                        </label>
                    </div>
                    <div className="form-section">
                        <label forHTML="payscale">Payscale </label>
                        <select name="payscale" onChange={this.handlePayscaleChange} value={this.state.payscale}>
                            <option value="7500-9999">¥7,500-¥9,999</option>
                            <option value="10000-14999">¥10,000-¥14,999</option>
                            <option value="15000-19999">¥15,000-¥19,999</option>
                            <option value="20000-25000">¥20,000-¥25,000</option>
                            <option value="25000-30000">¥25,000-¥30,000</option>
                        </select>

                        <label forHTML="grade-level">Grade Level </label>
                        <select name="grade-level" onChange={this.handleGradeLevelChange} value={this.state.grade}>
                            <option value="kindergarten">Kindergarten</option>
                            <option value="Elementary School">Elementary School</option>
                            <option value="Middle School">Middle School</option>
                            <option value="High School">High School</option>
                            <option value="College">College</option>
                        </select>

                        {/* <label forHTML="keyword">School Ownership </label>
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
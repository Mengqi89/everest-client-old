import React, { Component } from 'react'
import JobsContext from '../../contexts/JobsContext'
import JobsFilter from '../JobsFilter/JobsFilter'
import JobsListPage from '../JobsListPage/JobsListPage'


class JobContainer extends Component {
    static contextType = JobsContext
    
    render() {
        return (
            <div>
              <JobsFilter/>
              <JobsListPage jobs={this.context.jobs} /> 
            </div>
    );
}
  }
  
  export default JobContainer
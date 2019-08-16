import React, { Component } from 'react'
import JobsContext from '../../contexts/JobsContext'
import JobsFilter from '../JobsFilter/JobsFilter'
import JobsListPage from '../JobsListPage/JobsListPage'


class JobContainer extends Component {
    static contextType = JobsContext
    
    render() {
      const { jobs, filteredJobs, filtered} = this.context
        return (
            <div>
              <JobsFilter/>
              <JobsListPage jobs={jobs} filteredJobs={filteredJobs} filtered={filtered}/> 
            </div>
    );
}
  }
  
  export default JobContainer
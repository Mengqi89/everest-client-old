import React, { Component } from 'react'
import ApplicationCardsList from '../../routes/ApplicationCardsList/ApplicationCardsList'
import ApplicationApiService from '../../services/application-api-service'
import UserContext from '../../contexts/UserContext'

class AdminApplications extends Component {
  static contextType = UserContext
  componentDidMount() {
    ApplicationApiService.getAllApplications().then(applications => {
      this.context.setApplications(applications)
    })
  }
  render() {
    return (
      <div className="AdminApplications">
        <ApplicationCardsList />
      </div>
    )
  }
}

export default AdminApplications

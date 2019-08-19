import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SchoolApiService from '../../services/school-api-service'
import './SchoolProfile.scss'
import UserContext from '../../contexts/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SchoolProfile extends Component {
  static contextType = UserContext

  state = {
    housingComplete: false,

  }

  componentDidMount() {
    SchoolApiService.getSchoolProfile()
      .then(profile => this.context.setUser(profile))
  }

  checkSchoolUserObjectForNull = (schoolUser) => {
    let value = true
    Object.keys(schoolUser).forEach(key => {
      if (!schoolUser[key]) {
        value = false
      }
    })
    return value
  }

  checkSubObjectForNull = (subObject, name) => {
    let element = <p><FontAwesomeIcon icon="check" className="green" /> {name} complete</p>

    Object.keys(subObject).forEach(key => {
      if (subObject[key] == null) {
        element = <p><FontAwesomeIcon icon="times" className="red" /> {name} incomplete</p>
      }
    })

    return element
  }

  render() {
    // const userType = TokenService.getUserType()
    // this.context.setUserType(userType)
    const { user } = this.context
    return (
      <div className="SchoolProfile">
        <h2>School Info</h2>
        <ul className="school-basics">
          <li>Name: {user.school_name}</li>
          <li>Type: {user.school_type}</li>
          {user.school_size && <li>Size: {user.school_size}</li>}
          {user.public_or_private && <li>Public or private: {user.public_or_private}</li>}
          {user.curriculum && <li>Curriculum: {user.curriculum}</li>}
          {user.location && <li>Location: {user.location}</li>}
          {user.notable_facts && <li>Notable facts: {user.notable_facts}</li>}
        </ul>

        <div className="school-housing-info">
          {user.housingInformation && this.checkSubObjectForNull(user.housingInformation, 'Housing information')}
        </div>
        <div className="visa-info">
          {user.visaInformation && this.checkSubObjectForNull(user.visaInformation, 'Visa information')}
        </div>
        <div className="other-services">
          {user.otherServices && this.checkSubObjectForNull(user.otherServices, 'Other services')}
        </div>
        <div className="lifestyle-information">
          {user.lifestyleInformation && this.checkSubObjectForNull(user.lifestyleInformation, 'Lifestyle information')}
        </div>
        {this.checkSchoolUserObjectForNull && <p>Your profile is incomplete click below to complete!</p>}
        <Link to="/edit-profile">Finish Profile</Link>

      </div>
    )
  }
}

export default SchoolProfile
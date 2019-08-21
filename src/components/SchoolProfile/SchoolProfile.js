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
    let element = <p><FontAwesomeIcon icon="check" className="green" /> {name}</p>

    Object.keys(subObject).forEach(key => {
      if (subObject[key] == null) {
        element = <p><FontAwesomeIcon icon="times" className="red" /> {name}</p>
      }
    })

    return element
  }

  render() {
    const { user } = this.context
    return (
      <div className="SchoolProfile">
        <h2>{user.school_name}</h2>
        <ul className="school-basics">
          <li>
            <p className="caption">Type</p>
            <p>{user.school_type}</p>
            <p>{user.public_or_private ? "Public" : "Private"}</p>
          </li>
          <li>
            <p className="caption">Size</p>
            <p>{user.school_size}</p>
          </li>
          <li>
            <p className="caption">Curriculum</p>
            <p>{user.curriculum}</p>
          </li>
          <li>
            <p className="caption">Location</p>
            <p>{user.location}</p>
          </li>
          <li>
            <p className="caption">Notable Facts</p>
            <p className="notable-facts">{user.notable_facts}</p>
          </li>
        </ul>
        <div className="all-other-info">

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
        </div>
        {!user.complete
          && <><p>Your profile is incomplete click below to complete!</p>
            <Link to="/edit-profile">Finish Profile</Link></>
        }

      </div>
    )
  }
}

export default SchoolProfile
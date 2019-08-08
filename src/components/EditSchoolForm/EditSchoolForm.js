import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './EditSchoolForm.scss';
import SchoolApiService from '../../services/school-api-service';

const schoolKeys = ["school_name", "school_type", "school_size", "public_or_private", "curriculum", "location", "notable_facts", "school_website", "apartment_provided", "housing_assistance", "size_of_housing", "shared_room", "private_room", "housing_notes", "housing_on_or_off", "time_to_get_to_class", "distance_to_public_trans", "school_charge_rent", "school_rent_notes", "school_charge_utils", "school_utils_notes", "furnished", "furnished_notes", "appliances_included", "internet", "computer_included", "school_provide_health_insurance", "provided_insurance_notes", "medical_expeneses_paid", "disability_insurance", "other_insurance", "assistance_obtaining_work_visa", "school_pay_work_visa", "school_reimburse_costs_for_obtaining_visa_in_us", "assistance_opening_chinese_bank_account", "assistance_shopping_and_settling_in", "organized_trips_for_teachers", "other_western_teachers_at_school", "western_amenities_available_near_school_town"];

class EditSchoolForm extends Component {
  static contextType = UserContext
  renderSchoolLabelsAndInputs = (user) => {
    const arrayOfKeys = schoolKeys
    // Object.keys(user).forEach(key => {
    //   let currentProp = user[key]
    //   if (key === 'username' || key === 'password') {

    //   }
    //   else if (typeof currentProp === 'string') {
    //     // Object.keys(currentProp).forEach(key => arrayOfKeys.push(key))
    //     arrayOfKeys.push(key)
    //     // console.log(typeof currentProp, currentProp, key)
    //   } else if (currentProp === null) {
    //     arrayOfKeys.push(key)
    //   } else if (typeof currentProp === 'boolean') {
    //     arrayOfKeys.push(key)
    //   } else {
    //     Object.keys(currentProp).forEach(key => arrayOfKeys.push(key))
    //   }

    // })

    const elementsArray = []

    arrayOfKeys.forEach((key, i) => {
      elementsArray.push(<label key={i} htmlFor={key}>{jsUcfirst(key.replace(/_/g, ' ')) + ': '}</label>)
      elementsArray.push(<input key={i + 'input'} id={key} placeholder={user[key]} />)

    })

    return elementsArray
  }

  handleSchoolEditSubmit = (ev) => {
    ev.preventDefault()
    const newSchoolFields = {}
    schoolKeys.forEach(key => {
      if (ev.target[key].value) {
        newSchoolFields[key] = ev.target[key].value
      }
    })

    SchoolApiService.editSchoolProfile(newSchoolFields, this.context.user.id)
      .then(res => {
        if (res.updated) {
          this.props.history.push('/profile')
        }
      })
  }
  render() {
    const { user } = this.context
    return (
      <div className="EditSchoolForm">
        <h2>Editing {user.school_name}</h2>
        <form onSubmit={this.handleSchoolEditSubmit}>
          {user && this.renderSchoolLabelsAndInputs(user)}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditSchoolForm);



function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
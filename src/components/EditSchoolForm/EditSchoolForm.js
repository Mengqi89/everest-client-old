import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './EditSchoolForm.scss';
import SchoolApiService from '../../services/school-api-service';
import AutosuggestDropdown from '../AutosuggestDropdown/AutosuggestDropdown';

// eslint-disable-next-line
const schoolKeys = [
  'school_name',
  'school_type',
  'school_size',
  'public_or_private',
  'curriculum',
  'location',
  'notable_facts',
  'school_website',
  'apartment_provided',
  'housing_assistance',
  'size_of_housing',
  'shared_room',
  'private_room',
  'housing_notes',
  'housing_on_or_off',
  'time_to_get_to_class',
  'distance_to_public_trans',
  'school_charge_rent',
  'school_rent_notes',
  'school_charge_utils',
  'school_utils_notes',
  'furnished',
  'furnished_notes',
  'appliances_included',
  'internet',
  'computer_included',
  'school_provide_health_insurance',
  'provided_insurance_notes',
  'medical_expeneses_paid',
  'disability_insurance',
  'other_insurance',
  'assistance_obtaining_work_visa',
  'school_pay_work_visa',
  'school_reimburse_costs_for_obtaining_visa_in_us',
  'assistance_opening_chinese_bank_account',
  'assistance_shopping_and_settling_in',
  'organized_trips_for_teachers',
  'other_western_teachers_at_school',
  'western_amenities_available_near_school_town'
];

class EditSchoolForm extends Component {
  static contextType = UserContext;

  state = {

  }

  handleSchoolEditSubmit = ev => {
    ev.preventDefault();
    const newSchoolFields = {
      ...this.state
    };

    SchoolApiService.editSchoolProfile(
      newSchoolFields,
      this.context.user.id
    ).then(res => {
      if (res.updated) {
        this.props.history.push('/profile');
      }
    });
  };

  handleFormSubmit = ev => {
    ev.preventDefault()
  };


  handleUpdateInput = (ev) => {
    this.setState({
      [ev.target.id]: ev.target.value
    })
  }

  handleAutosuggestChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    const { user } = this.context;
    return (
      <div className="EditSchoolForm">
        <h2>Editing {user.school_name}</h2>
        <form onSubmit={this.handleSchoolEditSubmit} id="school_basic_info">
          <legend>I. Basic Information</legend>
          <label htmlFor="school_name" >School name: </label>
          <input id="school_name" placeholder={user.school_name} type="text" onChange={(ev) => this.handleUpdateInput(ev)} />
          <label htmlFor="school_type">School type: </label>
          <AutosuggestDropdown
            handleChange={(val, id) => this.handleAutosuggestChange(val, id)}
            id="school_type"
            choices={[
              { name: 'Kindergarten' },
              { name: 'Middle School' },
              { name: 'High School' }
            ]}
            placeholder={user.school_type}
          />
          <label htmlFor="school_size">School size</label>
          <input
            type="number"
            id="school_size"
            placeholder={user.school_size}
            onChange={(ev) => this.handleUpdateInput(ev)}
          />
          <label htmlFor="public_or_private">Public or private? </label>
          <select defaultValue={user.housingInformation.apartment_provided} name="public_or_private" id="public_or_private" onChange={(ev) => this.handleUpdateInput(ev)}>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
          <label htmlFor="curriculum">Curriculum</label>
          <AutosuggestDropdown
            handleChange={(val, id) => this.handleAutosuggestChange(val, id)}
            id="curriculum"
            choices={[{ name: 'AP' }, { name: 'IGSE' }, { name: 'A-Level' }]}
            placeholder={user.curriculum}
          />
          <label htmlFor="location">Location</label>
          <AutosuggestDropdown
            handleChange={(val, id) => this.handleAutosuggestChange(val, id)}
            id="location"
            choices={[
              { name: 'Chengdu' },
              { name: 'Sichuan' },
              { name: 'Changsha' },
              { name: 'Hunan' }
            ]}
            placeholder={user.location}
          />
          <label htmlFor="notable_facts">Notable facts: </label>
          <textarea id="notable_facts" placeholder={user.notable_facts} onChange={(ev) => this.handleUpdateInput(ev)} />
          <label htmlFor="school_website">Notable facts: </label>
          <input
            id="school_website"
            type="text"
            placeholder={user.school_website}
            onChange={(ev) => this.handleUpdateInput(ev)}
          />

          <button type="submit">Submit</button>
        </form>
        <form onSubmit={this.handleSchoolEditSubmit} id="school_housing_information">
          <legend>II. Housing Information</legend>
          <label htmlFor="apartment_provided">
            Does your school provide apartments or housing?
          </label>
          <select
            defaultValue={user.housingInformation.apartment_provided} onChange={(ev) => this.handleUpdateInput(ev)} id="apartment_provided">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="housing_assistance">
            Does your school assist with housing?{' '}
          </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="housing_assistance"
            placeholder={user.housingInformation.housing_assistance}
            type="text"
          />
          <label htmlFor="size_of_housing">Size and number of rooms: </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="size_of_housing"
            placeholder={user.housingInformation.size_of_housing}
            type="text"
          />
          <label htmlFor="shared_or_private_living_space">
            Is the room shared or private?
          </label>
          <select defaultValue={user.housingInformation.shared_or_private_living_space} onChange={(ev) => this.handleUpdateInput(ev)} id="shared_or_private_living_space">
            <option value="shared">Shared</option>
            <option value="private">Private</option>
          </select>
          <label htmlFor="housing_notes">Housing notes: </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="housing_notes"
            placeholder={user.housingInformation.housing_notes}
            type="text"
          />
          <label htmlFor="housing_on_or_off">
            Is the housing on or off campus?
          </label>
          <select defaultValue={user.housingInformation.housing_on_or_off} onChange={(ev) => this.handleUpdateInput(ev)} id="housing_on_or_off">
            <option value="on campus">On Campus</option>
            <option value="off campus">Off Campus</option>
            <option value="n/a">N/A</option>
          </select>
          <label htmlFor="time_to_get_to_class">
            Estimated time to get to class:{' '}
          </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="time_to_get_to_class"
            placeholder={user.housingInformation.time_to_get_to_class}
            type="text"
          />
          <label htmlFor="distance_to_public_trans">
            Estimated time to get to public transportation:{' '}
          </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="distance_to_public_trans"
            placeholder={user.housingInformation.distance_to_public_trans}
            type="text"
          />
          <label htmlFor="school_charge_rent">
            Does your school charge rent?
          </label>
          <select defaultValue={user.housingInformation.school_charge_rent} onChange={(ev) => this.handleUpdateInput(ev)} id="school_charge_rent">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="school_rent_notes">Rent notes: </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="school_rent_notes"
            placeholder={user.housingInformation.school_rent_notes}
            type="text"
          />
          <label htmlFor="school_charge_utils">
            Does your school charge for utilities?
          </label>
          <select defaultValue={user.housingInformation.school_charge_utils} onChange={(ev) => this.handleUpdateInput(ev)} id="school_charge_utils">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="school_utils_notes">Utility notes: </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="school_utils_notes"
            placeholder={user.housingInformation.school_utils_notes}
            type="text"
          />
          <label htmlFor="furnished">Is the apartment furnished?</label>
          <select defaultValue={user.housingInformation.furnished} onChange={(ev) => this.handleUpdateInput(ev)} id="furnished">
            <option value="true">Yes</option>
            <option value="false">No</option>
            <option value="null">N/A</option>
          </select>
          <label htmlFor="furnished_notes">Furnishing notes: </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="furnished_notes"
            placeholder={user.housingInformation.furnished_notes}
            type="text"
          />
          <label htmlFor="appliances_included">Appliances included: </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="appliances_included"
            placeholder={user.housingInformation.appliances_included}
            type="text"
          />
          <label htmlFor="internet">Internet: </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="internet"
            placeholder={user.housingInformation.internet}
            type="text"
          />
          <label htmlFor="computer_included">Computer included: </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="computer_included"
            placeholder={user.housingInformation.computer_included}
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
        <form
          onSubmit={this.handleSchoolEditSubmit}
          id="school_insurance_information"
        >
          <legend>Insurance Information</legend>
          <label htmlFor="school_provide_health_insurance">
            Does your school provide health insurance?
          </label>
          <select defaultValue={user.insuranceInformation.school_provide_health_insurance} onChange={(ev) => this.handleUpdateInput(ev)} id="school_provide_health_insurance">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="provided_insurance_notes">Insurance notes: </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="provided_insurance_notes"
            placeholder={user.insuranceInformation.provided_insurance_notes}
            type="text"
          />
          <label htmlFor="medical_expeneses_paid">
            How are medical expenses paid?{' '}
          </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="medical_expeneses_paid"
            placeholder={user.insuranceInformation.medical_expeneses_paid}
            type="text"
          />
          <label htmlFor="disability_insurance">
            Does the school provide disability insurance?
          </label>
          <select defaultValue={user.insuranceInformation.disability_insurance} onChange={(ev) => this.handleUpdateInput(ev)} id="disability_insurance">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="other_insurance">
            Does the school provide any other insurance?
          </label>
          <select defaultValue={user.insuranceInformation.other_insurance} onChange={(ev) => this.handleUpdateInput(ev)} id="other_insurance">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <form onSubmit={this.handleSchoolEditSubmit} id="school_visa_information">
          <legend>Visa Information</legend>
          <label htmlFor="assistance_obtaining_work_visa">
            Does the school offer assistance obtaining a work visa?
          </label>
          <select defaultValue={user.visaInformation.assistance_obtaining_work_visa} onChange={(ev) => this.handleUpdateInput(ev)} id="assistance_obtaining_work_visa">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="school_pay_work_visa">
            Does the school pay for a work visa?{' '}
          </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="school_pay_work_visa"
            placeholder={user.visaInformation.school_pay_work_visa}
            type="text"
          />
          <label htmlFor="school_reimburse_costs_for_obtaining_visa_in_us">
            Does the school reimburse costs for obtaining a visa in the U.S.?
          </label>
          <select defaultValue={user.visaInformation.school_reimburse_costs_for_obtaining_visa_in_us} onChange={(ev) => this.handleUpdateInput(ev)} id="school_reimburse_costs_for_obtaining_visa_in_us">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <form onSubmit={this.handleSchoolEditSubmit} id="school_other_services">
          <legend>Other Services</legend>
          <label htmlFor="assistance_opening_chinese_bank_account">
            Does the school offer assistance opening a Chinese bank account?
          </label>
          <select defaultValue={user.otherServices.assistance_opening_chinese_bank_account} onChange={(ev) => this.handleUpdateInput(ev)} id="assistance_opening_chinese_bank_account">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="assistance_shopping_and_settling_in">
            Does the school offer assistance shopping/settling in?
          </label>
          <select defaultValue={user.otherServices.assistance_shopping_and_settling_in} onChange={(ev) => this.handleUpdateInput(ev)} id="assistance_shopping_and_settling_in">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="organized_trips_for_teachers">
            Does the school offer organized trips for teachers?
          </label>
          <select defaultValue={user.otherServices.organized_trips_for_teachers} onChange={(ev) => this.handleUpdateInput(ev)} id="organized_trips_for_teachers">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <form
          onSubmit={this.handleSchoolEditSubmit}
          id="school_lifestyle_information"
        >
          <legend>Lifestyle Information</legend>
          <label htmlFor="other_western_teachers_at_school">
            How many other Western teachers are at the school?
          </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="other_western_teachers_at_school"
            placeholder={
              user.lifestyleInformation.other_western_teachers_at_school
            }
            type="number"
          />
          <label htmlFor="western_amenities_available_near_school_town">
            What Western amenities are available near the school or in town?
          </label>
          <input
            onChange={(ev) => this.handleUpdateInput(ev)}
            id="western_amenities_available_near_school_town"
            placeholder={
              user
                .lifestyleInformation
                .western_amenities_available_near_school_town
            }
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditSchoolForm);

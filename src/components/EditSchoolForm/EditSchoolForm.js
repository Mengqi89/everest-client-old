import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import './EditSchoolForm.scss';

class EditSchoolForm extends Component {
  static contextType = UserContext
  renderSchoolLabelsAndInputs = (user) => {
    const arrayOfKeys = []
    Object.keys(user).forEach(key => {
      let currentProp = user[key]
      if (key === 'username' || key === 'password') {

      }
      else if (typeof currentProp === 'string') {
        // Object.keys(currentProp).forEach(key => arrayOfKeys.push(key))
        arrayOfKeys.push(key)
        // console.log(typeof currentProp, currentProp, key)
      } else if (currentProp === null) {
        arrayOfKeys.push(key)
      } else if (typeof currentProp === 'boolean') {
        arrayOfKeys.push(key)
      } else {
        Object.keys(currentProp).forEach(key => arrayOfKeys.push(key))
      }

    })

    const elementsArray = []

    arrayOfKeys.forEach((key, i) => {
      elementsArray.push(<label key={i} htmlFor={key}>{jsUcfirst(key.replace(/_/g, ' ')) + ': '}</label>)
      elementsArray.push(<input key={i + 'input'} id={key} placeholder={user[key]} />)

    })

    return elementsArray
  }

  handleSchoolEditSubmit = (ev) => {
    ev.preventDefault()
  }
  render() {
    const { user } = this.context
    return (
      <div className="EditSchoolForm">
        <h2>Editing {user.school_name}</h2>
        <form onSubmit={this.handleSchoolEditSubmit}>
          {/* <label htmlFor="school_name">Name: </label>
          <input placeholder={user.school_name} id="school_name" />
          <label htmlFor="school_type">Type: </label>
          <input placeholder={user.school_type} id="school_type" /> */}
          {user && this.renderSchoolLabelsAndInputs(user)}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EditSchoolForm;



function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
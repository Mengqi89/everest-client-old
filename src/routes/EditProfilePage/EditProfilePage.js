import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import EditSchoolForm from '../../components/EditSchoolForm/EditSchoolForm';

class EditProfilePage extends Component {
  static contextType = UserContext

  render() {
    const { userType } = this.context
    return (
      <div className="EditProfilePage">
        {userType === 'school' && <EditSchoolForm />}
      </div>
    );
  }
}

export default EditProfilePage;
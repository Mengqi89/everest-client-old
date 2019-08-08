
import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import EditSchoolForm from '../../components/EditSchoolForm/EditSchoolForm';
import AdminEditForm from '../../components/AdminEditForm/AdminEditForm'

class EditProfilePage extends Component {
  static contextType = UserContext

  render() {
    const { userType } = this.context
    return (
      <div className="EditProfilePage">
        {userType === 'school' && <EditSchoolForm />}
        <AdminEditForm />
      </div>
    );
  }
}

export default EditProfilePage;

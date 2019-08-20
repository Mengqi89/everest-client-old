import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import EditSchoolForm from '../../components/EditSchoolForm/EditSchoolForm'
import EditAdminForm from '../../components/EditAdminForm/EditAdminForm'
import EditTeacherForm from '../../components/EditTeacherProfileForm/EditTeacherProfile'

class EditProfilePage extends Component {
  static contextType = UserContext

  render() {
    const { userType } = this.context
    return (
      <div className="EditProfilePage">
        {userType === 'school' && <EditSchoolForm />}
        {userType === 'admin' && <EditAdminForm />}
        {userType === 'teacher' && <EditTeacherForm />}
      </div>
    )
  }
}

export default EditProfilePage

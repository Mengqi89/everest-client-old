import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import AdminApiService from '../../services/admin-api-service'
import './AdminProfile.scss'
import TokenService from '../../services/token-service'

class AdminProfile extends Component {
    static contextType = UserContext

    componentDidMount() {

        AdminApiService.getAdminProfile()
            .then(profile => this.context.setUser(profile))
    }

    render() {
        const userType = TokenService.getUserType()
        this.context.setUserType(userType)
        const { user } = this.context
        console.log(user)
        return (
            <div className="AdminProfile">
                <h2>Admin Info</h2>
                <ul>
                    <li>Name: {user.first_name} {user.last_name}</li>
                    <li>Email: {user.email}</li>
                    <li>Username: {user.username}</li>
                </ul >
            </div>

        )
    }
}

export default AdminProfile
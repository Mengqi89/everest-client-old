import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import AdminApiService from '../../services/admin-api-service'
import { Link } from 'react-router-dom'
import './AdminProfile.scss'

class AdminProfile extends Component {
    static contextType = UserContext

    componentDidMount() {
        AdminApiService.getAdminProfile()
            .then(profile => this.context.setUser(profile))
    }

    render() {
        const { user } = this.context
        return (
            <div className="AdminProfile">
                <h2>Admin Info</h2>
                <ul>
                    <li>Name: {user.first_name} {user.last_name}</li>
                    <li>Email: {user.email}</li>
                    <li>Username: {user.username}</li>
                </ul >
                <Link to="/edit-profile">Edit Profile</Link>
            </div>

        )
    }
}

export default AdminProfile
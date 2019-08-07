import React, { Component } from 'react'

class AdminProfile extends Component {
    render() {
        return (
            <ul>
                <li>Name: {this.props.admin.first_name} {this.props.admin.last_name}</li>
                <li>Username: {this.props.admin.username}</li>
            </ul >
        )
    }
}

export default AdminProfile
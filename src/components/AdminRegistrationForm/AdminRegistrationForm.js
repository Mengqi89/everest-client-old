import React, { Component } from 'react'
import AdminApiService from '../../services/admin-api-service'

class AdminRegistrationForm extends Component {
    state = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        permission: '',
        hasError: null
    }
    handleUpdate = (ev) => {
        const key = ev.target.name
        this.setState({
            [key]: ev.target.value
        })
    }
    handleFormSubmit = (ev) => {
        ev.preventDefault()
        const { username, password, first_name, last_name, email, permission } = this.state
        const newAdmin = { username, password, first_name, last_name, email, permission }
        AdminApiService.postAdmin(newAdmin)
            .then(newAdmin => AdminApiService.postLogin({ username: username, password: password }))
            .catch(res => {
                this.setState({ hasError: res.error })
            })
    }

    render() {
        const { hasError } = this.state
        return (
            <div>
                <h2>Hello prospective administrator!</h2>
                <p>Let's get to know a little bit about you!</p>

                <div>
                    {hasError && <p className='red'>{hasError}</p>}
                </div>

                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="username">Enter a username</label>
                    <input type="text" name="username" id="username" onChange={this.handleUpdate}></input>
                    <label htmlFor="password">Enter a password</label>
                    <input type="password" name="password" id="password" onChange={this.handleUpdate}></input>
                    <label htmlFor="first_name">First name</label>
                    <input type="text" name="first_name" id="first_name" onChange={this.handleUpdate}></input>
                    <label htmlFor="last_name">Last name</label>
                    <input type="text" name="last_name" id="last_name" onChange={this.handleUpdate}></input>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={this.handleUpdate}></input>
                    <label htmlFor="permission">Permission Code</label>
                    <input type="text" name="permission" id="permission" onChange={this.handleUpdate}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AdminRegistrationForm
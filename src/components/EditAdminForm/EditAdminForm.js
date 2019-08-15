import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import AdminApiService from '../../services/admin-api-service'
import { withRouter } from 'react-router-dom'
// import TokenService from '../../services/token-service'

class EditAdminForm extends Component {
    static contextType = UserContext

    state = {
        first_name: this.context.user.first_name,
        last_name: this.context.user.last_name,
        username: this.context.user.username,
        email: this.context.user.email,
        password: '',
        hasError: null
    }

    componentDidMount() {
        AdminApiService.getAdminProfile()
            .then(profile => this.context.setUser(profile))
    }

    handleUpdate = (ev) => {
        const key = ev.target.name
        this.setState({
            [key]: ev.target.value
        })
    }
    clearState = () => {
        this.setState({
            first_name: '',
            last_name: '',
            username: '',
            email: ''
        })
    }
    handleFormSubmit = (ev) => {
        ev.preventDefault()
        const { first_name, last_name, username, email, password } = this.state
        const updatedAdmin = { first_name, last_name, username, email, password }
        AdminApiService.updateAdmin(updatedAdmin, this.context.user.id)
            .then(admin => {
                AdminApiService
                    .postLogin({ username: admin.username, password: this.state.password })
                this.props.history.push('/profile')
            })
            .catch(res => this.setState({ hasError: res.error }))

    }

    render() {
        const { hasError } = this.state
        const { user } = this.context
        return (
            <form className="EditAdminForm" onSubmit={this.handleFormSubmit}>
                <div>
                    Username: {this.state.username}
                </div>
                <div>
                    {hasError && <p className='red'>{hasError}</p>}
                </div>
                <label htmlFor="first_name">First Name: </label>
                <input type="text" value={user.first_name} name="first_name" id="first_name" onChange={this.handleUpdate}></input>

                <label htmlFor="last_name">Last Name: </label>
                <input type="text" value={user.last_name} name="last_name" id="last_name" onChange={this.handleUpdate}></input>

                <label htmlFor="email">Email: </label>
                <input type="email" value={user.email} name="email" id="email" onChange={this.handleUpdate}></input>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={this.handleUpdate}></input>

                <button type="reset" onClick={this.clearState}>Reset</button>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default withRouter(EditAdminForm)
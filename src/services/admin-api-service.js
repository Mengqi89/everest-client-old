import config from '../config'
import TokenService from './token-service'

const AdminApiService = {
    postAdmin(admin) {
        return fetch(`${config.API_ENDPOINT}/admins/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json())
    },
    postLogin(credentials) {
        return fetch(`${config.API_ENDPOINT}/auth/login/admins`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json())
    },
    updateAdmin(updatedAdmin, id) {
        console.log(updatedAdmin)
        return fetch(`${config.API_ENDPOINT}/admins/admin/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedAdmin)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json())
    },
    getAdminProfile() {
        return fetch(`${config.API_ENDPOINT}/admins/admin`, {
            headers: {
                authorization: `bearer ${TokenService.getAuthToken()}`
            }
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
    },
}

export default AdminApiService
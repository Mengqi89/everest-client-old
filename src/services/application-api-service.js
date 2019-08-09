import config from '../config'
import TokenService from './token-service'

const ApplicationApiService = {
    getAllApplications() {
        return fetch(`${config.API_ENDPOINT}/applications`, {
            method: 'GET',
            headers: {
                authorization: `bearer ${TokenService.getAuthToken()}`
            }
        }).then(res =>
            !res.ok
                ? res.json().then(e => Promise.reject(e))
                : res.json())
    },
    getApplicationById(applicationId) {
        return fetch(`${config.API_ENDPOINT}/applications/${applicationId}`, {
            method: 'GET',
            headers: {
                authorization: `bearer ${TokenService.getAuthToken()}`

            }
        })
            .then(res => !res.ok
                ? res.json().then(e => Promise.reject(e))
                : res.json())
    },
    approveApplication(applicationId) {
        return fetch(`${config.API_ENDPOINT}/applications/${applicationId}`, {
            method: 'PATCH',
            headers: {
                authorization: `bearer ${TokenService.getAuthToken()}`

            }
        })
            .then(res => !res.ok
                ? res.json().then(e => Promise.reject(e))
                : res.json())
    }
}

export default ApplicationApiService
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
    getApplicationById(jobId, teacherId) {
        return fetch(`${config.API_ENDPOINT}/applications/${jobId}/${teacherId}`, {
            method: 'GET',
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
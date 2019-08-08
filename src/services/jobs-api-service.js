import TokenService from './token-service';
import config from '../config';

const JobsApiService = {
    getJobs() {
        return fetch(`${config.API_ENDPOINT}/jobs`, {
            headers: {
                'content-type': 'application/json'
            }
        }).then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    getJob(jobId) {
        return fetch(`${config.API_ENDPOINT}/jobs/${jobId}`, {
            headers: {
                // authorization: `bearer ${TokenService.getAuthToken()}`
            }
        }).then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    postJob(job) {
        return fetch(`${config.API_ENDPOINT}/jobs`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({job})
        }).then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    deleteJobById(jobId) {
        return fetch(`${config.API_ENPOINT}/jobs/${jobId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${TokenService.getAuthToken()}`
            },
        }).then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    patchJob(jobId) {
        return fetch(`${config.API_ENPOINT}/jobs/${jobId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: {

            }
        }).then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    }
}

export default JobsApiService
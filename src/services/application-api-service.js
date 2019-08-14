import config from '../config';
import TokenService from './token-service';

const ApplicationApiService = {
  getAllApplications() {
    return fetch(`${config.API_ENDPOINT}/applications/admin`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getApplicationsForSchool() {
    return fetch(`${config.API_ENDPOINT}/applications/school/`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getApplicationsForTeacher(teacherId) {
    return fetch(`${config.API_ENDPOINT}/applications/teacher/${teacherId}`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getApplicationById(applicationId) {
    return fetch(`${config.API_ENDPOINT}/applications/${applicationId}`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  toggleAppApproval(applicationId, approvalObj) {
    return fetch(`${config.API_ENDPOINT}/applications/${applicationId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(approvalObj)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postApplication(application) {
    return fetch(`${config.API_ENDPOINT}/applications`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(application)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteApplication(applicationId) {
    return fetch(`${config.API_ENDPOINT}/applications/${applicationId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => !res.ok
        ? res.json().then(e => Promise.reject(e))
        : res.json())
  }
};

export default ApplicationApiService;

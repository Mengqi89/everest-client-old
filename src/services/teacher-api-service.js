import config from '../config'
import TokenService from './token-service';
// import TokenService from './token-service'

const TeacherApiService = {
    postLogin(credentials) {
        return fetch(`${config.API_ENDPOINT}/auth/login/teachers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postTeacher(teacher) {
        return fetch(`${config.API_ENDPOINT}/teachers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(teacher)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getTeachers() {
        return fetch(`${config.API_ENDPOINT}/teachers`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getTeacherById(teacherId) {
        return fetch(`${config.API_ENDPOINT}/teachers/${teacherId}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },


}

export default TeacherApiService
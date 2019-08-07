import config from '../config'
import TokenService from './token-service'

const TeacherApiService = {
    postLogin(credentials) {
        fetch(`${config.API_ENDPOINT}/api/teachers`, {
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


}

export default TeacherApiService
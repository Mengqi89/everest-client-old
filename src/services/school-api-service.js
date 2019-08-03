import config from '../config'

const SchoolApiService = {
  postLogin({ username, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login/schools`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postSchool(school) {
    return fetch(`${config.API_ENDPOINT}/schools`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(school),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteUserByEmail(email) {
    return fetch(`${config.API_ENDPOINT}/users/${email}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default SchoolApiService
import React, { useState } from 'react'

export const nullSchoolUser = {
    housingInformation: {},
    insuranceInformation: {},
    visaInformation: {},
    otherServices: {},
    lifestyleInformation: {}
}

const UserContext = React.createContext({
    loggedIn: null,
    setLoggedIn: () => { },
    userType: '',
    setUserType: () => { },
    user: {},
    setUser: () => { },
    applications: [],
    setApplications: () => { },
    error: null,
    setError: () => { },
})

export default UserContext

export function UserProvider(props) {
    const [loggedIn, setLoggedIn] = useState(null)
    const [userType, setUserType] = useState('')
    const [user, setUser] = useState(nullSchoolUser)
    const [applications, setApplications] = useState([])
    const [error, setError] = useState(null)

    const setLoggedInFn = loggedIn => {
        setLoggedIn(loggedIn)
    }

    const setUserTypeFn = userType => {
        setUserType(userType)
    }

    const setUserFn = user => {
        setUser(user)
    }

    const setApplicationsFn = applications => {
        setApplications(applications)
    }

    const setErrorFn = error => {
        setError(error)
    }


    const value = {
        loggedIn: loggedIn,
        setLoggedIn: setLoggedInFn,
        userType: userType,
        setUserType: setUserTypeFn,
        user: user,
        setUser: setUserFn,
        applications: applications,
        setApplications: setApplicationsFn,
        error: error,
        setError: setErrorFn
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}
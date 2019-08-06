import React, { useState } from 'react'

const UserContext = React.createContext({
    loggedIn: null,
    setLoggedIn: () => { },
})

export default UserContext

export function UserProvider(props) {
    const [loggedIn, setLoggedIn] = useState(null)

    const setLoggedInFn = loggedIn => {
        setLoggedIn(loggedIn)
    }

    const value = {
        loggedIn: loggedIn,
        setLoggedIn: setLoggedInFn
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}
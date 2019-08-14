import React, { useEffect, useState } from 'react'
//import UserContext from '../../contexts/UserContext';
import TeacherApiService from '../../services/teacher-api-service';
//import TokenService from '../../services/token-service';

export default function TeacherProfile() {
    const [user, setUser] = useState({})
    // const context = useContext(UserContext)
    // const { user, setUser } = context

    useEffect(() => {
        TeacherApiService.getTeacherProfile()
            .then(res => setUser(res))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h2>{user.first_name} {user.last_name}</h2>
        </>
    )
}
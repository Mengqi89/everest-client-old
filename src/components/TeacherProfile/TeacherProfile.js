import React, { useEffect, useState } from 'react'
import TeacherApiService from '../../services/teacher-api-service';

export default function TeacherProfile() {
    const [user, setUser] = useState({})


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
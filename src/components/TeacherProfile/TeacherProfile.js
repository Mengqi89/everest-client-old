import React, { useContext, useEffect } from 'react'
import UserContext from '../../contexts/UserContext';
import TeacherApiService from '../../services/teacher-api-service';

export default function TeacherProfile(props) {
    const context = useContext(UserContext)
    const { user } = context

    useEffect(() => {
        TeacherApiService.getTeacherProfile()
            .then(res => context.setUser(res))
            .catch(error => console.log(error))
    })

    return (
        <>
            <h2>{user.first_name} {user.last_name}</h2>
        </>
    )
}
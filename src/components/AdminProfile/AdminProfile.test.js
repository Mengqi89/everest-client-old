import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AdminProfile from './AdminProfile'

it('renders without crashing', () => {
    // const admin = {
    //     first_name: 'test_first_name',
    //     last_name: 'test_last_name'
    // }

    const div = document.createElement('div')
    ReactDom.render(
        <BrowserRouter>
            <AdminProfile />
        </BrowserRouter>
        , div
    )
    ReactDom.unmountComponentAtNode(div)
})
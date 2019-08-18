import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AdminProfile from './AdminProfile'

it('renders without crashing', () => {

    const div = document.createElement('div')
    ReactDom.render(
        <BrowserRouter>
            <AdminProfile />
        </BrowserRouter>
        , div
    )
    ReactDom.unmountComponentAtNode(div)
})
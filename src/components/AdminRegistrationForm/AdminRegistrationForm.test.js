import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AdminRegistrationForm from './AdminRegistrationForm'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(
        <BrowserRouter>
            <AdminRegistrationForm />
        </BrowserRouter>
        , div)

    ReactDom.unmountComponentAtNode(div)
})
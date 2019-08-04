import React from 'react'
import ReactDom from 'react-dom'
import AdminRegistrationForm from './AdminRegistrationForm'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(
        <AdminRegistrationForm />
        , div)

    ReactDom.unmountComponentAtNode(div)
})
import React from 'react'
import ReactDom from 'react-dom'
import EditProfilePage from './EditProfilePage'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(
        <EditProfilePage />
        , div
    )
    ReactDom.unmountComponentAtNode(div)
})
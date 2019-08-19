import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Application from './Application'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(
        <BrowserRouter>
            <Application />
        </BrowserRouter>
        , div)

    ReactDom.unmountComponentAtNode(div)
})
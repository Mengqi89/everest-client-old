import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import SchoolRegistrationForm from "./SchoolRegistrationForm"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<BrowserRouter>
        <SchoolRegistrationForm />
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})
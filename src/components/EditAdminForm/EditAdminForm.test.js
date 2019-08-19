import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import EditAdminForm from "./EditAdminForm"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<BrowserRouter>
        <EditAdminForm />
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})
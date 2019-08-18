import React from "react"
import ReactDOM from "react-dom"
import ApplicationCardsList from "./ApplicationCardsList"
import { BrowserRouter } from 'react-router-dom'


it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
        <BrowserRouter>
            <ApplicationCardsList />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})
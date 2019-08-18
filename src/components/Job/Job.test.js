import React from "react"
import ReactDOM from "react-dom"
import Job from "./Job"
import { BrowserRouter } from 'react-router-dom'

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<BrowserRouter>
        <Job />
    </BrowserRouter>
        , div)
    ReactDOM.unmountComponentAtNode(div)
})
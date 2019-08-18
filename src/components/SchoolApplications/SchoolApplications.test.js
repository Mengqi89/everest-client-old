import React from "react"
import ReactDOM from "react-dom"
import SchoolApplications from "./SchoolApplications"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<SchoolApplications />, div)
    ReactDOM.unmountComponentAtNode(div)
})
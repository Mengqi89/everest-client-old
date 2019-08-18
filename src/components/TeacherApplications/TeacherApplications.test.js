import React from "react"
import ReactDOM from "react-dom"
import TeacherApplications from "./TeacherApplications"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<TeacherApplications />, div)
    ReactDOM.unmountComponentAtNode(div)
})
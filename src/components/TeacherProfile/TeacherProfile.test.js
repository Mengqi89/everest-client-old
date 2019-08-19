import React from "react"
import ReactDOM from "react-dom"
import TeacherProfile from "./TeacherProfile"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<TeacherProfile />, div)
    ReactDOM.unmountComponentAtNode(div)
})
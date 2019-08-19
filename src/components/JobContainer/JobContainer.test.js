import React from "react"
import ReactDOM from "react-dom"
import JobContainer from "./JobContainer"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<JobContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
})
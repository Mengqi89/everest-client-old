import React from "react"
import ReactDOM from "react-dom"
import JobPage from "./JobPage"

it("renders without crashing", () => {
    const div = document.createElement("div")

    ReactDOM.render(<JobPage />, div)
    ReactDOM.unmountComponentAtNode(div)
})
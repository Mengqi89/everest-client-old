import React from "react"
import ReactDOM from "react-dom"
import JobsListPage from "./JobsListPage"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<JobsListPage />, div)
    ReactDOM.unmountComponentAtNode(div)
})
import React from "react"
import ReactDOM from "react-dom"
import AutosuggestDropdown from "./AutosuggestDropdown"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
        <AutosuggestDropdown />, div)
    ReactDOM.unmountComponentAtNode(div)
})
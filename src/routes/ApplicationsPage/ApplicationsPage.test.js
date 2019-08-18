import React from "react"
import ReactDOM from "react-dom"
import ApplicationsPage from "./ApplicationsPage"


it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<ApplicationsPage />, div)
    ReactDOM.unmountComponentAtNode(div)
})
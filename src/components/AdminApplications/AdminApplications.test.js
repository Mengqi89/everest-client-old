import React from "react"
import ReactDOM from "react-dom"
import AdminApplications from "./AdminApplications"

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AdminApplications />, div);
    ReactDOM.unmountComponentAtNode(div);
})
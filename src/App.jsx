import React from "react";
import { createRoot } from "react-dom/client";
import app from "../backend/servers/server";
const App = () => {
    return (
        <div>Siemanko</div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

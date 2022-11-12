import React from "react";
import ReactDOM from "react-dom/client";

// App component
import App from "./App/App.jsx";

// Utility functions
import DOMMethods from "./publicTools.js"

// Styles
import "./styles/style.scss"


ReactDOM.createRoot(DOMMethods.getElement('#root')).render(
        <React.StrictMode>
                <App />
        </React.StrictMode>
)
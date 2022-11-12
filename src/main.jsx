// React Dependecies
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"

// App component
import App from "./App/App.jsx";

// Utility functions
import DOMMethods from "./publicTools.js"

// Styles
import "./styles/style.scss"


ReactDOM.createRoot(DOMMethods.getElement('#root')).render(
        <React.StrictMode>
                <Router>
                        <App />
                </Router>
        </React.StrictMode>
)
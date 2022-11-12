import Nav from "./layOut/Nav";

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";


export default function App() {
        return (
                <>

                        <Nav />
                        <Routes>
                                <Route path="/" element={<Home />} />
                        </Routes>
                </>
        )
}

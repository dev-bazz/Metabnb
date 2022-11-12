import Nav from "./layOut/Nav";

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Nft from "./pages/Nft";


export default function App() {
        return (
                <>

                        <Nav />
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="NFTs" element={<Nft />} />
                        </Routes>
                </>
        )
}

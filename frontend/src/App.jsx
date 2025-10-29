import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Traveler from "./pages/Traveler";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Traveler />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

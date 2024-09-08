import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./ui/pages/About";
import Main from "./ui/pages/Main";
import Product from "./ui/pages/Product";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </Router>
    );
}

export default App;

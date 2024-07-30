import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Home from "./page/Home";
import MyRoute from "./page/MyRoute";
import Error from "./Component/Error";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import FooterBar from "./Component/FooterBar";
import WeatherCard from "./page/WeatherCard";

import Support from "./Component/Support";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";

const App = () => {

    const [SearchData, setSearchData] = useState("");

    const handleformSubmit = (data) => {
        setSearchData(data)
    }



    return (
        <>
            <Navbar onFormSubmit={handleformSubmit} />
            <Routes>
                <Route exact path="/" element={<Home SearchData={SearchData} />} />
                <Route exact path="/route" Component={MyRoute} />
                <Route exact path="/weather" Component={WeatherCard} />
                <Route exact path="/support" Component={Support} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/services" Component={Services} />
                <Route exact path="/contact" Component={Contact} />
                <Route path="*" Component={Error} />

            </Routes>
            <div className="FooterBar" style={{
                position: "fixed", bottom: "0", left: "0", zIndex: '100', background: "#FAF9F6", width: "100% "
            }}>
                <FooterBar />
            </div>
        </>
    )
}



export default App;
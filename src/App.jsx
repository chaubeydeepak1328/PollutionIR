import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Home from "./page/Home";
import MyRoute from "./page/MyRoute";
import Error from "./Component/Error";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import FooterBar from "./Component/FooterBar";

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
                <Route path="*" Component={Error} />
            </Routes>
            <div style={{
                position: "fixed", bottom: "0", left: "0", zIndex: '100', background: "#FAF9F6", width: "100% "
            }}>
                < FooterBar />
            </div>
        </>
    )
}



export default App;
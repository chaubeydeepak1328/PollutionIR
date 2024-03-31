import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import MyRoute from "./Component/MyRoute";
import Error from "./Component/Error";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import  Footer from './Component/Footer';


const App = () => {

    const [SearchData, setSearchData] = useState("");

    const handleformSubmit = (data) => {
        setSearchData(data)
    }



    return (
        <>
            <Navbar onFormSubmit={handleformSubmit} />
            <Routes>
                <Route exact path="/" element={<Home SearchData={SearchData}  />} />
                <Route exact path="/PollutionIR" element={<Home SearchData={SearchData}  />} />
                <Route exact path="/route" Component={MyRoute} />
                <Route path="*" Component={Error} />
            </Routes>
            <Footer/>
        </>
    )
}



export default App;
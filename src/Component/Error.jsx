import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7 d-flex flex-column justify-content-center my-4 main-hero-para">
                        <h1 >Server Respond: 404</h1>
                        <h2>WE ARE SORRY , PAGE NOT FOUND!</h2>
                        <p>THE PAGE ARE YOU LOOKING FOR MIGHT HAVE BEEN REMOVED AND ITS NAME <br />
                            CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
                        <NavLink to="/" className="btn btn-style dashboard_btn">Back to Homepage</NavLink>
                    </div>
                    <div className="col-12 col-lg-5">
                        <figure>
                            <img  className="col-12" src={Img_404} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error;
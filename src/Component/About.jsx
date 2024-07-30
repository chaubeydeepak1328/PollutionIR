import React, { useState } from "react";
import Img_call from "../Images/calling.jpeg";
import About_cont from "../Api/About_cont";
import Img_callcenter from "../Images/callcenter.jpeg"

const About = () => {
    const [about_data] = useState(About_cont);
    return (
        <>
            <section className="common-section our-services container">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 mt-2 text-center our-service-leftside-img d-flex justify-content-center align-content-center">
                            <img style={{width:"100%"}} src={Img_call} alt="" />
                        </div>
                        {/* 1st section right side  */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                            </h3>
                            <h1 className="main-heading"> How to use the App?</h1>
                            {
                                about_data.map((curElm, index) => {
                                const {id,title,info} = curElm;
                                    return (
                                        <div className="row our-services-info">
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">
                                                    {info}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <br />
                            <button type="button" className="btn btn-outline-primary about_btn">Learn more</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Right side of the section */}

            <section className="common-section our-services container our-services-rightside">
                <div className="container mb-5">
                    <div className="row about_container">
                        <div className="col-12 col-lg-7 our-service-rightside-content d-flex justify-content-center align-content-start flex-column">
                            <h3 className="mini-title">
                                World class support is Available 24/7
                            </h3>
                            <h1 className="main-heading"> How to use the App?</h1>
                            {
                                about_data.map((curElm, index) => {
                                const {id,title,info} = curElm;
                                    return (
                                        <div className="row our-services-info">
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">
                                                    {info}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <br />
                            <button type="button" className="btn btn-outline-primary about_btn">Learn more</button>
                        </div>
                        {/* 1st section right side  */}
                        <div className="col-12 col-lg-5 mt-2 our-service-rightside-img d-flex justify-content-center align-content-center">
                            <img className="col-12 " src={Img_callcenter} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
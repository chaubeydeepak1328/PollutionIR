import React, { useState } from "react";
import Services_cont from "../Api/Service_cont";


const Services = () => {

    const [servicesData, setServicesData] = useState(Services_cont);
    return (
        <>
            <section className="service-main-container container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">
                        How to send Money
                    </h1>
                    <div className="row d-flex justify-content-center">
                        {servicesData.map((curElm, index) => {
                            const { id, logo, title, info } = curElm;
                            return (

                                <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                                    <i className={`fontawesome-style ${logo}`}></i>
                                    <h2 className="sub-heading">{title}</h2>
                                    <p className="main-hero-para">{info}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Services;
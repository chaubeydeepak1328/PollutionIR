import React from "react";
import logo from "../Images/supportLogo.png";
import Img_dash from "../Images/Dashboard.png";


const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container ">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex flex-column justify-content-center align-items-center ">
                            <h1 id="header_h1">Online Payment Mode <br /> Easy For You.</h1>
                            <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus alias harum temporibus minima dolore pariatur cumque nam eius libero.</p>
                            <h3>Get early access for you</h3>
                            <div className="input-group mt-3 d-flex  justify-content-center ">
                                <input type="email" className="rounded-pill w-75 me-3 form-control-text" placeholder="Enter Your Email" />
                                <div className="input-group-button">Get it Now</div>
                            </div>
                        </div>

                        {/* main header righ side */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img src={Img_dash} alt="heroimg" className="img-fluid" />
                            <a href="tel:7048986551"><img src={logo} alt="heroimg" className="img-fluid main-hero-img2" /></a>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;
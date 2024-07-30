import React, { useState } from "react";

import Img_credit from "../Images/credit.jpeg";
import { useNavigate } from "react-router-dom";



const Contact = () => {

    const Navigate = useNavigate();

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: ""
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value })
    }

    const [agreeChecked, setAgreeChecked] = useState(false);

    // Connecting with forebase
    const submitData = async () => {
        const { firstName, lastName, phone, email, address, message } = userData;
        const res = await fetch('https://supporwebapp-default-rtdb.firebaseio.com/userDataRecord.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName, lastName, phone, email, address, message
            }),
        })

        if (res) {
            setUserData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                address: "",
                message: ""
            })
            alert("Data stored");
        }
        else {
            alert('plz fill the Data')
        }
    }


    const formValidation = (event) => {
        event.preventDefault();
        if (
            userData.firstName.trim() === "" &&
            userData.lastName.trim() === "" &&
            userData.phone.trim() === "" &&
            userData.email.trim() === "" &&
            userData.address.trim() === "" &&
            userData.message.trim() === "" &&
            !agreeChecked
        ) {
            alert("Please fill in all fields and agree to the terms.");
            Navigate(0);
        }
        else {
            submitData()
        }
    };


    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">
                                        Connect with Our  <br /> Sales Team
                                    </h1>
                                    <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit perspiciatis eos.</p>
                                    <figure>
                                        <img src={Img_credit} alt="" className="img-fluid" />
                                    </figure>
                                </div>
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="post">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" placeholder="First Name" className="form-control" name="firstName" value={userData.firstName} onChange={inputEvent} />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" placeholder="Last Name" className="form-control" name="lastName" value={userData.lastName} onChange={inputEvent} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="phone" placeholder="Phone Number" className="form-control" name="phone" value={userData.phone} onChange={inputEvent} />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="email" placeholder="Email" className="form-control" name="email" value={userData.email} onChange={inputEvent} />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type="text" placeholder="Add Address" className="form-control" name="address" value={userData.address} onChange={inputEvent} />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <input type="text" placeholder="Enter your Message" className="form-control" name="message" value={userData.message} onChange={inputEvent} />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={() => setAgreeChecked(!agreeChecked)} />
                                            <label class="form-check-label" for="flexCheckChecked" className="main-hero-para">
                                                I agree that the Tsquard can use this email ,phone to contact me in future and the all the information given by me is true
                                            </label>
                                            <button type="submit" className="btn btn-style w-100 contact-btn" onClick={formValidation}>Submit Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
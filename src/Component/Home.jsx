import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";


const Home = ({ SearchData }) => {
    const [data, setData] = useState({
        date:"",
        mylocation: "",
        country: "",
        aqi: "",
        CO: "",
        NO: "",
        NO2: "",
        O3: "",
        SO2: "",
        PM2_5: "",
        PM10: "",
        NH3: ""
    });


    // Time Functionn to calculat the time 
    function convertUnixTimestamp(unixTimestamp) {
        // Convert Unix timestamp to milliseconds
        const milliseconds = unixTimestamp * 1000;

        // Create a new Date object
        const dateObject = new Date(milliseconds);

        // Extract the components of the date and time
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1; // Month is zero-based, so we add 1
        const year = dateObject.getFullYear();
        const hours = dateObject.getHours();
        const minutes = ('0' + dateObject.getMinutes()).slice(-2); // Add leading zero if minutes is less than 10
        const seconds = ('0' + dateObject.getSeconds()).slice(-2); // Add leading zero if seconds is less than 10
        const amOrPm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
        const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format

        // Construct the formatted date and time string
        const formattedDateTime = `${day}-${month}-${year} ${formattedHours}:${minutes}:${seconds} ${amOrPm}`;

        return formattedDateTime;
    }


    // function Execution Start here

    useEffect(() => {
        const mylocation = async () => {
            const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${SearchData === "" ? "delhi India" : SearchData}&apiKey=${process.env.REACT_APP_SECRET_KEY1}`);
            const data = await response.json();
            // console.log(data);
            let lon = data.features[0].geometry.coordinates[0];
            let lat = data.features[0].geometry.coordinates[1];
            // console.log(lon, lat);
            setData(prevState => ({
                ...prevState,
                mylocation: `${data.features[0].properties.address_line1} ${data.features[0].properties.address_line2}`,
            }));

            pollution(lon, lat);
        }
        const pollution = async (lon, lat) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_SECRET_KEY2}`);
        const data1 = await response.json();
        // console.log(data1)

        setData(prevState => ({
            ...prevState,
            aqi: data1.list[0].main.aqi,
            CO: data1.list[0].components.co,
            NO: data1.list[0].components.no,
            NO2: data1.list[0].components.no2,
            O3: data1.list[0].components.o3,
            SO2: data1.list[0].components.so2,
            PM2_5: data1.list[0].components.pm2_5,
            PM10: data1.list[0].components.pm10,
            NH3: data1.list[0].components.nh3,
            date:`${convertUnixTimestamp(data1.list[0].dt)}`,
        }));
    }
        mylocation();
    }, [SearchData]);

    return (
        <>
            <div className="container">
                <div className="card mt-5" style={{ width: 'fit content', padding: '.5rem' }}>
                    <div className="aqi-container">
                        <div className="aqi">
                            <p> AQI : <span id="aqi">{data.aqi}</span> </p>
                        </div>
                    </div>
                    <div id="showpanel">
                        <p>Location:</p>
                        <span className="fullAddress">{data.mylocation}</span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: 'center' }}>Pollution Information</h5>
                        <div className="data-container">
                            <div className="data-box">
                                <p className="meter">CO : </p>
                                <span className="co">{data.CO}</span>
                            </div>
                            <div className="data-box">
                                <p className="meter">NO : </p>
                                <span className="no">{data.NO}</span>
                            </div>
                            <div className="data-box">
                                <p className="meter">NO2 : </p>
                                <span className="no2">{data.NO2}</span>
                            </div>
                            <div className="data-box">
                                <p className="meter">O3 : </p>
                                <span className="o3">{data.O3}</span>
                            </div>
                            <div className="data-box">
                                <p className="meter">SO2 : </p>
                                <span className="so2">{data.SO2}</span>
                            </div>
                            <div className="data-box">
                                <p className="meter">PM2.5 : </p>
                                <span className="pm2_5">{data.PM2_5}</span>
                            </div>
                            <div className="data-box">
                                <p className="meter">PM10 : </p>
                                <span className="pm10">{data.PM10}</span>
                            </div>
                            <div className="data-box">
                                <p className="meter">NH3 : </p>
                                <span className="nh3">{data.NH3}</span>
                            </div>
                        </div>
                        <p className="card-text">Last update on  {data.date}</p>
                        <NavLink to="/route" className="btn btn-primary">Find Route</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Home;
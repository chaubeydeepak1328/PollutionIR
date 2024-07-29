import React, { useEffect, useState } from "react";
import Temperaturegauge from "./Temperaturegauge";

const WeatherCard = ({ lon, lat }) => {
    const [weather, setWeather] = useState({
        search_location: '',
        humidity: '',
        pressure: '',
        temp: '',
        temp_max: '',
        temp_min: '',
        sunrise: '',
        sunset: '',
        title: '',
        desc: '',
        sea_level: '',
        ground_level: '',
        wind_deg: '',
        wind_speed: '',
        current_time: '',
    });


    function convertUnixTimestampToTime(timestamp) {
        const milliseconds = timestamp * 1000;
        const dateObject = new Date(milliseconds);

        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1;
        const day = dateObject.getDate();
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();
        const seconds = dateObject.getSeconds();

        const formattedTime = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        return formattedTime;
    }

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_SECRET_KEY2}`);
                const data = await res.json();

                // Log the data to inspect its structure
                // console.log(data);

                setWeather(prevWeather => ({
                    ...prevWeather,
                    search_location: `${data.name || 'Unknown location'}, ${data.sys?.country || 'Unknown country'}`,
                    humidity: data.main?.humidity || 'N/A',
                    pressure: data.main?.pressure || 'N/A',
                    temp: data.main?.temp || 'N/A',
                    temp_max: data.main?.temp_max || 'N/A',
                    temp_min: data.main?.temp_min || 'N/A',
                    sunrise: data.sys?.sunrise ? convertUnixTimestampToTime(data.sys.sunrise) : 'N/A',
                    sunset: data.sys?.sunset ? convertUnixTimestampToTime(data.sys.sunset) : 'N/A',
                    title: data.weather?.[0]?.main || 'N/A',
                    desc: data.weather?.[0]?.description || 'N/A',
                    sea_level: data.main?.sea_level + " meter",
                    ground_level: data.main?.grnd_level + " meter",
                    wind_deg: data.wind?.deg + "°",
                    wind_speed: data.wind?.speed + "KM/H",
                    current_time: data.dt ? convertUnixTimestampToTime(data?.dt) : 'N/A',
                }));
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeatherData();
    }, [lon, lat]);
    return (
        <>
            <div className="card mt-5 col-12" >
                <div className="card-body">
                    <div className="text-center d-flex flex-column align-items-center m-auto" style={{ width: "fit-content" }} >
                        <h5>Current Weather</h5>
                        <p>{weather.current_time}</p>
                        <Temperaturegauge />
                    </div>
                    <p className="text-center mt-4">{weather.search_location}</p>
                    <div className=" d-flex flex-wrap gap-2 justify-content-evenly">
                        <div className="w-100 text-center">{weather.title}:{weather.desc}</div>
                        <div type="button" className=" btn btn-outline-secondary col-12 text center">Weather information</div>
                        <div type="button" className="btn btn-outline-secondary data-box col-12 col-sm-5 col-md-5 col-lg-4 d-flex justify-content-between align-content-center"><p>Temp:</p>{weather.temp}°C</div>
                        <div type="button" className="btn btn-outline-secondary data-box col-12 col-sm-5 col-md-5 col-lg-4 d-flex justify-content-between align-content-center"><p>humidity: </p>{weather.humidity}</div>
                        <div type="button" className="btn btn-outline-secondary data-box col-12 col-sm-5 col-md-5 col-lg-4 d-flex justify-content-between align-content-center"><p>Temp_min:</p>{weather.temp_min}°C</div>
                        <div type="button" className="btn btn-outline-secondary data-box col-12 col-sm-5 col-md-5 col-lg-4 d-flex justify-content-between align-content-center"><p>Temp_max:</p>{weather.temp_max}°C</div>
                        <div type="button" className="btn btn-outline-secondary data-box col-12 col-sm-5 col-md-5 col-lg-4 d-flex justify-content-between align-content-center"><p>pressure:</p>{weather.pressure}</div>
                        <div type="button" className="btn btn-outline-secondary data-box col-12 col-sm-5 col-md-5 col-lg-4 d-flex justify-content-between align-content-center"><p>sunrise:</p>{weather.sunrise}</div>
                        <div type="button" className="btn btn-outline-secondary data-box col-12 col-sm-5 col-md-5 col-lg-4 d-flex justify-content-between align-content-center"><p>sunrise:</p>{weather.sunset}</div>
                        <div type="button" className="btn btn-outline-secondary data-box col-12 col-sm-5 col-md-5 col-lg-4 d-flex justify-content-between align-content-center"><p>sea Level:</p>{weather.sea_level}</div>
                        <div type="button" className="btn btn-outline-secondary data-box col-12 col-sm-5 col-md-5 col-lg-4 d-flex justify-content-between align-content-center"><p>ground Level:</p>{weather.ground_level}</div>
                        <div type="button" className="btn btn-outline-secondary data-box col-12 col-sm-5 col-md-5 col-lg-4 d-flex justify-content-between align-content-center"><p>wind:</p>{weather.wind_speed},{weather.wind_deg}</div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default WeatherCard;
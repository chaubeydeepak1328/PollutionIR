export const curentLocation = (SearchData) =>
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${SearchData === "" ? "delhi India" : SearchData}&apiKey=${process.env.REACT_APP_SECRET_KEY1}`;

export const pollution = (lon, lat) =>
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_SECRET_KEY2}`;

export const FromLocation = (from) =>
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${from}&apiKey=${process.env.REACT_APP_SECRET_KEY1}`;

export const toLocation = (to) =>
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${to}&apiKey=${process.env.REACT_APP_SECRET_KEY1}`;

export const Route = (latFrom, lonFrom, latTo, lonTo) =>
    `https://api.geoapify.com/v1/routing?mode=drive&avoid=tolls|highways&waypoints=${latFrom},${lonFrom}|${latTo},${lonTo}&apiKey=760c03b168954ab0a16765cfe6457f11`;





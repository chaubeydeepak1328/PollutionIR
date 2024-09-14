import React, { useState } from 'react';

function App() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [routeData, setRouteData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const responseFrom = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${from}&apiKey=${process.env.REACT_APP_SECRET_KEY1}`);
        const responseTo = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${to}&apiKey=${process.env.REACT_APP_SECRET_KEY1}`);
        const dataFrom = await responseFrom.json();
        const dataTo = await responseTo.json();

        const lonFrom = dataFrom.features[0].geometry.coordinates[0];
        const latFrom = dataFrom.features[0].geometry.coordinates[1];
        const lonTo = dataTo.features[0].geometry.coordinates[0];
        const latTo = dataTo.features[0].geometry.coordinates[1];

        const responseRoute = await fetch(`https://api.geoapify.com/v1/routing?mode=drive&avoid=tolls|highways&waypoints=${latFrom},${lonFrom}|${latTo},${lonTo}&apiKey=760c03b168954ab0a16765cfe6457f11`);
        const dataRoute = await responseRoute.json();

        setRouteData(dataRoute);
    };

    function timeConvert(seconds) {
        const hours = Math.floor(seconds / 3600);
        const remainingSeconds = seconds % 3600;
        const minutes = Math.ceil(remainingSeconds / 60);
        return `${hours} h ${minutes} min`;
    }

    function distance(meters) {
        const kilometers = Math.floor(meters / 1000);
        const meter = meters % 1000;
        return `${kilometers} km ${meter} m`;
    }

    return (
        <div className='container d-flex justify-content-center flex-column align-items-center'>
            <form onSubmit={handleSubmit} className='col-12 col-lg-8  mt-4 d-flex flex-column gap-3'>
                <input className='form-control' type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
                <input className='form-control' type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
                <button className='btn bg-primary' style={{ color: 'white' }} type="submit">Get Route</button>
            </form>
            <div className='col-12 col-lg-8'>
                {routeData === null ? (<><div className='d-flex justify-content-center align-content-end mt-5'><p className='text-success '>No Result Found</p></div></>) : (
                    <div className='card mt-5 pt-4 mb-4'>
                        <div className='d-flex justify-content-center gap-5'><p>From: {from}</p><p >To: {to}</p></div>
                        <p className='text-center'>Distance: {distance(routeData.features[0].properties.distance)}</p>
                        <div className='d-flex justify-content-center gap-5 '><p>Mode: {routeData.properties.mode}</p><p>Time: {timeConvert(routeData.features[0].properties.legs[0].time)}</p></div>
                        <div className="card overflow-scroll" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            {routeData.features[0].properties.legs[0].steps.map((step, index) => (
                                <div key={index} className="p-2" style={{ border: '2px solid grey' }}>
                                    <p className="route">{step.instruction.text}</p>
                                    <p>Time: {timeConvert(step.time)}</p>
                                    <p>Distance: {distance(step.distance)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}



export default App;

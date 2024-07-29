import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'



const Crypto = createContext();


const WeatherContext = ({ children }) => {

    const [user_loc, setUser_loc] = useState(
        {
            lat: '', lon: ''
        }
    )

    useEffect(() => {
        //
    }, [user_loc])

    return (
        <Crypto.Provider value={{ user_loc, setUser_loc }}>
            {children}
        </Crypto.Provider>
    )
}

export default WeatherContext;


export const WeatherState = () => {
    return useContext(Crypto);
}

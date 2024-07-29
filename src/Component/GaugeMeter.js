import React from 'react'
import GaugeComponent from 'react-gauge-component'

const GaugeMeter = ({ aqiValue }) => {
    return (<>
        <div style={{ position: "relative" }}>
            <GaugeComponent
                value={aqiValue}
                minValue={0}
                maxValue={5}
                type="semicircle"
                labels={{
                    valueLabel: { formatTextValue: value => "" },
                    tickLabels: {
                        type: "inner",
                        ticks: [
                            { value: 0 },
                            { value: 1 },
                            { value: 2 },
                            { value: 3 },
                            { value: 4 },
                            { value: 5 }
                        ]
                    }
                }}
                arc={{
                    gradient: true,
                    width: 0.15,
                    padding: 0,

                    subArcs: [
                        {
                            limit: 1,
                            color: '#00ff00',
                            showTick: true,
                            tooltip: {
                                text: 'Excellent!'
                            }
                        },
                        {
                            limit: 2,
                            color: '#7fff00',
                            showTick: true,
                            tooltip: {
                                text: 'Very Good!'
                            }
                        },
                        {
                            limit: 3,
                            color: '#ffff00',
                            showTick: true,
                            tooltip: {
                                text: 'Moderate'
                            }
                        },
                        {
                            limit: 4,
                            color: '#ff7f00',
                            showTick: true,
                            tooltip: {
                                text: 'Fair'
                            }
                        },
                        {
                            limit: 5,
                            color: '#ff0000',
                            showTick: true,
                            tooltip: {
                                text: 'Poor'
                            }
                        }
                    ]
                }}
                pointer={{
                    elastic: true,
                    animationDelay: 0
                }}
            />
            <div style={{ color: "white", background: "#ADFF2F", borderRadius: "5px 5px 0 0 ", height: "3.5rem", width: "5rem", textAlign: "center", borderTopLeftRadius: "3rem", borderTopRightRadius: "3rem", position: "absolute", top: "5.2rem", left: "7rem",display:"flex",flexDirection:"column" }}>{aqiValue}<span style={{ fontSize: "70%" }}> AQI</span></div>
        </div>
    </>)
}

export default GaugeMeter

import React from 'react'
import GaugeComponent from 'react-gauge-component'

const Temperaturegauge = ({ temp }) => {
    return (<>
        <div >
            <GaugeComponent
                value={temp}
                minValue={0}
                maxValue={100}
                type="semicircle"
                labels={{
                    valueLabel: { formatTextValue: value => "" },
                    tickLabels: {
                        type: "inner",
                        valueConfig: { formatTextValue: value => value + "ºC" },
                        ticks: [
                            { value: 0 },
                            { value: 10 },
                            { value: 20 },
                            { value: 30 },
                            { value: 40 },
                            { value: 50 },
                            { value: 60 },
                            { value: 70 },
                            { value: 80 },
                            { value: 90 },
                            { value: 100 }
                        ]
                    }
                }}
                arc={{
                    gradient: true,
                    width: 0.15,
                    padding: 0,

                    subArcs: [
                        {
                            limit: 0,
                            color: '#0000ff',
                            showTick: true,
                            tooltip: {
                                text: '0 - 10'
                            }
                        },
                        {
                            limit: 10,
                            color: '#00ff00',
                            showTick: true,
                            tooltip: {
                                text: '0 - 10'
                            }
                        },
                        {
                            limit: 20,
                            color: '#7fff00',
                            showTick: true,
                            tooltip: {
                                text: '10 - 20'
                            }
                        },
                        {
                            limit: 30,
                            color: '#bfff00',
                            showTick: true,
                            tooltip: {
                                text: '20 - 30'
                            }
                        },
                        {
                            limit: 40,
                            color: '#ffff00',
                            showTick: true,
                            tooltip: {
                                text: '30 - 40'
                            }
                        },
                        {
                            limit: 50,
                            color: '#ffbf00',
                            showTick: true,
                            tooltip: {
                                text: '40 - 50'
                            }
                        },
                        {
                            limit: 60,
                            color: '#ff7f00',
                            showTick: true,
                            tooltip: {
                                text: '50 - 60'
                            }
                        },
                        {
                            limit: 70,
                            color: '#ff4000',
                            showTick: true,
                            tooltip: {
                                text: '60 - 70'
                            }
                        },
                        {
                            limit: 80,
                            color: '#ff0000',
                            showTick: true,
                            tooltip: {
                                text: '70 - 80'
                            }
                        },
                        {
                            limit: 90,
                            color: '#bf0000',
                            showTick: true,
                            tooltip: {
                                text: '80 - 90'
                            }
                        },
                        {
                            limit: 100,
                            color: '#800000',
                            showTick: true,
                            tooltip: {
                                text: '90 - 100'
                            }
                        }
                    ]
                }}
                pointer={{
                    elastic: true,
                    animationDelay: 0
                }}
            />
        </div>
    </>)
}

export default Temperaturegauge

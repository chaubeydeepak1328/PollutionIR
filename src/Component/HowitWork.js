import React, { useState } from "react";
import work from "../Api/work"
import Card from "./Card";

const HowitWork = () => {

    const [workData, setWorkData] = useState(work);

    return (
        <>
            <section>
                <div className="work-container container col-11">
                    <h1 className="main-heading text-center">How it's Work</h1>
                    <div className="row">
                        {workData.map((curElm, index) => {
                            return <Card id={index} key={index} title={curElm.title} logo={curElm.logo} info={curElm.info} />
                        })}
                    </div>
                </div>

            </section>
        </>
    )
}

export default HowitWork;

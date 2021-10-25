import React from "react";
import Nasa from "./nasa"

const LocationApp = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <Nasa />
                <hr />
                {/* <ClockApp /> */}
                <hr />
                {/* <StopWatchApp /> */}
            </div>
        </div>
    )
}

export default LocationApp;
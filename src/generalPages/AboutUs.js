import React, { useState, useEffect } from "react";
import './general.scss';


const AboutUs = ({ width, height }) => {
    return (
        <div style={{ width: width, height: height }}>
            <div className="container">
                <h1 className="title" >
                    About Us
                </h1>
                <p className="text">
                    Our purpose is to help the Microft SLAM team understand the usefulness of some additional network telemetry signals for both traffic patterns of Microsoft Azure services and for enriching existing signals with other potential signals to have a bigger picture of the network traffic.                </p>
            </div>
        </div>
    );
}

export default AboutUs;
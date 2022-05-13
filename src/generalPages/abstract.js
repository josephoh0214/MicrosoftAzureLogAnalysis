import React from "react";
import './general.scss';

// import Button from 'react-bootstrap/Button'



const Abstract = ({ width, height }) => {
    return (
        <div style={{ width: width, height: height }}>
            <div className="container">
                <h1 className="title" >
                    Abstract
                </h1>
                <p className="text">
                    This websight helps understand the usefulness of some additional network telemetry signals for both traffic patterns of Microsoft Azure services and for enriching existing signals with other potential signals to have a bigger picture of the network traffic.. Utilize the provdied tools to classify your logs at hand..
                </p>
                <div className="buttons">
                    <a href="#contososlider"><button className="linkButton">Jump to Analysis</button></a>
                    <a href="#searchbox"><button className="linkButton">Jump to Classification Search</button></a>
                </div>
            </div>
        </div>
    );
}

export default Abstract;
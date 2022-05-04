import React, { useState, useEffect } from "react";
import './general.scss';


const InfoProblem = ({ width, height }) => {
    return (
        <div style={{ width: width, height: height }}>
            <div className="container">
                <h1 className="title" >
                    Information Problem
                </h1>
                <p className="text">
                As our problem pertains to data security, the entirety of our problem can be solved through an information solution. We essentially have a large amount of data and must conduct behavioral analysis. The data will be analyzed using a wide array of technology and techniques to find meaningful correlations. The biggest problem we are solving is that the data holds no substance alone and must be analyzed. It consists of an enormous amount of network security group logs, Azure diagnostics, and Azure Metrics.  
                </p>
            </div>
        </div>
    );
}

export default InfoProblem;
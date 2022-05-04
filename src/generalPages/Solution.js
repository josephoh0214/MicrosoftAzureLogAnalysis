import React, { useState, useEffect } from "react";
import './general.scss';


const Solution = ({ width, height }) => {
    return (
        <div style={{ width: width, height: height }}>
            <div className="container">
                <h1 className="title" >
                    Solution
                </h1>
                <p className="text">
                    * Perform in-depth analysis of Microsoft network logs in order to create a comprehensive analysis report.
                </p>
                <p className="text">
                    * Create classification guidelines to explain network log behavior for more efficient recognition and remediation of problems
                </p>
                <p className="text">
                    * Develop an all encompassing web page to act as a one stop for an in depth analysis report and interactive classification search
                </p>
            </div>
        </div>
    );
}

export default Solution;
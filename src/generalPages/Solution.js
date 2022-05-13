import React, { useState, useEffect } from "react";
import './general.scss';
import pic from "../viz/vizCandy/solution.PNG"

const Solution = ({ width, height }) => {
    return (
        <div style={{ width: width, height: height }}>
            <div className="container">
                <h1 className="title" >
                    Solution
                </h1>
                <div>
                    <img src={pic} style={{ float: "right", margin: "3em" }} />
                    <ul className="no-bullet">
                        <li>
                            <p className="text">
                                ○ &emsp; Perform in-depth analysis of Microsoft network logs in order to create a comprehensive analysis report.
                            </p>
                        </li>
                        <li>
                            <p className="text">
                                ○ &emsp; Create classification guidelines to explain network log behavior for more efficient recognition and remediation of problems
                            </p>
                        </li>
                        <li>
                            <p className="text">
                                ○  &emsp;   Develop an all encompassing web page to act as a one stop for an in depth analysis report and interactive classification search
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Solution;
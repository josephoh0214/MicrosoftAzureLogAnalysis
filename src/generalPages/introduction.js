import React, { useState, useEffect } from "react";
import './general.scss';


const Introduction = ({ width, height }) => {
    return (
        <div style={{ width: width, height: height }}>
            <div className="container">
                <h1 className="title" >
                    Introduction
                </h1>
                <p className="text">
                    To keep Microsoft Azure services sustainable and secure, research is needed. Microsoft supports over a billion users whether it be with a product or service. Maintaining confidentiality with user information is a top priority along with the integrity of their data. By conducting research and analysis of data created by evaluating resources in Azure, we can take the necessary steps to ensure those priorities are being met.
                </p>
            </div>
        </div>
    );
}

export default Introduction;
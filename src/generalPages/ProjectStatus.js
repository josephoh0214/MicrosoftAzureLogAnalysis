import React, { useState, useEffect } from "react";
import './general.scss';


const ProjectStatus = ({ width, height }) => {
    return (
        <div style={{ width: width, height: height }}>
            <div className="container">
                <h1 className="title" >
                    Project Status
                </h1>
                <p className="text">
                    At the end of capstone, this webpage will be handed off to the SLAM team where they will begin utilizing our deliverable for their professional analysis and will continue futher developement.
                </p>
            </div>
        </div>
    );
}

export default ProjectStatus;
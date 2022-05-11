import React, { useState, useEffect } from "react";
import './general.scss';
import pic from "../viz/vizCandy/project_status.PNG"

const ProjectStatus = ({ width, height }) => {
    return (
        <div style={{ width: width, height: height }}>
            <div className="container">
                <h1 className="title" >
                    Project Status
                </h1>
                <div>
                <img src={pic} style={{ float: "left", margin: "3em"}}/>
                <p className="text">
                    At the end of capstone, this webpage will be handed off to the SLAM team where they will begin utilizing our deliverable for their professional analysis and will continue futher developement.
                </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectStatus;
import React, { useState, useEffect } from "react";
import './general.scss';
import pic from "../viz/vizCandy/project_difficulties.PNG"

const PrjDiff = ({ width, height }) => {
    return (
        <div style={{ width: width, height: height }}>
            <div className="container">
                <h1 className="title" >
                    Project Difficulties
                </h1>
                <div>
                    <img src={pic} style={{ float: "right", margin: "3em" }} />
                    <p className="textSmall">
                        Due to the nature of this project and environment of our research, we ran into quite a few roadblocks that we think are critical for anyone utilising this technology stack. First, there is a large learning curve, if you don’t have any experience with the Azure platform. There are well over 5000 services within Azure, however our focus was on the network traffic data from Microsoft Defender Endpoint (MDE) that runs on a compute operating system (e.g., a Virtual Machine) and the network related traffic telemetry generated  at the Azure resource layer (e.g., Network Security Groups).
                    </p>
                    <p className="textSmall">
                        After familiarization with the platform, understanding how resources are organized within your subscription will help when it's time to configure permissions. To receive diagnostic, metric, and activity logs in the Azure Log Analytic workspace, role must be properly assigned.
                    </p>
                    <p className="textSmall">
                        There are images that help understand what a lot of the processes needed are. They’re found in Jim Britt’s, an Azure Principal Program manager, GitHub repository. Within the repository, also lists helpful explanations regarding how the pipeline works and exactly how the logs are populated within the LA workspace.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PrjDiff;
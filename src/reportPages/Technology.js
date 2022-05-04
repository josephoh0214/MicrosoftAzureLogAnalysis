import React from "react";
import '../generalPages/general.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"


const Technology = ({ width, height }) => {
    const navigate = useNavigate();

    return (
        <div style={{ width: width, height: height }} className="box">
            <div className="container">
                <h1 className="title" >
                    Technology Stack & Tools
                </h1>
                <p className="text">
                   - Azure DevOps Pipeline Integration:
                    The first phase of our research included the utilization of Azure Devops and a Github repository containing scripts for creating custom Azure policies while the status of our data was pending. The goal was to create mock data by running scripts that test Azure policies against a service. The was important as we needed to see anomalous behaviour and practice-*/874 analysing it.
                </p>
                <p className="text">
                   - Microsoft Azure Log & Analytics Workspace:
                    Once the policies are run, they produce large amounts of data that are laid out in detail. Behind the layout is key information that is parted from the JSON file that the event is contained in.
                </p>
                <p className="text">
                   - Excel:
                    This tool is used to store our individual queries, data produced, as well as any insights we produce. The end goal is to transfer the information into a user-friendly medium.
                </p>
                <p className="text">
                    - JupyterNotebook: We use notebooks to analyze the synthectic log data and render coorresponding viualizations. Notebooks are also used
                </p>
            </div>
            <FaArrowLeft size={100} onClick={() => navigate(-1)} />

        </div>
    );
}

export default Technology;
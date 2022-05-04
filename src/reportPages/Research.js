import React from "react";
import '../generalPages/general.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"


const Research = ({width, height}) => {
    const navigate = useNavigate();

    return (
        <div style={{ width: width, height: height }} className="box">
            <div className="container">
                <h1 className="title" >
                Research
                </h1>
                <p className="text">
                Our research was broken apart into two sprints. The first half included the familiarization with the Azure platform and understanding how Azure policies and initiatives worked. It is exceedingly difficult to have a firm grasp on all the logs and metric data if you don't know how everything is intertwined. For this, we used Contoso Corporation to conduct a thorough analysis. Contoso Corporation is a fully integrated Azure environment for customers and partners to use for demo that is managed by Azure Tools. Out of the Contoso tools, we looked specifically at traffic populated by the Contoso Retail Support webpage.                 
                </p>
                <p className="text">
                The goal of the second sprint was to populate our own logs and supply insight into what were the most important logs and why. This information is critical within the Azure SLAM team, as they have to navigate and analyse an enormous amount of data. This sprint included the setup of an Azure DevOps pipeline. It uses a repository that allows you to dynamically build custom Azure Policies to configure your resources in Azure that support Azure Diagnostics.  The scripts and pipeline are meant for customers that already have resources and are actively using them in an enterprise environment across thousands of resources. So, this script enables a customer to be compliant with already existing resources being used. 
                </p>    
            </div>
           <FaArrowLeft size={100} onClick={() => navigate(-1)}/>
            
        </div>
    );
}

export default Research;
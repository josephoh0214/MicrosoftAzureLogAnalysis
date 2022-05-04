import React from "react";
import '../generalPages/general.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"


const KeyTerms = ({width, height}) => {
    const navigate = useNavigate();

    return (
        <div style={{ width: width, height: height }} className="box">
            <div className="container">
                <h1 className="title" >
                Key Terms
                </h1>
                <p className="text">
                *Understanding Azure policies and initiatives is central to this research. That is where the data is coming from. Azure Policy is a service in Azure which allows you create polices which enforce and control the properties of a resource. When these policies are used, they enforce different rules and effects over your resources, so those resources stay compliant with your IT governance standards.                 </p>
                <p className="text">
                *Azure initiative is a collection of Azure policy definitions that are grouped together towards a specific goal or purpose in mind.                 </p>    
            </div>
           <FaArrowLeft size={100} onClick={() => navigate(-1)}/>
            
        </div>
    );
}

export default KeyTerms;
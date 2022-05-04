import React from "react";
import '../generalPages/general.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"


const QRF = ({ width, height }) => {
    const navigate = useNavigate();

    return (
        <div style={{ width: width, height: height }} className="box">
            <div className="container">
                <h1 className="title" >
                    Qualitative Research Findings
                </h1>
                <p className="text">
                    We performed interviews with SLAM team members to learn first-hand about the capabilities and requirements of the solution. Through the walk throughs, our main takeaways included:
                </p>
                <p className="text">
                    Organization and color-coding of documentation should be utilized
                </p>
                <p className="text">
                    Making sure signals are correct and relevant is essential
                </p>
                <p className="text">
                    Visualizations are an important aspect of the solution but mostly as a form of background information
                </p>
            </div>
            <FaArrowLeft size={100} onClick={() => navigate(-1)} />

        </div>
    );
}

export default QRF;
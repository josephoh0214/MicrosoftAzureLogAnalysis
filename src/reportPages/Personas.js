import React from "react";
import '../generalPages/general.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"
import personaImg from "../viz/persona.png"

const Personas = ({width, height}) => {
    const navigate = useNavigate();

    return (
        <div style={{ width: width, height: height }} className="box">
            <div className="container">
                <h1 className="title" >
                Personas
                </h1>
                
                <p className="text">
                In order to provide an analysis of the data that meets the expectations of everyone in the Microsoft SLAM team who will interact with it, we created personas based off of employee input. 
                </p>
                <img src={personaImg} width="60%" height="60%" style={{ float: "right", margin: "3em"}}/>
                <p className="text">
                Shogun here, is a persona used to create a shared understanding amongst our team for a specific type of user that will utilize our research. 
                </p>    
            </div>
           <FaArrowLeft size={100} onClick={() => navigate(-1)}/>
            
        </div>
    );
}

export default Personas;
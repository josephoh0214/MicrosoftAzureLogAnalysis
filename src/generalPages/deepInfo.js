import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"
import { FaArrowRight } from 'react-icons/fa';
import './general.scss';


const DeepInfo = ({ width, height }) => {
    const topics = { "Research": ["Research", "#23AEB8"], "Analysis Approach": ["AnalysisApproach", "#418085"], "Key Terms": ["KeyTerms", "#15EB80"], "Technology": ["Technology", "#ED5163"], "Personas": ["Personas", "#B8237F"], "Qualitative Research Findings": ["QRF", "#9E521E"] }
    const generateCards = () => {
        return Object.entries(topics).map(item => {
            return (
                <Card border="dark" style={{ width: '18rem', backgroundColor: item[1][1], margin: "10px", padding: "20px"}}>
                    <Card.Title style={{color: "white", fontSize: "25px"}}>
                        {item[0]}
                    </Card.Title>
                    <Link to={`/${item[1][0]}`} ><div style={{display: "flex", padding: "20px"}}><FaArrowRight color={"white"} size={50}/></div></Link>
                </Card>
            )
        })
    }
    return (
        <div style={{ width: width, height: height }}>
            <div className="container">
                <h1 className="title" >
                    Look Deeper
                </h1>
                <div className="cardContainer">
                    {generateCards()}
                </div>
            </div>
        </div>
    );
}

export default DeepInfo;
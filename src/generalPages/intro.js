import React, { useState, useEffect } from "react";
import './intro.scss';
import { FaArrowDown } from 'react-icons/fa';

const Intro = ({height, width}) => {
    return (
        <div className="header" style={{width: width, height: height}}>
            <h1 className="headline">
                HUSKY SLAM
            </h1>
            <p>
                Let's get started
            </p>
            <FaArrowDown size={100}/>
        </div>
    );
}

export default Intro;